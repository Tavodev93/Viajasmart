export const metadata = {
  title: "Aviso de Afiliados | ViajaSmart",
  description:
    "Información sobre el uso de enlaces afiliados en ViajaSmart.",
};

export default function AvisoAfiliados() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Aviso de Afiliados</h1>

      <p className="text-gray-400 leading-relaxed mb-4">
        En ViajaSmart utilizamos enlaces afiliados. Esto significa que,
        si reservas una actividad a través de algunos enlaces de nuestro sitio,
        podemos recibir una comisión sin costo adicional para ti.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Trabajamos con plataformas como GetYourGuide para recomendar
        experiencias que consideramos útiles y relevantes para los viajeros.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Nuestra prioridad es ofrecer información clara y honesta para ayudarte
        a planificar tu viaje a Cartagena.
      </p>
    </main>
  );
}