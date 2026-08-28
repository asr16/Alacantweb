import fs from "node:fs";
import path from "node:path";
import * as mupdf from "mupdf";

const dir = process.argv[2];
if (!dir) {
  console.error("Uso: node scripts/count-pdf-pages.mjs <carpeta>");
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf")).sort();
for (const f of files) {
  const p = path.join(dir, f);
  const size = (fs.statSync(p).size / 1024 / 1024).toFixed(1);
  const doc = mupdf.Document.openDocument(fs.readFileSync(p), "application/pdf");
  console.log(`${f} | ${doc.countPages()} pags | ${size} MB`);
}
