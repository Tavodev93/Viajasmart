export type ServicePrice = {
  name: string;
  min: number;
  max: number;
  currency: "COP";
};

export const cartagenaServices: ServicePrice[] = [
  {
    name: "tour_islas_rosario",
    min: 250000,
    max: 350000,
    currency: "COP",
  },
  {
    name: "playa_blanca_baru",
    min: 180000,
    max: 300000,
    currency: "COP",
  },
  {
    name: "volcan_totumo",
    min: 120000,
    max: 200000,
    currency: "COP",
  },
  {
    name: "city_tour_historico",
    min: 80000,
    max: 150000,
    currency: "COP",
  },
  {
    name: "taxi_aeropuerto_centro",
    min: 15000,
    max: 25000,
    currency: "COP",
  },
  {
    name: "taxi_aeropuerto_bocagrande",
    min: 20000,
    max: 35000,
    currency: "COP",
  },
];