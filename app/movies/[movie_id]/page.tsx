import type { Movie } from "@/types/MoviesDataTypes";
import { getSingleMovie } from "@/service/useGetSingleMovie";

import RecommendedSidebar from "../components/movie-single/RecommendedSidebar";
import MovieHeroCard from "../components/movie-single/MovieHeroCard";
import MoviePlayerCard from "../components/movie-single/MoviePlayerCard";
import MovieInfoAccordion from "../components/movie-single/MovieInfoAccordion";
import SingleMovieSkeleton from "../components/movie-single/SingleMovieSkeleton";

type PageProps = {
  // ✅ Next.js 16.1 + Turbopack: params ba'zan Promise bo'lib keladi
  params: Promise<{ movie_id: string }>;
};

export default async function Page({ params }: PageProps) {
  // ✅ params ni ochib olamiz
  const { movie_id: movieId } = await params;

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
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <MovieHeroCard movie={movie} title={title} />
            <MoviePlayerCard movie={movie} title={title} />
            <MovieInfoAccordion
              movie={movie}
              title={title}
              description={description}
            />
          </div>

          <aside className="col-span-12 lg:col-span-3">
            <RecommendedSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
