"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovies } from "@/service/useGetMovie";
import Link from "next/link";
import { Movie } from "@/types/MoviesDataTypes";
import Containers from "@/app/components/ui/Containers";
import MovieCard from "@/app/components/ui/MoviesCard";

export default function YearPage() {
  const params = useParams();
  const year = params.year;

  const [movies, setMovies] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const filteredMoviesYear = movies.filter(
    (el) => String(el.created_by) === year,
  );
  console.log(filteredMoviesYear);

  useEffect(() => {
    const fetchMovies = async () => {
      const data: Movie[] = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <Containers className="p-6 relative">
      <h1 className="text-xl font-bold text-white mb-4">{year}-yil kinolari</h1>
      <div className="grid gap-5 justify-start [grid-template-columns:repeat(auto-fill,minmax(200px,200px))]">
        {" "}
        {filteredMoviesYear.length > 0 ? (
          filteredMoviesYear.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))
        ) : (
          <p className="text-white/60 text-[25px] whitespace-nowrap absolute top-30 left-115">
            Bu yilga tegishli kino topilmadi
          </p>
        )}
      </div>
    </Containers>
  );
}
