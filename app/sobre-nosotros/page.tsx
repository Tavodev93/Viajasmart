export const metadata = {
  title: "Sobre Nosotros | ViajaSmart",
  description:
    "Conoce la misión y propósito de ViajaSmart.",
};

export default function SobreNosotros() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Sobre ViajaSmart</h1>

      <p className="text-gray-400 leading-relaxed mb-4">
        ViajaSmart nace con el objetivo de ofrecer información clara,
        actualizada y transparente sobre turismo en Cartagena.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Nuestro enfoque es ayudar a los viajeros a tomar decisiones
        informadas, evitar sobrecostos y elegir experiencias de calidad.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Actualmente nos especializamos en Cartagena y trabajamos
        con plataformas confiables para recomendar tours y actividades.
      </p>
    </main>
  );
}