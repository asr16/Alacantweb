import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-texto sm:text-4xl">
        Política de privacidad
      </h1>
      <p className="mt-4 text-sm text-texto-suave">
        Información sobre el tratamiento de datos personales en este sitio web.
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-texto-suave">
        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-3">
            {siteConfig.name}
            <br />
            {siteConfig.address.full}
            <br />
            Email: {siteConfig.email}
            <br />
            Teléfono: {siteConfig.phone}
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            2. Datos que tratamos
          </h2>
          <p className="mt-3">
            En esta versión informativa del sitio no se recogen datos personales
            mediante formularios propios. Si contactas por WhatsApp, teléfono o
            email, los datos que nos facilites se usarán únicamente para
            atender tu consulta.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            3. Finalidad y base legal
          </h2>
          <p className="mt-3">
            Atender solicitudes de información y comunicación con clientes o
            potenciales clientes. La base legal es el interés legítimo y/o la
            ejecución de medidas precontractuales a petición del interesado
            (art. 6.1 RGPD).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            4. Conservación
          </h2>
          <p className="mt-3">
            Los datos de contacto se conservarán el tiempo necesario para
            gestionar la consulta y, en su caso, durante los plazos legales
            aplicables.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            5. Destinatarios
          </h2>
          <p className="mt-3">
            No se ceden datos a terceros salvo obligación legal o proveedores
            imprescindibles para la comunicación (por ejemplo, Meta/WhatsApp si
            usas ese canal). El sitio puede enlazar a Google Maps e Instagram,
            sujetos a sus propias políticas.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            6. Derechos
          </h2>
          <p className="mt-3">
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a{" "}
            {siteConfig.email}. También puedes reclamar ante la Agencia Española
            de Protección de Datos (www.aepd.es).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-texto">
            7. Cookies
          </h2>
          <p className="mt-3">
            Este sitio no utiliza cookies de analítica ni publicidad. El
            selector de idioma puede guardar una preferencia en{" "}
            <code className="rounded bg-arena px-1 text-texto">localStorage</code>{" "}
            del navegador. Si en el futuro se añaden cookies no esenciales, se
            informará y solicitará consentimiento.
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link href="/aviso-legal" className="font-medium text-mar hover:text-mar-claro">
          ← Volver al aviso legal
        </Link>
      </p>
    </div>
  );
}
