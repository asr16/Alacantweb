import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { siteConfig } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Helados en Roquetas de Mar`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "heladería Roquetas de Mar",
    "helados artesanos",
    "Heladería Alacant",
    "cafetería Roquetas",
    "pastelería Almería",
  ],
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: "/brand/logo-alacant-icon.png",
    apple: "/brand/logo-alacant-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    alternateLocale: ["en_GB"],
    type: "website",
    images: [
      {
        url: "/images/portada.jpg",
        width: 3840,
        height: 1444,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/portada.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-crema text-texto">
        <LocalBusinessJsonLd />
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
