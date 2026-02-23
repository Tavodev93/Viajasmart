export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6">

      {/* Background Glow */}
      <div className="absolute top-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -z-10"></div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Travel smarter.
          <br />
          <span className="text-cyan-400">Pay fair.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Verifica precios en segundos, evita sobrecostos y planifica tu viaje
          con inteligencia.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-xl transition w-full md:w-auto">
            🔎 Verificar precio
          </button>

          <button className="border border-white/20 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 rounded-xl transition w-full md:w-auto">
            🤖 Hablar con Travel Sensei
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
        <div className="border border-white/10 p-6 rounded-2xl backdrop-blur-md bg-white/5 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">
            Verificador Inteligente
          </h3>
          <p className="text-white/60 text-sm">
            Compara precios reales y detecta posibles sobrecostos antes de pagar.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded-2xl backdrop-blur-md bg-white/5 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">
            Planificación Personalizada
          </h3>
          <p className="text-white/60 text-sm">
            Organiza tu viaje según tus días, intereses y presupuesto.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded-2xl backdrop-blur-md bg-white/5 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">
            Travel Sensei AI
          </h3>
          <p className="text-white/60 text-sm">
            Recomendaciones inteligentes de actividades, hoteles y restaurantes.
          </p>
        </div>
      </div>

      {/* Destination Selector */}
      <div className="mt-28 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          ¿A qué destino viajas?
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/cartagena"
            className="border border-white/10 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Cartagena
          </a>

          <span className="border border-white/10 px-6 py-3 rounded-xl text-white/40">
            Próximamente más destinos
          </span>
        </div>
      </div>
    </section>
  );
}