"use client";

import { useState } from "react";
import type { Movie } from "@/types/MoviesDataTypes";
import type { GenerType } from "@/types/GenerTypes";
import type { MovieGenre } from "@/types/MovieGanre";
import Link from "next/link";

type Props = {
  movies: Movie[];
  ganreMovie: GenerType[];
  movie_genre: MovieGenre[];
};

// ✅ Shuffle funksiyasi
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function RecommendedSidebar({
  movies,
  ganreMovie,
  movie_genre,
}: Props) {
  const [pending, setPending] = useState(false);

  const ganreMovieId = ganreMovie?.[0]?.id;

  const filteredMovieIds =
    movie_genre
      ?.filter((x) => x.genre_id === ganreMovieId)
      ?.map((x) => String(x.movie_id)) ?? [];

  // ✅ random qilish shu yerda
  const movieFiltered = shuffleArray(
    movies?.filter((m) => filteredMovieIds.includes(String(m.id))) ?? [],
  );

  return (
    <div className="relative rounded-3xl max-h-[385px] overflow-hidden border border-white/10 bg-white/5">
      {pending && (
        <div className="absolute inset-0 z-10 bg-black/45 backdrop-blur-sm flex items-center justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90">
            Yuklanmoqda...
          </div>
        </div>
      )}

      <div className="p-4 font-semibold flex items-center gap-2">
        <img
          src="https://api.iconify.design/lucide/sparkles.svg?color=white"
          alt="Star"
        />
        Tavsiyalar
      </div>

      <div className="px-3 pb-3 space-y-3 max-h-[330px] overflow-y-auto custom-scroll">
        {movieFiltered.map((r) => (
          <Link
            key={String(r.id)}
            href={`/movies/${r.id}`}
            prefetch
            onClick={() => setPending(true)}
            className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 hover:bg-black/35 transition p-3"
          >
            <div className="h-16 w-12 rounded-xl overflow-hidden bg-white/10 shrink-0">
              <img
                src={r.poster_url || ""}
                alt={r.title_uz || r.title_en || "Movie"}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">
                {r.title_uz || r.title_en || r.title_ru || "—"}
              </div>

              <div className="text-xs text-white/60 mt-1">
                {r.created_by ?? "—"} • {r.duration_minutes ?? "—"} daq
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {ganreMovie?.slice(0, 2).map((el) => (
                  <span
                    key={el.id}
                    className="inline-flex rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-[11px] text-white/75"
                  >
                    {el.name_uz || el.name_ru || el.name_en || "—"}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}

        {!movieFiltered.length && (
          <div className="text-sm text-white/60 px-1">Tavsiya topilmadi</div>
        )}
      </div>
    </div>
  );
}
