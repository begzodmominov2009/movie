import type { Movie } from "@/types/MoviesDataTypes";
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
      <div className="relative">
        {movie.video_url ? (
          <video
            src={movie.video_url}
            controls
            className="w-full h-[240px] md:h-[380px] bg-black"
          />
        ) : movie.banner_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={movie.banner_url}
            alt={title}
            className="w-full h-[240px] md:h-[380px] object-cover"
          />
        ) : (
          <div className="w-full h-[240px] md:h-[380px] bg-black/40" />
        )}
      </div>

      {/* ✅ client only actions */}
      <ActionsClient trailerUrl={movie.trailer_url} />
    </div>
  );
}
