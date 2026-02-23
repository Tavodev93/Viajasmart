"use client";

import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { cartagenaServices } from "../lib/priceData";
import { cartagenaRestaurants } from "../lib/restaurantsData";

const validCities = ["cartagena"];

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export default function CityPageWrapper(props: PageProps) {
  return <CityPage {...props} />;
}

async function CityPage({ params }: PageProps) {
  const { city } = await params;

  if (!city) notFound();

  const cityFormatted = city.toLowerCase();

  if (!validCities.includes(cityFormatted)) {
    notFound();
  }

  return <CityPageContent />;
}

function CityPageContent() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [senseiResponse, setSenseiResponse] =
    useState<React.ReactNode | null>(null);

  const handleCheck = () => {
    const service = cartagenaServices.find(
      (s) => s.name === selectedService
    );

    if (!service || !price) return;

    const numericPrice = parseInt(price);

    if (isNaN(numericPrice) || numericPrice <= 0) {
      setResult("⚠️ Ingresa un precio válido");
      return;
    }

    if (numericPrice < service.min * 0.3) {
      setResult("⚠️ Precio inválido o mal ingresado");
      return;
    }

    if (numericPrice < service.min) {
      setResult("🟢 Precio por debajo del rango normal (muy buena oferta)");
    } else if (
      numericPrice >= service.min &&
      numericPrice <= service.max
    ) {
      setResult("✅ Precio dentro del rango normal");
    } else {
      setResult("🚨 Precio elevado o posible sobrecosto");
    }
  };

  const handleSensei = () => {
    if (!message) return;

    const lowerMsg = message.toLowerCase();

    // RESTAURANTES DINÁMICOS
    if (
      lowerMsg.includes("restaurante") ||
      lowerMsg.includes("comer") ||
      lowerMsg.includes("cenar") ||
      lowerMsg.includes("bar") ||
      lowerMsg.includes("carne") ||
      lowerMsg.includes("italiano") ||
      lowerMsg.includes("romantico") ||
      lowerMsg.includes("mariscos") ||
      lowerMsg.includes("pasta") ||
      lowerMsg.includes("pizza") ||
      lowerMsg.includes("ravioli") ||
      lowerMsg.includes("spaghetti")
    ) {
      let categoryDetected: string | null = null;

      // Mapeo semántico
      if (
        lowerMsg.includes("carne") ||
        lowerMsg.includes("parrilla") ||
        lowerMsg.includes("steak")
      ) {
        categoryDetected = "carne";
      }

      if (
        lowerMsg.includes("italiano") ||
        lowerMsg.includes("pasta") ||
        lowerMsg.includes("pastas") ||
        lowerMsg.includes("pizza") ||
        lowerMsg.includes("ravioli") ||
        lowerMsg.includes("spaghetti") ||
        lowerMsg.includes("lasaña")
      ) {
        categoryDetected = "italiano";
      }

      if (
        lowerMsg.includes("romantico") ||
        lowerMsg.includes("pareja")
      ) {
        categoryDetected = "romantico";
      }

      if (
        lowerMsg.includes("marisco") ||
        lowerMsg.includes("mariscos") ||
        lowerMsg.includes("ceviche")
      ) {
        categoryDetected = "mariscos";
      }

      if (
        lowerMsg.includes("bar") ||
        lowerMsg.includes("coctel") ||
        lowerMsg.includes("tragos")
      ) {
        categoryDetected = "bar";
      }

      let filtered = cartagenaRestaurants;

      if (categoryDetected) {
        filtered = cartagenaRestaurants.filter((r) =>
          r.category.includes(categoryDetected)
        );
      }

      if (filtered.length === 0) {
        setSenseiResponse(
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-white/70 text-sm">
            🤖 No encontré opciones exactas para esa categoría, pero puedo sugerirte otras alternativas.
          </div>
        );
        return;
      }

      setSenseiResponse(
        <div className="space-y-4">
          <div className="text-cyan-400 font-semibold text-lg">
            🍽 Restaurantes recomendados
          </div>

          <div className="space-y-3">
            {filtered.slice(0, 3).map((restaurant) => (
              <div
                key={restaurant.name}
                className="bg-white/5 border border-white/10 p-4 rounded-xl"
              >
                <div className="font-semibold">{restaurant.name}</div>
                <div className="text-white/60 text-sm">
                  ⭐ {restaurant.rating} | {restaurant.zone}
                </div>
                <div className="text-white/50 text-sm">
                  💰 {restaurant.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      return;
    }

    // ITINERARIO
    if (
      lowerMsg.includes("día") ||
      lowerMsg.includes("dias") ||
      lowerMsg.includes("voy")
    ) {
      let days = 3;
      const dayMatch = lowerMsg.match(/\d+/);
      if (dayMatch) days = parseInt(dayMatch[0]);

      setSenseiResponse(
        <div className="space-y-4">
          <div className="text-cyan-400 font-semibold text-lg">
            ✨ Itinerario recomendado
          </div>

          <div className="space-y-3">
            {days >= 1 && (
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="font-semibold">
                  📅 Día 1 – City Tour Histórico
                </div>
                <div className="text-white/50 text-sm">
                  💰 80.000 – 150.000 COP
                </div>
              </div>
            )}

            {days >= 2 && (
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="font-semibold">
                  📅 Día 2 – Islas del Rosario
                </div>
                <div className="text-white/50 text-sm">
                  💰 250.000 – 350.000 COP
                </div>
              </div>
            )}

            {days >= 3 && (
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="font-semibold">
                  📅 Día 3 – Getsemaní + Cena
                </div>
                <div className="text-white/50 text-sm">
                  💰 70.000 – 140.000 COP
                </div>
              </div>
            )}

            {days >= 4 && (
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="font-semibold">
                  📅 Día 4 – Volcán del Totumo
                </div>
                <div className="text-white/50 text-sm">
                  💰 120.000 – 200.000 COP
                </div>
              </div>
            )}
          </div>
        </div>
      );

      return;
    }

    setSenseiResponse(
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-white/70 text-sm">
        🤖 Cuéntame cuántos días estarás o qué tipo de experiencia buscas.
      </div>
    );
  };

  return (
    <section className="relative px-6 py-20">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            🔎 Verificador de precios
          </h1>
          <p className="text-white/70">
            Comprueba si el precio que te ofrecen es justo.
          </p>
        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-2xl space-y-6">
          <select
            className="w-full bg-black border border-white/20 rounded-lg p-3"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Selecciona un servicio</option>
            {cartagenaServices.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name.replaceAll("_", " ")}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Ingresa el precio en COP"
            className="w-full bg-black border border-white/20 rounded-lg p-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            onClick={handleCheck}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition"
          >
            Verificar precio
          </button>

          {result && (
            <div className="mt-8 space-y-4 text-center border border-white/10 bg-white/5 p-6 rounded-xl">
              <div className="text-lg font-semibold">{result}</div>

              <button
                onClick={() =>
                  router.push("/cartagena/recomendaciones")
                }
                className="mt-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition px-6 py-2 rounded-lg"
              >
                Ver opciones recomendadas
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full shadow-lg font-semibold transition"
      >
        🤖 Travel Sensei
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black border border-white/10 w-full max-w-lg p-8 rounded-2xl space-y-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-cyan-400">
              Travel Sensei
            </h2>

            <input
              type="text"
              placeholder="Ej: quiero pastas o voy 3 días"
              className="w-full bg-black border border-white/20 rounded-lg p-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleSensei}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition"
            >
              Preguntar
            </button>

            {senseiResponse}
          </div>
        </div>
      )}
    </section>
  );
}