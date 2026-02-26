import Link from "next/link";

export const metadata = {
  title: "Mejores Tours en Cartagena 2026 | Guía Completa",
  description:
    "Descubre los mejores tours en Cartagena: Islas del Rosario, City Tour, Volcán del Totumo y más. Comparativa clara para elegir la mejor experiencia.",
};

export default function MejoresTours() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Mejores Tours en Cartagena
      </h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        Cartagena ofrece experiencias únicas en el Caribe. Aquí encontrarás
        una comparativa clara de los tours más populares para que elijas
        según tu presupuesto, tiempo y tipo de viaje.
      </p>

      {/* Islas del Rosario */}
      <section className="mb-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Islas del Rosario
        </h2>
        <p className="text-gray-400 mb-4">
          El tour más solicitado desde Cartagena. Incluye transporte en lancha,
          playas de aguas turquesa y día completo en el Caribe.
        </p>
        <Link
          href="/cartagena/tours/islas-del-rosario"
          className="text-cyan-400 hover:underline"
        >
          Ver guía completa →
        </Link>
      </section>

      {/* City Tour */}
      <section className="mb-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. City Tour Cartagena
        </h2>
        <p className="text-gray-400 mb-4">
          Ideal para conocer el Centro Histórico, Getsemaní y los principales
          puntos culturales en pocas horas.
        </p>
        <Link
          href="/cartagena/tours/city-tour"
          className="text-cyan-400 hover:underline"
        >
          Explorar →
        </Link>
      </section>

      {/* Volcán del Totumo */}
      <section className="mb-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Volcán del Totumo
        </h2>
        <p className="text-gray-400 mb-4">
          Experiencia diferente y divertida: baño en volcán de lodo natural
          a pocos kilómetros de Cartagena.
        </p>
        <Link
          href="/cartagena/tours/volcan-del-totumo"
          className="text-cyan-400 hover:underline"
        >
          Ver detalles →
        </Link>
      </section>

      {/* CTA final */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Cuál tour es mejor para ti?
        </h2>
        <p className="text-gray-400 mb-6">
          Analiza presupuesto, duración y experiencia antes de reservar.
        </p>
        <Link
          href="/cartagena/tours/islas-del-rosario"
          className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          Ver tour más popular →
        </Link>
      </section>

    </main>
  );
}