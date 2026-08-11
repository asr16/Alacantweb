import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/carta",
    "/carta-2",
    "/nosotros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
  ];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/carta" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/carta" ? 0.9 : 0.6,
  }));
}
