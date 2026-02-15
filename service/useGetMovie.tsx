import type { Movie } from "@/types/MoviesDataTypes";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
