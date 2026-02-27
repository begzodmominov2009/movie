// service/useGetMovieActors.ts
import { MovieAktor } from "@/types/MoviesActor";

export async function getAktorById(
  id: string
): Promise<MovieAktor | null> {
  const res = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor/${id}`,
    {
      cache: "no-store", // har safar yangidan oladi
    }
  );

  if (!res.ok) {
    console.error("Aktor topilmadi:", id);
    return null;
  }

  return res.json();
}