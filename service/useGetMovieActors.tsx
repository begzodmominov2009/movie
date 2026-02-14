import { MovieAktor } from "@/types/MoviesActor";

export async function getAktor(): Promise<MovieAktor[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor",
    { cache: "no-store" },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
