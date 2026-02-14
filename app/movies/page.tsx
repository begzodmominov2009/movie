import { getMovies } from "@/service/useGetMovie";
import MovieHeader from "../components/shared/movies/MovieHeader";
import { Movie } from "@/types/MoviesDataTypes";
import MoviesCard from "../components/ui/MoviesCard";

const page = async () => {
  const movies: Movie[] = await getMovies();
  console.log(movies);

  return (
    <>
      <MovieHeader />
      <MoviesCard movies={movies} />
    </>
  );
};

export default page;
