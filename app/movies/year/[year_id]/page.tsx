// app/movies/year/[year_id]/page.tsx

import BackError from "@/app/components/ui/BackError";
import Containers from "@/app/components/ui/Containers";
import MovieCard from "@/app/components/ui/MoviesCard";
import { getMovies } from "@/service/useGetMovie";
import type { Movie } from "@/types/MoviesDataTypes";

type Props = {
  params: Promise<{
    year_id: string;
  }>;
};

export default async function YearPage({ params }: Props) {
  const { year_id } = await params;

  const movies: Movie[] = await getMovies();

  const filteredMoviesYear = movies.filter(
    (movie) => String(movie.created_by) === year_id,
  );


  // ❌ Movie topilmadi
  if (filteredMoviesYear.length === 0) {
    return (
      <Containers className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          {year_id}-yil uchun kinolar topilmadi
        </h1>

        <BackError />
      </Containers>
    );
  }

  // ✅ Movie bor
  return (
    <Containers className="p-6 relative">
      <h1 className="text-xl font-bold text-white mb-6">
        {year_id}-yil kinolari
      </h1>

      <div className="grid gap-5  [grid-template-columns:repeat(auto-fill,minmax(200px,200px))]">
        {filteredMoviesYear.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>
    </Containers>
  );
}
