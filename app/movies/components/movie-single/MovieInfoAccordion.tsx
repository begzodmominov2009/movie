import type { Movie } from "@/types/MoviesDataTypes";
import Row from "./Row";
import { minutesToText, safe } from "./MovieSingleUtils";

export default function MovieInfoAccordion({
  movie,
  title,
  description,
}: {
  movie: Movie;
  title: string;
  description: string;
}) {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5">
      <details open className="group">
        <summary className="cursor-pointer list-none p-4 md:p-5 flex items-center justify-between">
          <div className="font-semibold">{title} filmi haqida ma'lumot</div>
          <div className="text-white/60 group-open:rotate-180 transition">
            ▾
          </div>
        </summary>

        <div className="px-4 md:px-5 pb-5 pt-0">
          <div className="text-sm text-white/75 space-y-2">
            <Row
              label="Nomi:"
              value={safe(movie.title_uz || movie.title_en || movie.title_ru)}
            />
            <Row
              label="Ishlab chiqarilgan yil:"
              value={safe(movie.release_year)}
            />
            <Row
              label="Davomiyligi:"
              value={minutesToText(movie.duration_minutes)}
            />
            <Row label="Tili:" value={safe(movie.language)} />
            <Row label="Video sifati:" value="HD" />
            <Row label="IMDb reyting:" value={safe(movie.imdb_rating)} />
          </div>

          <div className="mt-4 text-sm leading-7 text-white/70">
            {description}
          </div>
        </div>
      </details>
    </div>
  );
}
