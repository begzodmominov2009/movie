"use client";

import { useEffect, useMemo, useState } from "react";
import Containers from "@/app/components/ui/Containers";
import MovieCard from "@/app/components/ui/MoviesCard";
import { getMovies } from "@/service/useGetMovie";
import type { Movie } from "@/types/MoviesDataTypes";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  // 🔹 Movies load
  useEffect(() => {
    const load = async () => {
      const data = await getMovies();
      setMovies(data || []);
    };
    load();
  }, []);

  // 🔹 Random movies (value bo'sh paytda)
  const randomMovies = useMemo(() => {
    return [...movies].sort(() => 0.5 - Math.random()).slice(0, 12);
  }, [movies]);

  // 🔹 Filtered movies (search paytda)
  const filteredMovies = useMemo(() => {
    if (!query.trim()) return randomMovies;

    return movies.filter((m) =>
      m.title_uz?.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, movies, randomMovies]);

  return (
    <Containers className="pb-20">
      {/* SEARCH INPUT */}
      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Kino qidirish..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full rounded-xl
            bg-white/5 border border-white/10
            px-4 py-3 pr-12
            text-white outline-none
            focus:ring-2 focus:ring-lime-400
          "
        />
        <Search
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
        />
      </div>

      {/* RESULT TEXT */}
      <div className="mt-5">
        {query ? (
          <h2 className="text-white text-sm">"{query}" bo‘yicha natijalar</h2>
        ) : (
          <h2 className="text-white text-sm">Tavsiya etilgan filmlar</h2>
        )}
      </div>

      {/* MOVIE GRID */}
      <div className="mt-4 grid grid-cols-2 min-[435px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((m) => <MovieCard key={m.id} item={m} />)
        ) : (
          <div className="text-white/60 text-sm mt-6">
            Hech narsa topilmadi 😔
          </div>
        )}
      </div>
    </Containers>
  );
}
