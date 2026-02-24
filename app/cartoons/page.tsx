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
  } catch (e) {
  }

  const cartoonsGenre =
    ganer?.find((g) => g.name_uz === "Multfilm" || g.slug === "cartoons") ??
    ganer?.[7];
  const ganer_cartoons = cartoonsGenre?.id;
  const ganer_name_cartoons = cartoonsGenre?.name_uz ?? "Multfilmlar";

  const movie_genre_filtered = ganer_cartoons
    ? (movie_genre
        ?.filter((item) => item.genre_id === ganer_cartoons)
        ?.map((item) => String(item.movie_id)) ?? [])
    : [];

  const movie_filtered =
    movies?.filter((el) => movie_genre_filtered.includes(String(el.id))) ?? [];

  return (
    <Containers className="mb-6 px-0 sm:px-0">
      <div>
        <h1 className="text-[24px] text-[white] font-medium">Multfilmlar</h1>
        <p className="text-white text-[14px]">Multfilmlar bepul tomosha qiling!</p>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
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
