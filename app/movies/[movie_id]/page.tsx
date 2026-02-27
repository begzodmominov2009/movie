import type { Movie } from "@/types/MoviesDataTypes";
import { getSingleMovie } from "@/service/useGetSingleMovie";

import RecommendedSidebar from "../components/movie-single/RecommendedSidebar";
import MovieHeroCard from "../components/movie-single/MovieHeroCard";
import MoviePlayerCard from "../components/movie-single/MoviePlayerCard";
import MovieInfoAccordion from "../components/movie-single/MovieInfoAccordion";
import SingleMovieSkeleton from "../components/movie-single/SingleMovieSkeleton";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { getGener } from "@/service/useGetGanre";
import { GenerType } from "@/types/GenerTypes";
import { MovieGenre } from "@/types/MovieGanre";
import { movieActor } from "@/types/movie_actor";
import { getMovieActor } from "@/service/useGetMovie_Actors";
import { MovieAktor } from "@/types/MoviesActor";
import { getAktor } from "@/service/useGetMovieActors";
import { getMovies } from "@/service/useGetMovie";
import CountrCart from "@/app/components/ui/CountrCart";

type PageProps = {
  params: Promise<{ movie_id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { movie_id: movieId } = await params;
  const movie_genre: MovieGenre[] = await getMovieGenre();
  const movies: Movie[] = await getMovies();
  const movie_actor: movieActor[] = await getMovieActor();
  const movie_all_actor: MovieAktor[] = await getAktor();
  const ganre: GenerType[] = await getGener();

  const movieIdGenre = movie_genre?.map((el) => {
    if (el.movie_id === movieId) {
      return el.genre_id;
    }
  });
  const ganreMovie = ganre?.filter((item) => movieIdGenre?.includes(item.id));

  const movieIdActor = movie_actor?.map((el) => {
    if (el.movie_id === movieId) {
      return el.actor_id;
    }
  });
  const movieActor = movie_all_actor?.filter((el) =>
    movieIdActor?.includes(el.id),
  );

  let movie: Movie | null = null;

  try {
    movie = await getSingleMovie(movieId);
  } catch (e) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] text-white p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-red-400">
          Movie fetch error
        </div>
      </div>
    );
  }

  if (!movie) return <SingleMovieSkeleton />;

  const title = movie.title_uz || movie.title_en || movie.title_ru || "—";
  const description =
    movie.description_uz || movie.description_en || movie.description_ru || "—";

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="px-2 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <MovieHeroCard
              movie={movie}
              ganreMovie={ganreMovie}
              movieActor={movieActor}
              title={title}
            />
            <MoviePlayerCard movie={movie} title={title} />
            <MovieInfoAccordion
              movie={movie}
              title={title}
              description={description}
            />

            <CountrCart/>
          </div>

          <aside className="col-span-12 lg:col-span-3">
            <RecommendedSidebar
              ganreMovie={ganreMovie}
              movie_genre={movie_genre}
              movies={movies}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
