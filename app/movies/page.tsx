import { getMovies } from "@/service/useGetMovie";
import MovieHeader from "../components/shared/movies/MovieHeader";
import MoviesCard from "../components/ui/MoviesCard";
import CountrCart from "../components/ui/CountrCart";

const page = async () => {

  return (
    <>
      <MovieHeader />
      <CountrCart />
    </>
  );
};

export default page;
