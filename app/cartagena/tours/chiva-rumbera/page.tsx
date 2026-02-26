import Link from "next/link";

export const metadata = {
  title: "Chiva Rumbera en Cartagena 2026 | Precio y Qué Esperar",
  description:
    "Guía del tour en Chiva Rumbera en Cartagena. Recorrido nocturno con música y ambiente festivo por la ciudad.",
};

export default function ChivaRumbera() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Chiva Rumbera en Cartagena</h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        La Chiva Rumbera es uno de los tours nocturnos más populares. Música,
        baile y recorrido por puntos icónicos de Cartagena.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¿Qué incluye?</h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Recorrido en bus típico decorado</li>
          <li>• Música en vivo o DJ</li>
          <li>• Paradas en lugares turísticos</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Precio aproximado</h2>
        <p className="text-gray-400">
          El precio suele estar entre $70.000 y $120.000 COP dependiendo del
          operador.
        </p>
      </section>

      <section className="mt-16 text-center">
        <Link
          href="/cartagena/mejores-tours"
          className="text-cyan-400 hover:underline"
        >
          ← Ver comparativa de mejores tours
        </Link>
      </section>

      <section className="mt-6 text-center">
        <Link
          href="/cartagena/tours"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          Ver todos los tours →
        </Link>
      </section>
    </main>
  );
}
