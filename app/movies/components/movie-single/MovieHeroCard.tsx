import type { Movie } from "@/types/MoviesDataTypes";
import {
  FaPlay,
  FaStar,
  FaRegCalendarAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import MetaItem from "./MetaItem";
import { DEMO_GENRES, minutesToText, safe } from "./MovieSingleUtils";

export default function MovieHeroCard({
  movie,
  title,
}: {
  movie: Movie;
  title: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="absolute inset-0">
        {movie.banner_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={movie.banner_url}
            alt={title}
            className="h-full w-full object-cover opacity-40 blur-[2px] scale-105"
          />
        ) : (
          <div className="h-full w-full bg-white/5" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      <div className="relative p-5 md:p-6">
        <div className="flex gap-5">
          <div className="w-[140px] md:w-[170px] shrink-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="aspect-[2/3]">
                {movie.poster_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={movie.poster_url}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-white/5" />
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-white/60 text-xs md:text-sm mb-1">
                  Uzbek tilida • HD • Online tomosha
                </div>
                <h1 className="text-xl md:text-3xl font-extrabold truncate">
                  {title}
                </h1>
              </div>

              <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-black/40 border border-white/10 px-3 py-2">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-semibold">
                  {movie.imdb_rating ?? "—"}
                </span>
                <span className="text-white/60 text-xs">IMDb</span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href={movie.video_url || "#"}
                className={[
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold",
                  "bg-white text-black hover:bg-white/90 transition",
                  !movie.video_url ? "opacity-50 pointer-events-none" : "",
                ].join(" ")}
              >
                <FaPlay />
                Tomosha qilish
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/75">
              <MetaItem
                icon={<FaRegCalendarAlt />}
                label="Yil:"
                value={safe(movie.release_year)}
              />
              <MetaItem
                icon={<FaClock />}
                label="Davomiyligi:"
                value={minutesToText(movie.duration_minutes)}
              />
              <MetaItem
                icon={<FaGlobe />}
                label="Mamlakat:"
                value={safe(movie.country)}
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="text-white/60 text-sm mr-1">Janrlar:</div>
              {DEMO_GENRES.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center rounded-full bg-black/30 border border-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* demo cast */}
        <div className="mt-5 flex items-center gap-3 overflow-x-auto pb-1">
          {[
            { name: "Sydney Sweeney", role: "Millie Calloway" },
            { name: "Amanda Seyfried", role: "Nina Winchester" },
            { name: "Brandon Sklenar", role: "Andrew Winchester" },
            { name: "Michele Morrone", role: "Enzo" },
            { name: "India", role: "Cece" },
          ].map((p) => (
            <div
              key={p.name}
              className="shrink-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-2"
            >
              <div className="h-9 w-9 rounded-xl bg-white/10" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-white/60">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
