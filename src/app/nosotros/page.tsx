import type { Metadata } from "next";
import { NosotrosContent } from "@/components/NosotrosContent";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Historia de Heladería Alacant: más de 50 años de helado artesano con tradición alicantina en Roquetas de Mar.",
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
