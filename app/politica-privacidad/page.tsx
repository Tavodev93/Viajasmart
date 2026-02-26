export const metadata = {
  title: "Política de Privacidad | ViajaSmart",
  description:
    "Política de privacidad y tratamiento de datos de ViajaSmart.",
};

export default function PoliticaPrivacidad() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p className="text-gray-400 leading-relaxed mb-4">
        En ViajaSmart respetamos tu privacidad. No recopilamos datos personales
        directamente a través de formularios.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Utilizamos herramientas de análisis como Google Analytics para medir
        el tráfico y mejorar la experiencia del usuario.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Al hacer clic en enlaces afiliados, puedes ser redirigido a plataformas
        externas que tienen sus propias políticas de privacidad.
      </p>
    </main>
  );
}