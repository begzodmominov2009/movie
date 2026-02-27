import { getMovies } from "@/service/useGetMovie";
import Link from "next/link";
import React from "react";
import Containers from "./Containers";

const CountrCart = async () => {
  const movies = await getMovies();
  const countrs = movies?.map((el) => el.country);
  const allCountries = [...new Set(countrs)];
  console.log(allCountries);

  return (
    <>
      <Containers className="  grid grid-cols-1  my-[20px] sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-600/10 p-4 rounded-2xl w-full">
        {allCountries?.map((el) => (
          <Link
            key={el}
            href={`/movies/country/${el}`}
            className="
       
        bg-gray-600/10 
        border border-gray-700 
        hover:border-gray-500 
        hover:bg-gray-800/70
        transition-all duration-300
        rounded-xl px-4 py-3 text-white
        block
      "
          >
            {el}
          </Link>
        ))}
      </Containers>
    </>
  );
};

export default CountrCart;
