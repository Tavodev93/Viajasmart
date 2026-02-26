import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViajaSmart | Guía Inteligente para Cartagena",
  description:
    "Recomendaciones reales de tours, precios y experiencias para viajar a Cartagena sin sobrecostos.",
  verification: {
    google: "CtkMU7PQSkz69x_dRA-",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJXX5DD3BC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-BJXX5DD3BC');
          `}
        </Script>

        {children}

        {/* Footer */}
        <footer className="mt-24 border-t border-zinc-800 py-10">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-gray-400">

            <div>
              <h3 className="font-semibold text-white mb-3">ViajaSmart</h3>
              <p>
                Guía independiente sobre turismo en Cartagena.
                Recomendaciones reales y enlaces afiliados.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Explorar</h3>
              <ul className="space-y-2">

                <li>
                  <Link
                    href="/cartagena/tours"
                    className="hover:text-cyan-400 transition"
                  >
                    Tours en Cartagena
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cartagena/tours/islas-del-rosario"
                    className="hover:text-cyan-400 transition"
                  >
                    Islas del Rosario
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cartagena/precio-taxi-aeropuerto"
                    className="hover:text-cyan-400 transition"
                  >
                    Taxi Aeropuerto
                  </Link>
                </li>

              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2">

                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="hover:text-cyan-400 transition"
                  >
                    Sobre Nosotros
                  </Link>
                </li>

                <li>
                  <Link
                    href="/politica-privacidad"
                    className="hover:text-cyan-400 transition"
                  >
                    Política de Privacidad
                  </Link>
                </li>

                <li>
                  <Link
                    href="/aviso-afiliados"
                    className="hover:text-cyan-400 transition"
                  >
                    Aviso de Afiliados
                  </Link>
                </li>

              </ul>
            </div>

          </div>

          <div className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} ViajaSmart. Todos los derechos reservados.
          </div>
        </footer>

      </body>
    </html>
  );
}