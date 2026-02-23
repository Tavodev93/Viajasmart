import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precio Taxi Aeropuerto Cartagena 2026 (Centro y Bocagrande)",
  description:
    "Cuánto cuesta el taxi desde el Aeropuerto de Cartagena al Centro y Bocagrande. Tarifas reales 2026 y consejos para evitar cobros excesivos.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">

      {/* HERO */}
      <section className="mb-14">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Taxi del Aeropuerto de Cartagena al Centro:
          <span className="text-cyan-400"> Precio Real en 2026</span>
        </h1>

        <p className="text-sm text-gray-400">
          Información actualizada en enero 2026.
        </p>
      </section>

      {/* PRECIOS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          ¿Cuánto cuesta el taxi desde el Aeropuerto de Cartagena?
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-6">
            En Cartagena no se usa taxímetro. La tarifa es fija por zonas.
          </p>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Centro Histórico</span>
              <span className="font-semibold">$18.000 – $25.000 COP</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Bocagrande</span>
              <span className="font-semibold">$15.000 – $22.000 COP</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>El Laguito</span>
              <span className="font-semibold">$18.000 – $25.000 COP</span>
            </div>

            <div className="flex justify-between">
              <span>Zona Norte (Morros, Serena del Mar)</span>
              <span className="font-semibold">$25.000 – $40.000 COP</span>
            </div>
          </div>
        </div>
      </section>

      {/* DONDE TOMARLO */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Dónde tomar el taxi oficial?
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Al salir del terminal encontrarás una fila organizada de taxis
          amarillos oficiales. Son seguros y están regulados.
          Evita ofertas informales dentro del aeropuerto.
        </p>
      </section>

      {/* CONSEJOS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Cómo evitar que te cobren de más
        </h2>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <ul className="space-y-3 text-gray-200">
            <li>✔ Pregunta el precio antes de subir.</li>
            <li>✔ Confirma el destino exacto (hotel o dirección).</li>
            <li>✔ Lleva efectivo en pesos colombianos.</li>
            <li>✔ Si el precio te parece alto, consulta otro conductor.</li>
          </ul>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Es seguro tomar taxi en el aeropuerto?
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Sí. Los taxis oficiales operan las 24 horas y suelen ser
          la opción más sencilla y rápida para llegar al Centro
          Histórico o Bocagrande.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Preguntas frecuentes
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿El taxi funciona 24 horas?
            </h3>
            <p className="text-gray-400">
              Sí, hay taxis disponibles todo el día y la noche.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Aceptan tarjeta?
            </h3>
            <p className="text-gray-400">
              La mayoría no. Es recomendable pagar en efectivo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              ¿Cuánto demora el trayecto al Centro?
            </h3>
            <p className="text-gray-400">
              Entre 10 y 15 minutos dependiendo del tráfico.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}