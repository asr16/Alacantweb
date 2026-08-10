/**
 * Genera una versión ligera de un PDF rasterizando cada página a JPEG.
 * Necesario para cartas de diseño cuyo original pesa cientos de MB y no puede
 * servirse en la web.
 *
 * Uso: node scripts/pdf-optimize.mjs <pdf-origen> <pdf-destino> [ancho-px] [calidad]
 */
import fs from "node:fs";
import * as mupdf from "mupdf";
import sharp from "sharp";

const [, , srcPath, outPath, widthArg, qualityArg] = process.argv;

if (!srcPath || !outPath) {
  console.error("Uso: node scripts/pdf-optimize.mjs <pdf-origen> <pdf-destino> [ancho] [calidad]");
  process.exit(1);
}

const targetWidth = Number(widthArg) || 1400;
const quality = Number(qualityArg) || 78;

const doc = mupdf.Document.openDocument(fs.readFileSync(srcPath), "application/pdf");
const pageCount = doc.countPages();

const buffer = new mupdf.Buffer();
const writer = new mupdf.DocumentWriter(buffer, "pdf", "compress");

for (let i = 0; i < pageCount; i++) {
  const page = doc.loadPage(i);
  const bounds = page.getBounds();
  const [x0, y0, x1, y1] = bounds;
  const pageWidth = x1 - x0;
  const pageHeight = y1 - y0;
  const scale = targetWidth / pageWidth;

  const pixmap = page.toPixmap(
    mupdf.Matrix.scale(scale, scale),
    mupdf.ColorSpace.DeviceRGB,
    false,
    true,
  );

  const jpeg = await sharp(Buffer.from(pixmap.asPNG()))
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();

  const image = new mupdf.Image(new mupdf.Buffer(jpeg));

  // fillImage dibuja la imagen sobre el cuadrado unidad ya orientada, así que
  // basta escalarla al tamaño de la página.
  const device = writer.beginPage([0, 0, pageWidth, pageHeight]);
  device.fillImage(image, [pageWidth, 0, 0, pageHeight, 0, 0], 1);
  device.close();
  writer.endPage();

  console.log(`página ${i + 1}/${pageCount}  ${(jpeg.length / 1024).toFixed(0)} KB`);

  pixmap.destroy();
  page.destroy();
}

writer.close();
fs.writeFileSync(outPath, Buffer.from(buffer.asUint8Array()));
console.log(`\n${outPath}  ${(fs.statSync(outPath).size / 1024 / 1024).toFixed(2)} MB`);
