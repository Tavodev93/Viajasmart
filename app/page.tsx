import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Guía Inteligente para Viajar a
          <span className="text-cyan-400"> Cartagena</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Recomendaciones reales sobre tours, precios y experiencias
          para aprovechar tu viaje a Cartagena sin perder tiempo ni dinero.
        </p>

        <div className="mt-8">
          <Link
            href="/cartagena/tours"
            className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
          >
            Ver Mejores Tours →
          </Link>
        </div>
      </section>

      {/* SECCIÓN DESTACADA */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">
          Experiencias Imperdibles en Cartagena
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            href="/cartagena/tours/islas-del-rosario"
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              Islas del Rosario
            </h3>
            <p className="text-gray-400 mb-4">
              El tour más popular desde Cartagena. Playa, mar turquesa y día completo en el Caribe.
            </p>
            <span className="text-sm text-gray-500">
              Ver precios y detalles →
            </span>
          </Link>

          <Link
            href="/cartagena/tours/city-tour"
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              City Tour Cartagena
            </h3>
            <p className="text-gray-400 mb-4">
              Recorre el Centro Histórico, Getsemaní y los puntos más icónicos.
            </p>
            <span className="text-sm text-gray-500">
              Explorar →
            </span>
          </Link>

        </div>
      </section>

      {/* GUÍA PRÁCTICA */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Información Útil para Tu Llegada
        </h2>

        <div className="space-y-4">
          <Link
            href="/cartagena/precio-taxi-aeropuerto"
            className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            Precio Taxi Aeropuerto Cartagena →
          </Link>

          <Link
            href="/cartagena/tours"
            className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            Todos los Tours en Cartagena →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center mt-24">
        <h2 className="text-2xl font-semibold mb-4">
          Planea mejor tu viaje a Cartagena
        </h2>

        <p className="text-gray-400 mb-8">
          Encuentra recomendaciones claras, precios actualizados y las mejores experiencias.
        </p>

        <Link
          href="/cartagena/tours/islas-del-rosario"
          className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          Ver Tour a Islas del Rosario →
        </Link>
      </section>

    </main>
  );
}