export const dynamic = "force-dynamic";
import { getGener } from "@/service/useGetGanre";
import { getMovies } from "@/service/useGetMovie";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { GenerType } from "@/types/GenerTypes";
import { MovieGenre } from "@/types/MovieGanre";
import { Movie } from "@/types/MoviesDataTypes";
import Containers from "../components/ui/Containers";
import MovieCard from "../components/ui/MoviesCard";

const page = async () => {
  let movies: Movie[] = [];
  let ganer: GenerType[] = [];
  let movie_genre: MovieGenre[] = [];

  try {
    [movies, ganer, movie_genre] = await Promise.all([
      getMovies(),
      getGener(),
      getMovieGenre(),
    ]);
  } catch (e) {}

  const cartoons_id = ganer?.find((g) => g.name_uz === "Multfilmlar")?.id;
  const cartoons_name = ganer?.find(
    (e) => e.name_uz !== "Multfilmlar",
  )?.name_uz;
  const filteredMovieGanre = movie_genre
    .filter((el) => el.genre_id === cartoons_id)
    .map((el) => String(el.movie_id));

  const filteredMovie = movies.filter((e) =>
    !filteredMovieGanre?.includes(e?.id),
  );
  console.log(filteredMovie);

  return (
    <Containers className="mb-6 px-0 sm:px-0">
      <div>
        <h1 className="text-[24px] text-[white] font-medium">Kinolar</h1>
        <p className="text-white text-[14px]">
          Kinolar bepul tomosha qiling!
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 min-[435px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMovie.map((m) => (
          <MovieCard key={m.id} item={m} ganer_name_cartoons={cartoons_name} />
        ))}
      </div>
    </Containers>
  );
};

export default page;
