"use client";

import { getMovies } from "@/service/useGetMovie";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const YearMovie = () => {
  const [uniqueYears, setUniqueYears] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();

        const years = data.map((movie: any) => movie.created_by);

        const unique = Array.from(new Set(years)).sort(
          (a, b) => Number(a) - Number(b),
        );

        setUniqueYears(unique);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h4 className="text-[15px] font-semibold text-white/85">
        Yil bo&apos;yicha kinolar
      </h4>

      <div
        className="mt-7 grid gap-x-4 gap-y-3
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-4
        xl:grid-cols-4"
      >
        {loading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-[34px] rounded-full bg-[#1a1a1a] animate-pulse"
              />
            ))
          : uniqueYears.map((y) => (
              <Link key={`k-${y}`} href={`/movies/year/${y}`}>
                <button className="w-full cursor-pointer px-2 py-1.5 rounded-full bg-[#1a1a1a] text-white/80 text-sm font-medium hover:bg-[#2b2b2b] hover:text-white transition whitespace-nowrap">
                  {y}-yil
                </button>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default YearMovie;
