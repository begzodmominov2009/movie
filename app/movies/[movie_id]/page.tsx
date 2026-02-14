"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { Movie } from "@/types/MoviesDataTypes";
import { getSingleMovie } from "@/service/useGetSingleMovie";

import {
  FaPlay,
  FaStar,
  FaRegCalendarAlt,
  FaClock,
  FaGlobe,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

function safe(v?: string | number | null, fallback = "—") {
  if (v === undefined || v === null || v === "") return fallback;
  return String(v);
}

function minutesToText(min?: number) {
  if (!min) return "—";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} s. ${m} min` : `${m} min`;
}

/** Demo genres (API'da yo‘q) */
const DEMO_GENRES = ["Triller", "Tarjima kinolar", "Mistik"];

/** Demo recommended (API'da yo‘q) */
const DEMO_RECOMMENDED: Array<{
  id: string;
  title: string;
  year: number;
  minutes: number;
  tag: string;
  poster: string;
}> = [
  {
    id: "1",
    title: "Og'ir shart sharoitda",
    year: 2007,
    minutes: 148,
    tag: "Drama",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500&q=80",
  },
  {
    id: "2",
    title: "Sahro Malikasi",
    year: 2016,
    minutes: 128,
    tag: "Drama",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
  },
  {
    id: "3",
    title: "Yashil Ritsar",
    year: 2021,
    minutes: 130,
    tag: "Drama",
    poster:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=500&q=80",
  },
];

export default function Page() {
  const params = useParams();
  const movieId = params?.movie_id as string;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    getSingleMovie(movieId)
      .then(setMovie)
      .catch((e) => setError(e?.message || "Error"));
  }, [movieId]);

  const title = useMemo(() => {
    if (!movie) return "";
    return movie.title_uz || movie.title_en || movie.title_ru || "—";
  }, [movie]);

  const description = useMemo(() => {
    if (!movie) return "";
    return (
      movie.description_uz ||
      movie.description_en ||
      movie.description_ru ||
      "—"
    );
  }, [movie]);

  if (error) return <div className="p-6 text-red-400">{error}</div>;

  // ✅ Skeleton loading (UI joylashuvi 1:1)
  if (!movie) return <SingleMovieSkeleton />;

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* MAIN */}
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          {/* LEFT+CENTER */}
          <div className="col-span-12 lg:col-span-9">
            {/* HERO CARD (poster + title + meta) */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              {/* blurred bg */}
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
                  {/* Poster */}
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

                  {/* Content */}
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

                      {/* imdb badge */}
                      <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-black/40 border border-white/10 px-3 py-2">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {movie.imdb_rating ?? "—"}
                        </span>
                        <span className="text-white/60 text-xs">IMDb</span>
                      </div>
                    </div>

                    {/* button */}
                    <div className="mt-4">
                      <a
                        href={movie.video_url || "#"}
                        className={[
                          "inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold",
                          "bg-white text-black hover:bg-white/90 transition",
                          !movie.video_url
                            ? "opacity-50 pointer-events-none"
                            : "",
                        ].join(" ")}
                      >
                        <FaPlay />
                        Tomosha qilish
                      </a>
                    </div>

                    {/* meta row */}
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

                    {/* genres */}
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

                {/* Cast row (API yo‘q, demo ko‘rinish) */}
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

            {/* VIDEO PLAYER (banner katta) */}
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

              {/* actions row */}
              <div className="p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm">
                    <FaThumbsUp />
                    <span>14</span>
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm">
                    <FaThumbsDown />
                    <span>1</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={movie.trailer_url || "#"}
                    className={[
                      "inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm",
                      "bg-black/25 hover:bg-black/35 transition",
                      !movie.trailer_url
                        ? "opacity-50 pointer-events-none"
                        : "",
                    ].join(" ")}
                  >
                    Treyler
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm bg-black/25 hover:bg-black/35 transition"
                  >
                    Yuklab olish
                  </a>
                </div>
              </div>
            </div>

            {/* INFO ACCORDION */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5">
              <details open className="group">
                <summary className="cursor-pointer list-none p-4 md:p-5 flex items-center justify-between">
                  <div className="font-semibold">
                    {title} filmi haqida ma'lumot
                  </div>
                  <div className="text-white/60 group-open:rotate-180 transition">
                    ▾
                  </div>
                </summary>

                <div className="px-4 md:px-5 pb-5 pt-0">
                  <div className="text-sm text-white/75 space-y-2">
                    <Row
                      label="Nomi:"
                      value={safe(
                        movie.title_uz || movie.title_en || movie.title_ru,
                      )}
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
                    <Row label="Video sifati:" value={"HD"} />
                    <Row
                      label="IMDb reyting:"
                      value={safe(movie.imdb_rating)}
                    />
                  </div>

                  <div className="mt-4 text-sm leading-7 text-white/70">
                    {description}
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 font-semibold flex items-center gap-2">
                ✨ Tavsiyalar
              </div>

              <div className="px-3 pb-3 space-y-3">
                {DEMO_RECOMMENDED.map((r) => (
                  <a
                    key={r.id}
                    href="#"
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 hover:bg-black/35 transition p-3"
                  >
                    <div className="h-16 w-12 rounded-xl overflow-hidden bg-white/10 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.poster}
                        alt={r.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">
                        {r.title}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {r.year} • {r.minutes} daq
                      </div>
                      <div className="mt-2 inline-flex rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-[11px] text-white/75">
                        {r.tag}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI pieces ---------- */

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-white/70">{icon}</span>
      <span className="text-white/60">{label}</span>
      <span className="text-white/90 font-semibold">{value}</span>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-white/60">{label}</div>
      <div className="text-white/85">{value}</div>
    </div>
  );
}

/* ---------- Skeleton ---------- */

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={["animate-pulse rounded-xl bg-white/10", className].join(" ")}
    />
  );
}

function SingleMovieSkeleton() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          {/* LEFT+CENTER */}
          <div className="col-span-12 lg:col-span-9">
            {/* HERO CARD */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              {/* blurred bg */}
              <div className="absolute inset-0">
                <Skeleton className="h-full w-full rounded-none opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
              </div>

              <div className="relative p-5 md:p-6">
                <div className="flex gap-5">
                  {/* Poster */}
                  <div className="w-[140px] md:w-[170px] shrink-0">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <div className="aspect-[2/3]">
                        <Skeleton className="h-full w-full rounded-none" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 w-full">
                        <Skeleton className="h-4 w-40 mb-2" />
                        <Skeleton className="h-9 w-[70%] md:w-[60%]" />
                      </div>

                      <div className="shrink-0 rounded-full bg-black/40 border border-white/10 px-3 py-2">
                        <Skeleton className="h-5 w-20 rounded-lg" />
                      </div>
                    </div>

                    {/* button */}
                    <div className="mt-4">
                      <Skeleton className="h-10 w-44 rounded-xl" />
                    </div>

                    {/* meta row */}
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <Skeleton className="h-6 w-28 rounded-full" />
                      <Skeleton className="h-6 w-36 rounded-full" />
                      <Skeleton className="h-6 w-28 rounded-full" />
                    </div>

                    {/* genres */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Skeleton className="h-5 w-16 rounded-lg" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-28 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Cast row */}
                <div className="mt-5 flex items-center gap-3 pb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="shrink-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-2"
                    >
                      <Skeleton className="h-9 w-9 rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-28 rounded-lg" />
                        <Skeleton className="h-3 w-20 rounded-lg opacity-70" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VIDEO PLAYER */}
            <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <Skeleton className="w-full h-[240px] md:h-[380px] rounded-none bg-white/5" />

              <div className="p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-20 rounded-xl" />
                  <Skeleton className="h-10 w-20 rounded-xl" />
                </div>

                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-24 rounded-xl" />
                  <Skeleton className="h-10 w-28 rounded-xl" />
                </div>
              </div>
            </div>

            {/* INFO ACCORDION */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="p-4 md:p-5 flex items-center justify-between">
                <Skeleton className="h-5 w-64 rounded-lg" />
                <Skeleton className="h-5 w-6 rounded-lg" />
              </div>

              <div className="px-4 md:px-5 pb-5">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[55%] rounded-lg" />
                  <Skeleton className="h-4 w-[45%] rounded-lg" />
                  <Skeleton className="h-4 w-[50%] rounded-lg" />
                  <Skeleton className="h-4 w-[40%] rounded-lg" />
                  <Skeleton className="h-4 w-[35%] rounded-lg" />
                </div>

                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full rounded-lg" />
                  <Skeleton className="h-4 w-[92%] rounded-lg" />
                  <Skeleton className="h-4 w-[86%] rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 font-semibold flex items-center gap-2">
                <Skeleton className="h-5 w-32 rounded-lg" />
              </div>

              <div className="px-3 pb-3 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 p-3"
                  >
                    <Skeleton className="h-16 w-12 rounded-xl shrink-0" />
                    <div className="min-w-0 flex-1">
                      <Skeleton className="h-4 w-[80%] rounded-lg" />
                      <Skeleton className="h-3 w-24 rounded-lg mt-2 opacity-70" />
                      <Skeleton className="h-5 w-16 rounded-full mt-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
