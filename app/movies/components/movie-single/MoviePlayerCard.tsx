import type { Movie } from "@/types/MoviesDataTypes";
import YoutubePlayerClient from "./YoutubePlayerClient";
import ActionsClient from "./ActionsClient";

export default function MoviePlayerCard({
  movie,
  title,
}: {
  movie: Movie;
  title: string;
}) {
  return (
    <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
      <div className="p-3 md:p-4">
        {movie.video_url ? (
          <YoutubePlayerClient url={movie.video_url} title={title} />
        ) : movie.banner_url ? (
          <img
            src={movie.banner_url}
            alt={title}
            className="w-full h-[240px] md:h-[380px] object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-[240px] md:h-[380px] bg-black/40 rounded-2xl" />
        )}
      </div>

      <ActionsClient trailerUrl={movie.trailer_url} />
    </div>
  );
}
