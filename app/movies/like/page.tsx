"use client";

import React, { useEffect, useState } from "react";
import Containers from "@/app/components/ui/Containers";
import { getMovies } from "@/service/useGetMovie";
import type { Movie } from "@/types/MoviesDataTypes";
import { getLikes } from "@/service/useLike";
import MovieCard from "@/app/components/ui/MoviesCard";

const page = () => {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedMovies = async () => {
      setLoading(true);
      try {
        const movies = await getMovies();
        const likedIds = getLikes(); // localStoragedan liked movie id lar
        const filtered = movies.filter((m) => likedIds.includes(m.id));
        setLikedMovies(filtered);
      } catch (error) {
        console.error("Liked movies fetch error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedMovies();
  }, []);

  if (loading) return <div className="text-white p-5">Loading...</div>;

  return (
    <Containers className="mt-5">
      {likedMovies.length > 0 && (
        <h1 className="text-white text-lg mb-5">
          Sevimli filmlaringiz: {likedMovies.length} ta
        </h1>
      )}
      {likedMovies.length > 0 ? (
        <div className="grid grid-cols-2 min-[435px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {likedMovies.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">Hozircha sevimli filmlaringiz yo‘q</p>
      )}
    </Containers>
  );
};

export default page;
