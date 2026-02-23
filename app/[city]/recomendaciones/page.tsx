import { notFound } from "next/navigation";

const validCities = ["cartagena"];

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export default async function RecomendacionesPage({ params }: PageProps) {
  const { city } = await params;

  if (!city) notFound();

  const cityFormatted = city.toLowerCase();

  if (!validCities.includes(cityFormatted)) {
    notFound();
  }

  const cityName =
    cityFormatted.charAt(0).toUpperCase() +
    cityFormatted.slice(1);

  return (
    <section className="relative px-6 py-20">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Recomendaciones en{" "}
            <span className="text-cyan-400">{cityName}</span>
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Opciones seleccionadas por ViajaSmart para que viajes con confianza.
          </p>
        </div>

        {/* Tours */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400">
            🏝 Tours recomendados
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">Tour Islas del Rosario</h3>
              <p className="text-white/60 text-sm">
                Experiencia completa con snorkel y almuerzo incluido.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Ver disponibilidad
              </button>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">Playa Blanca / Barú</h3>
              <p className="text-white/60 text-sm">
                Día completo en playa con transporte incluido.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Ver disponibilidad
              </button>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">City Tour Histórico</h3>
              <p className="text-white/60 text-sm">
                Recorrido cultural por la ciudad amurallada.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Ver disponibilidad
              </button>
            </div>

          </div>
        </div>

        {/* Hospedaje */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400">
            🏨 Hospedaje recomendado
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">Zona Centro Histórico</h3>
              <p className="text-white/60 text-sm">
                Ideal si buscas experiencia colonial y cercanía a todo.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Buscar hoteles
              </button>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">Bocagrande</h3>
              <p className="text-white/60 text-sm">
                Zona moderna con vista al mar y edificios altos.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Buscar hoteles
              </button>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold">Getsemaní</h3>
              <p className="text-white/60 text-sm">
                Ambiente cultural y vibrante.
              </p>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition py-2 rounded-lg">
                Buscar hoteles
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}