# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

# ---------- Base ----------
# Debian slim (glibc): evita problemas con sharp en Alpine (musl)
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---------- Dependencias ----------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---------- Build ----------
# Requiere salida a Internet: next/font/google descarga las tipografías
# (Source Sans 3 y Syne) durante el build y las incrusta en la imagen.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* se fija en tiempo de build (sitemap, robots, metadatos)
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN npm run build

# ---------- Producción ----------
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# El servidor standalone no copia public/ ni .next/static: se añaden a mano
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Usuario sin privilegios (ya incluido en la imagen oficial de node)
USER node

EXPOSE 3000

# La imagen slim no trae curl/wget: se usa el fetch de Node
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]