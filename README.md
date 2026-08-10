# Heladería Alacant

Sitio web informativo de **Heladería Alacant** en Roquetas de Mar (Almería).

## Páginas

- **Inicio** — Portada ilustrada, historia, sabores destacados, categorías y reseñas
- **Carta** — Catálogo con los productos reales del local (búsqueda y filtros por categoría)
- **Carta 2** — Cartas oficiales en PDF mostradas como imágenes a pantalla completa
- **Sobre nosotros** — Historia y valores
- **Contacto** — Ubicación, horario, teléfono y mapa

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Cartas en PDF

Para regenerar las imágenes de Carta 2 a partir de un PDF:

```bash
npm run carta:pdf -- "public/carta/carta-dulce.pdf" "public/carta/dulce" 2000
```

Para generar una versión ligera de un PDF muy pesado:

```bash
npm run carta:pdf-lite -- "ruta/original.pdf" "public/carta/carta-principal.pdf"
```

## Notas

- Los PDFs oficiales no incluyen precios: la carta web tampoco los muestra hasta que se faciliten.
- Instagram: [@heladeriaalacantroquetas](https://www.instagram.com/heladeriaalacantroquetas/)
