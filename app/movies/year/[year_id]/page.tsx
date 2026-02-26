// app/movies/year/[year]/page.tsx
import BackError from "@/app/components/ui/BackError";
import Containers from "@/app/components/ui/Containers";
import MovieCard from "@/app/components/ui/MoviesCard";
import { getMovies } from "@/service/useGetMovie";
import type { Movie } from "@/types/MoviesDataTypes";

type Props = {
  params: { year: string };
};

const YearPage = async ({ params }: Props) => {
  const year = params.year;
  console.log("Param year:", year);

  const movies: Movie[] = await getMovies();

  const filteredMoviesYear = movies.filter(
    (m) => String(m.created_by) === year,
  );

  return (
    <Containers className="p-6 relative">
      {filteredMoviesYear.length > 0 ? (
        <h1 className="text-xl font-bold text-white mb-4">
          {year}-yil kinolari
        </h1>
      ) : (
        ""
      )}
      <div className="grid gap-5 justify-start [grid-template-columns:repeat(auto-fill,minmax(200px,200px))]">
        {filteredMoviesYear.length > 0 ? (
          filteredMoviesYear.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))
        ) : (
          <BackError />
        )}
      </div>
    </Containers>
  );
};

export default YearPage;
