import { getGener } from "@/service/useGetGanre";
import { getMovies } from "@/service/useGetMovie";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { GenerType } from "@/types/GenerTypes";
import { MovieGenre } from "@/types/MovieGanre";
import { Movie } from "@/types/MoviesDataTypes";
import Containers from "../components/ui/Containers";
import MovieCard from "../components/ui/MoviesCard";

const page = async () => {
  const ganer: GenerType[] = await getGener();
  const movie: Movie[] = await getMovies();
  const movie_ganer: MovieGenre[] = await getMovieGenre();
  const ganer_cartoons_id = ganer?.[7].id;
  const movie_ganer_filtered_id =
    movie_ganer
      ?.filter((el) => el.genre_id !== ganer_cartoons_id)
      ?.map((el) => String(el.movie_id)) ?? [];
  const movie_filtered =
    movie.filter((el) => movie_ganer_filtered_id.includes(String(el.id))) ?? [];

  return (
    <>
      <Containers className="mb-5">
        <div className="text-[white]">
          <h1 className="text-[18px] sm:text-[24px] font-medium">
            Tarjima kinolar
          </h1>
          <p className="text-[14px]">Tarjima kinolar bepul tomosha qiling!</p>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {movie_filtered.map((m) => (
            <MovieCard key={m.id} item={m} />
          ))}
        </div>
      </Containers>
    </>
  );
};

export default page;
