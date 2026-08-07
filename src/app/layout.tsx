import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Providers } from "@/components/Providers";
import { siteConfig } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  icons: {
    icon: "/brand/logo-alacant.png",
    apple: "/brand/logo-alacant.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/brand/logo-alacant.png",
        alt: siteConfig.name,
      },
    ],
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
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-crema text-texto">
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
