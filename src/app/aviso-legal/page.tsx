import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${siteConfig.name}.`,
};

export default function AvisoLegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-texto sm:text-4xl">
        Aviso legal
      </h1>
      <p className="mt-4 text-sm text-texto-suave">
        Última actualización: agosto 2026.
      </p>

      <div className="prose-legal mt-10 space-y-8 text-texto-suave leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            1. Datos identificativos
          </h2>
          <p className="mt-3">
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Titular: {siteConfig.name}</li>
            {/* TODO(cliente): sustituir por el NIF/CIF real cuando lo facilite el titular.
                Mientras no esté confirmado, no se muestra un texto provisional al público. */}
            <li>Domicilio: {siteConfig.address.full}</li>
            <li>Teléfono: {siteConfig.phone}</li>
            <li>Email: {siteConfig.email}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            2. Objeto del sitio web
          </h2>
          <p className="mt-3">
            Este sitio web tiene carácter informativo. Ofrece información sobre
            la heladería, su carta, ubicación y formas de contacto. No constituye
            una tienda online ni un canal de contratación electrónica.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            3. Propiedad intelectual
          </h2>
          <p className="mt-3">
            Los textos, diseño, logotipos e imágenes del sitio (cuando sean
            propios del titular) están protegidos por la normativa de propiedad
            intelectual. Queda prohibida su reproducción sin autorización, salvo
            usos permitidos por la ley.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            4. Responsabilidad
          </h2>
          <p className="mt-3">
            El titular procura mantener la información actualizada, pero no
            garantiza la ausencia de errores ni la disponibilidad ininterrumpida
            del sitio. Los horarios y precios pueden variar; se recomienda
            confirmarlos en el local o por teléfono.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            5. Enlaces
          </h2>
          <p className="mt-3">
            El sitio puede incluir enlaces a terceros (Google Maps, Instagram,
            etc.). El titular no se responsabiliza del contenido ni de
            las políticas de esos servicios externos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            6. Legislación aplicable
          </h2>
          <p className="mt-3">
            Las presentes condiciones se rigen por la legislación española. Para
            cualquier controversia, las partes se someten a los juzgados y
            tribunales de Almería, salvo norma imperativa en contrario.
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link href="/privacidad" className="font-medium text-mar hover:text-mar-claro">
          Ver política de privacidad →
        </Link>
      </p>
    </div>
  );
}
