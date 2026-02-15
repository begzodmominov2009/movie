import { movieActor } from "@/types/movie_actor";

export async function getMovieActor(): Promise<movieActor[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor",
    { cache: "no-store" },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
