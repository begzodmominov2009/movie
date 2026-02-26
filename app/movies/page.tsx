import { getMovies } from "@/service/useGetMovie";
import MovieHeader from "../components/shared/movies/MovieHeader";
import { Movie } from "@/types/MoviesDataTypes";
import MoviesCard from "../components/ui/MoviesCard";
import CountrCart from "../components/ui/CountrCart";

const page = async () => {
  const movies: Movie[] = await getMovies();

  return (
    <>
      
      <MovieHeader />
      <MoviesCard movies={movies} />
      <CountrCart />
   </>
  );
};

export default page;
