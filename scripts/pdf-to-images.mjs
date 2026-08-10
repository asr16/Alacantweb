/**
 * Rasteriza un PDF a imágenes WebP para mostrarlo como contenido de la web,
 * sin la interfaz del visor nativo del navegador.
 *
 * Uso: node scripts/pdf-to-images.mjs <pdf> <carpeta-destino> [ancho-objetivo] [calidad]
 */
import fs from "node:fs";
import path from "node:path";
import * as mupdf from "mupdf";
import sharp from "sharp";

const [, , pdfPath, outDir, widthArg, qualityArg] = process.argv;

if (!pdfPath || !outDir) {
  console.error("Uso: node scripts/pdf-to-images.mjs <pdf> <carpeta-destino> [ancho] [calidad]");
  process.exit(1);
}

const targetWidth = Number(widthArg) || 2000;
const quality = Number(qualityArg) || 90;

fs.mkdirSync(outDir, { recursive: true });

const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const pageCount = doc.countPages();
const pages = [];

for (let i = 0; i < pageCount; i++) {
  const page = doc.loadPage(i);
  const [x0, , x1] = page.getBounds();
  const scale = targetWidth / (x1 - x0);

  const pixmap = page.toPixmap(
    mupdf.Matrix.scale(scale, scale),
    mupdf.ColorSpace.DeviceRGB,
    false,
    true,
  );

  const name = `pagina-${i + 1}.webp`;
  const outPath = path.join(outDir, name);
  const info = await sharp(Buffer.from(pixmap.asPNG()))
    .webp({ quality, effort: 6 })
    .toFile(outPath);

  pages.push({ src: name, width: info.width, height: info.height });
  console.log(`${name}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);

  pixmap.destroy();
  page.destroy();
}

fs.writeFileSync(path.join(outDir, "pages.json"), JSON.stringify(pages, null, 2) + "\n");
console.log(`\n${pageCount} página(s) en ${outDir}`);
