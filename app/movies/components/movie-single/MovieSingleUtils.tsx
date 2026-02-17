export function safe(v?: string | number | null, fallback = "—") {
  if (v === undefined || v === null || v === "") return fallback;
  return String(v);
}

export function minutesToText(min?: number) {
  if (!min) return "—";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} soat ${m} min` : `${m} min`;
}

export const DEMO_GENRES = ["Triller", "Tarjima kinolar", "Mistik"];

export const DEMO_RECOMMENDED = [
  {
    id: "1",
    title: "Og'ir shart sharoitda",
    year: 2007,
    minutes: 148,
    tag: "Drama",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500&q=80",
  },
  {
    id: "2",
    title: "Sahro Malikasi",
    year: 2016,
    minutes: 128,
    tag: "Drama",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
  },
];
