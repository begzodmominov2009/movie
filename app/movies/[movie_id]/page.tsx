import type { Movie } from "@/types/MoviesDataTypes";
import { getSingleMovie } from "@/service/useGetSingleMovie";
import { getMovieGenre } from "@/service/useGetMovieGenre";
import { getGener } from "@/service/useGetGanre";
import { getMovieActor } from "@/service/useGetMovie_Actors";
import { getAktor } from "@/service/useGetMovieActors";
import { getMovies } from "@/service/useGetMovie";

import type { GenerType } from "@/types/GenerTypes";
import type { MovieGenre } from "@/types/MovieGanre";
import type { movieActor } from "@/types/movie_actor";
import type { MovieAktor } from "@/types/MoviesActor";

import MovieInfoAccordion from "../components/movie-single/MovieInfoAccordion";
import MovieHeroCard from "../components/movie-single/MovieHeroCard";
import MoviePlayerCard from "../components/movie-single/MoviePlayerCard";
import RecommendedSidebar from "../components/movie-single/RecommendedSidebar";

type PageProps = {
  params: Promise<{ movie_id: string }>; // ✅ Next 16.1 Turbopack
};

export default async function Page({ params }: PageProps) {
  const { movie_id: movieId } = await params;

  const [movie_genre, movies, movie_actor, movie_all_actor, ganre, movie] =
    await Promise.all([
      getMovieGenre() as Promise<MovieGenre[]>,
      getMovies() as Promise<Movie[]>,
      getMovieActor() as Promise<movieActor[]>,
      getAktor() as Promise<MovieAktor[]>,
      getGener() as Promise<GenerType[]>,
      getSingleMovie(movieId) as Promise<Movie>,
    ]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] text-white p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-red-400">
          Movie not found
        </div>
      </div>
    );
  }

  const movieGenreIds = movie_genre
    .filter((el) => String(el.movie_id) === String(movieId))
    .map((el) => el.genre_id);

  const ganreMovie = ganre.filter((g) => movieGenreIds.includes(g.id));

  const movieActorIds = movie_actor
    .filter((el) => String(el.movie_id) === String(movieId))
    .map((el) => el.actor_id);

  const movieActorList = movie_all_actor.filter((a) =>
    movieActorIds.includes(a.id),
  );

  const title = movie.title_uz || movie.title_en || movie.title_ru || "—";
  const description =
    movie.description_uz || movie.description_en || movie.description_ru || "—";

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <MovieHeroCard
              movie={movie}
              ganreMovie={ganreMovie}
              movieActor={movieActorList}
              title={title}
            />
            <MoviePlayerCard movie={movie} title={title} />
            <MovieInfoAccordion
              movie={movie}
              title={title}
              description={description}
            />
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
