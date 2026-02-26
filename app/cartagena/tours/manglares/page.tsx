import Link from "next/link";

export const metadata = {
  title: "Tour por los Manglares en Cartagena 2026 | Precio y Experiencia",
  description:
    "Descubre el tour por los manglares en Cartagena. Naturaleza, tranquilidad y experiencia ecológica cerca de la ciudad.",
};

export default function Manglares() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Tour por los Manglares en Cartagena
      </h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        Una experiencia diferente en Cartagena. Ideal para quienes buscan
        naturaleza, tranquilidad y conocer el ecosistema local.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¿Qué incluye?</h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Recorrido en canoa o lancha</li>
          <li>• Guía local</li>
          <li>• Observación de fauna y flora</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Precio aproximado</h2>
        <p className="text-gray-400">
          El costo suele variar entre $70.000 y $130.000 COP según duración y
          tipo de recorrido.
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
