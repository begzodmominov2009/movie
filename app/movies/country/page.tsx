import MovieHeader from "@/app/components/shared/movies/MovieHeader";
import CountrCart from "@/app/components/ui/CountrCart";
import MovieCard from "@/app/components/ui/MoviesCard";
import { getMovies } from "@/service/useGetMovie";
import { Movie } from "@/types/MoviesDataTypes";

const page = async () => {
    const movies: Movie[] = (await getMovies()).map(movie => ({
        ...movie,
        created_by: movie.created_by ?? 0, // default qiymat
    }));

    return (
        <>
            <MovieHeader />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} item={movie} />
                ))}
            </div>
            <CountrCart />
        </>
    );
};

export default page;