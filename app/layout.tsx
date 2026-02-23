import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "ViajaSmart",
  description: "Plataforma tecnológica aplicada al turismo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo clickeable */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Viaja<span className="text-cyan-400">Smart</span>
            </Link>

            {/* Espacio reservado futuro */}
            <div className="text-white/40 text-sm">
              Cartagena
            </div>

          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}