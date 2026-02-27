import Link from "next/link";
import AffiliateButton from "@/app/components/AffiliateButton";

export const metadata = {
  title: "Volcán del Totumo 2026 | Precio, Qué Incluye y Consejos",
  description:
    "Guía completa del tour al Volcán del Totumo desde Cartagena. Precios actualizados, qué incluye y recomendaciones antes de ir.",
};

export default function VolcanDelTotumo() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Tour al Volcán del Totumo</h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        El Volcán del Totumo es una experiencia única cerca de Cartagena.
        Permite bañarte en lodo volcánico natural y disfrutar de una actividad
        diferente durante tu viaje.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¿Qué incluye el tour?</h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Transporte ida y vuelta desde Cartagena</li>
          <li>• Entrada al volcán</li>
          <li>• Tiempo para baño en lodo</li>
          <li>• Limpieza en laguna cercana</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Precio aproximado</h2>
        <p className="text-gray-400">
          El tour suele costar entre $120.000 y $180.000 COP dependiendo del
          operador y servicios incluidos.
        </p>
      </section>

      <section className="mb-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Recomendaciones</h2>
        <ul className="space-y-3 text-gray-400">
          <li>• Llevar ropa cómoda y sandalias</li>
          <li>• No llevar objetos de valor</li>
          <li>• Llevar efectivo para propinas</li>
        </ul>
      </section>

      <div className="mt-16 text-center">
        <AffiliateButton
          href="https://www.getyourguide.es/cartagena-de-indias-l362/cartagena-experiencia-en-el-volcan-de-barro-del-totumo-t323228/?partner_id=C5W2W5Y&utm_medium=online_publisher"
          label="Ver disponibilidad Manglares →"
          eventName="click_manglares"
        />
      </div>

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
