import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tours en Cartagena 2026 | Mejores Planes y Precios",
  description:
    "Descubre los mejores tours en Cartagena: Islas del Rosario, City Tour, Chiva Rumbera, Manglares y Volcán del Totumo. Precios y recomendaciones 2026.",
};

const tours = [
  {
    title: "Islas del Rosario",
    description:
      "El tour más popular de Cartagena. Playa, agua cristalina y plan de día completo.",
    href: "/cartagena/tours/islas-del-rosario",
    price: "Desde $120.000 COP",
  },
  {
    title: "City Tour Cartagena",
    description:
      "Recorre el Centro Histórico, Getsemaní y los principales puntos turísticos.",
    href: "/cartagena/tours/city-tour",
    price: "Desde $70.000 COP",
  },
  {
    title: "Chiva Rumbera",
    description:
      "Fiesta nocturna sobre ruedas por la ciudad amurallada y Bocagrande.",
    href: "/cartagena/tours/chiva-rumbera",
    price: "Desde $50.000 COP",
  },
  {
    title: "Manglares en La Boquilla",
    description:
      "Experiencia ecológica en canoa por los manglares al atardecer.",
    href: "/cartagena/tours/manglares",
    price: "Desde $90.000 COP",
  },
  {
    title: "Volcán del Totumo",
    description:
      "Baño en volcán de lodo a una hora de Cartagena. Experiencia diferente y popular.",
    href: "/cartagena/tours/volcan-del-totumo",
    price: "Desde $80.000 COP",
  },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Tours en Cartagena: Los Mejores Planes para Tu Viaje
        </h1>

        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Cartagena ofrece muchas experiencias, pero no todos los tours valen la
          pena. Aquí encontrarás los planes más recomendados para aprovechar tu
          viaje al máximo.
        </p>
      </section>

      {/* GRID */}
      <section className="grid md:grid-cols-2 gap-8">
        {tours.map((tour) => (
          <Link
            key={tour.href}
            href={tour.href}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-xl font-semibold mb-3">{tour.title}</h2>

            <p className="text-gray-400 mb-4">{tour.description}</p>

            <p className="text-cyan-400 font-semibold mb-4">{tour.price}</p>

            <span className="text-sm text-gray-500">Ver detalles →</span>
          </Link>
        ))}
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿No sabes cuál elegir?</h2>
        <Link
          href="/cartagena/mejores-tours"
          className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          Ver comparativa completa →
        </Link>
      </section>
    </main>
  );
}
