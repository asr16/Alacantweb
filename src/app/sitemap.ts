import type { MetadataRoute } from "next";
import { cartaDocs } from "@/data/cartas";
import { siteConfig } from "@/data/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticPages: {
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/carta", changeFrequency: "weekly", priority: 0.9 },
  { path: "/carta-2", changeFrequency: "monthly", priority: 0.7 },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.6 },
  { path: "/aviso-legal", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: SitemapEntry[] = staticPages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const cartaDocuments: SitemapEntry[] = cartaDocs.map((doc) => ({
    url: `${siteConfig.url}/carta-2?doc=${doc.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: doc.id === "carta-alergenos" ? 0.55 : 0.5,
  }));

  return [...pages, ...cartaDocuments];
}
