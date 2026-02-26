import { getMovies } from "@/service/useGetMovie";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const YearMovie = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [uniqueYears, setUniqueYears] = useState<string[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);

      const years = data.map((movie: any) => movie.created_by); // movie.year bo'lishi mumkin
      const unique = Array.from(new Set(years)).sort(
        (a, b) => Number(a) - Number(b),
      );
      setUniqueYears(unique);
    };
    fetchMovies();
  }, []);

  return (
    <Fragment>
      <div>
        <h4 className="text-[15px] font-semibold text-white/85">
          Yil bo&apos;yicha kinolar
        </h4>

        {/* Flex wrap button style */}
        <div className="mt-7 grid grid-cols-7 gap-x-20 gap-y-3">
          {uniqueYears.map((y) => (
            <Link
              key={`k-${y}`}
              href={`/movies/year/${y}`}
              className="transition"
            >
              <button className="px-2 py-1.5 rounded-full bg-[#1a1a1a] text-white/80 text-sm flex items-center whitespace-nowrap font-medium cursor-pointer hover:bg-[#2b2b2b] hover:text-white">
                {y}-yil
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default YearMovie;
