// app/movies/search/[query]/page.tsx
import BackButton from "@/app/components/ui/BackButton";
import Containers from "@/app/components/ui/Containers";
import MovieCard from "@/app/components/ui/MoviesCard";
import { getGener } from "@/service/useGetGanre";
import { getMovies } from "@/service/useGetMovie";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { GenerType } from "@/types/GenerTypes";
import { MovieGenre } from "@/types/MovieGanre";
import { Movie } from "@/types/MoviesDataTypes";

interface Props {
  params: {
    query?: string; // query optional
  };
}

export default async function SearchPage({ params }: Props) {
  const { query } = await params;
  console.log("queary", query);

  const q = query?.toLowerCase();

  // Movies fetch
  let movies: Movie[] = [];
  let ganre: GenerType[] = [];
  let ganre_movie: MovieGenre[] = [];
  try {
    movies = await getMovies();
    ganre = await getGener();
    ganre_movie = await getMovieGenre();
  } catch (error) {
    console.error("Movie fetch error", error);
  }

  // Multfilmlar genriga tegishli film id larini olish
  const ganer_cartoons = ganre?.find((el) => el.name_uz === "Multfilmlar")?.id;

  const movie_ids_cartoons = ganre_movie
    ?.filter((el) => el.genre_id === ganer_cartoons)
    ?.map((el) => el.movie_id); // number array

  // Filter qilish
  const filteredMovies = movies.filter((e) =>
    e.title_uz?.toLowerCase().includes(q || ""),
  );
  // Faqat multfilmlar genriga tegishli bo‘lganlarni ajratish
  const filteredMoviesCartoons = filteredMovies.filter((e) =>
    movie_ids_cartoons?.includes(e?.id),
  );
  const filteredMoviesNonCartoons = filteredMovies.filter(
    (e) => !movie_ids_cartoons?.includes(e?.id),
  );

  return (
    <Containers className="">
      {filteredMovies.length > 0 ? (
        <>
          <div>
            <div className="flex items-center gap-2 mb-5 mt-5">
              <BackButton />
              <h1 className="text-white text-lg">
                Qidiruv natijalari kinolar: "{query}"
              </h1>
            </div>
            <div className="grid grid-cols-2 min-[435px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {" "}
              {filteredMoviesNonCartoons.map((movie) => (
                <MovieCard key={movie.id} item={movie} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-5 mt-5">
              <BackButton />
              <h1 className="text-white text-lg">
                Qidiruv natijalari multfilimlar: "{query}"
              </h1>
            </div>
            <div className="grid grid-cols-2 min-[435px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredMoviesCartoons.map((movie) => (
                <MovieCard key={movie.id} item={movie} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-400">Natija topilmadi</p>
      )}
    </Containers>
  );
}
