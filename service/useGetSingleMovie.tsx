import type { Movie } from "@/types/MoviesDataTypes";

export async function getSingleMovie(movie_id: string): Promise<Movie> {
  const res = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie/${movie_id}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}
