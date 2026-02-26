import Link from "next/link";

export const metadata = {
  title: "City Tour Cartagena 2026 | Precio y Qué Incluye",
  description:
    "Guía completa del City Tour en Cartagena: recorrido por Centro Histórico, Getsemaní y puntos icónicos. Precios actualizados y recomendaciones.",
};

export default function CityTour() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        City Tour en Cartagena
      </h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        El City Tour es una de las mejores opciones para conocer los puntos
        más emblemáticos de Cartagena en pocas horas.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Qué incluye el City Tour?
        </h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Recorrido por el Centro Histórico</li>
          <li>• Paradas en monumentos icónicos</li>
          <li>• Visita a Getsemaní</li>
          <li>• Guía turístico</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Precio aproximado
        </h2>
        <p className="text-gray-400">
          El precio suele oscilar entre $80.000 y $150.000 COP dependiendo
          del operador y duración del tour.
        </p>
      </section>

      <section className="mb-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Vale la pena?
        </h2>
        <p className="text-gray-400">
          Sí, especialmente si es tu primera vez en Cartagena y quieres
          una visión general antes de explorar por tu cuenta.
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

    </main>
  );
}