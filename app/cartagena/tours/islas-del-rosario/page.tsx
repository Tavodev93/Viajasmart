"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Islas del Rosario 2026 | Precios desde Cartagena",
  description:
    "Guía completa del tour a las Islas del Rosario desde Cartagena. Precios actualizados 2026, qué incluye y recomendaciones antes de reservar.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Tour a las Islas del Rosario desde Cartagena:
          <span className="text-cyan-400"> Precios y Recomendaciones 2026</span>
        </h1>

        <p className="text-gray-400 max-w-2xl leading-relaxed">
          El tour a las Islas del Rosario es el plan más popular para quienes
          visitan Cartagena. Playa, mar turquesa y día completo en el Caribe
          colombiano.
        </p>
      </section>

      {/* PRECIO */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Cuánto cuesta el tour a Islas del Rosario?
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-lg mb-4">Precio promedio en 2026:</p>

          <p className="text-3xl font-bold text-cyan-400 mb-4">
            $120.000 – $180.000 COP
          </p>

          <p className="text-gray-400">
            El precio depende del tipo de embarcación, playa incluida y
            servicios adicionales.
          </p>
        </div>
      </section>

      {/* QUE INCLUYE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Qué incluye normalmente el tour?
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Transporte en lancha rápida ida y regreso</li>
          <li>✔ Almuerzo típico</li>
          <li>✔ Acceso a playa privada o club de playa</li>
          <li>✔ Tiempo libre para disfrutar el mar</li>
        </ul>
      </section>

      {/* RECOMENDACIONES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Recomendaciones antes de reservar
        </h2>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <ul className="space-y-3 text-gray-200">
            <li>✔ Salen temprano (7:30 – 8:30 a.m.)</li>
            <li>✔ El mar puede estar movido en temporada de viento</li>
            <li>✔ Lleva bloqueador solar y efectivo extra</li>
            <li>✔ No todos los tours visitan las mismas playas</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">¿Vale la pena el tour?</h2>

        <p className="text-gray-300 leading-relaxed">
          Sí, especialmente si quieres conocer el Caribe fuera de la ciudad. Es
          una experiencia de día completo y uno de los planes más recomendados
          para parejas, grupos de amigos y viajeros internacionales.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Preguntas frecuentes</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuánto dura el tour?
            </h3>
            <p className="text-gray-400">Aproximadamente 7 a 8 horas.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Se puede ir por cuenta propia?
            </h3>
            <p className="text-gray-400">
              Es posible, pero resulta más costoso y menos práctico que el tour
              organizado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Incluye impuesto portuario?
            </h3>
            <p className="text-gray-400">
              Algunos tours lo incluyen y otros lo cobran aparte.
            </p>
          </div>
        </div>
        <div className="mt-8 bg-cyan-500/10 border border-cyan-400/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Reserva el Tour Mejor Valorado
          </h3>
          <p className="text-gray-300 mb-6">
            Precio fijo confirmado. Cancelación gratuita.
          </p>
          <a
            href="https://www.getyourguide.es/bolivar-l578/cartagena-5-puntos-destacados-de-las-islas-del-rosario-con-almuerzo-t497946/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "click_islas_rosario", {
                        event_category: "affiliate",
                        event_label: "boton_principal",
                    });
                }
            }}
            className="inline-block bg-cyan-400 text-black font-semibold px-8 py-3 rounded-xl hover:bg-cyan-300 transition"
          >
            Ver disponibilidad →
          </a>
        </div>
      </section>
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Listo para visitar las Islas del Rosario?
        </h2>

        <p className="text-gray-400 mb-6">
          Consulta disponibilidad actualizada y precios oficiales.
        </p>

        <a
          href="https://www.getyourguide.es/bolivar-l578/cartagena-5-puntos-destacados-de-las-islas-del-rosario-con-almuerzo-t497946/"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-300 transition"
        >
          Reservar tour ahora →
        </a>
      </section>
    </main>
  );
}
