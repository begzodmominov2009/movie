import { getGener } from "@/service/useGetGanre";
import { getMovies } from "@/service/useGetMovie";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { GenerType } from "@/types/GenerTypes";
import { MovieGenre } from "@/types/MovieGanre";
import { Movie } from "@/types/MoviesDataTypes";
import React from "react";
import Containers from "../components/ui/Containers";
import MovieCard from "../components/ui/MoviesCard";

const page = async () => {
  const movies: Movie[] = await getMovies();
  const ganer: GenerType[] = await getGener();
  const movie_genre: MovieGenre[] = await getMovieGenre();

  const ganer_cartoons = ganer?.[7].id;
  const ganer_name_cartoons = ganer?.[7].name_uz;
  const movie_genre_filtered =
    movie_genre
      ?.filter((item) => item.genre_id === ganer_cartoons)
      ?.map((item) => String(item.movie_id)) ?? [];
  const movie_filtered =
    movies?.filter((el) => movie_genre_filtered.includes(String(el.id))) ?? [];
  console.log(movie_filtered);

  return (
    <Containers className="my-5">
      <div>
        <h1 className="text-[24px] text-[white] font-medium">Multfilmlar</h1>
        <p className="text-white">Multfilmlar bepul tomosha qiling!</p>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {movie_filtered.map((m) => (
          <MovieCard
            key={m.id}
            item={m}
            ganer_name_cartoons={ganer_name_cartoons}
          />
        ))}
      </div>
    </Containers>
  );
};

export default page;
