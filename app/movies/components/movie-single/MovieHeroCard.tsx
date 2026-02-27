"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import {
  FaPlay,
  FaStar,
  FaRegCalendarAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import MetaItem from "./MetaItem";
import { safe } from "./MovieSingleUtils";
import { GenerType } from "@/types/GenerTypes";
import Duration from "@/app/components/ui/Duration";
import { MovieAktor } from "@/types/MoviesActor";
import Link from "next/link";
import ScrollToPlayerButton from "./ScrollToPlayerButton";
import BackButton from "@/app/components/ui/BackButton";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { addToLike, removeLike, isLiked } from "@/service/useLike";

type Props = {
  movie: Movie;
  title: string;
  ganreMovie: GenerType[];
  movieActor: MovieAktor[];
};

export default function MovieHeroCard({
  movie,
  title,
  ganreMovie,
  movieActor,
}: Props) {
  const [liked, setLiked] = useState(false);

  // Page load bo'lganda tekshiradi
  useEffect(() => {
    if (!movie?.id) return;
    setLiked(isLiked(movie.id));
  }, [movie?.id]);

  const toggleLike = () => {
    if (!movie?.id) return;

    if (liked) {
      removeLike(movie.id);
      setLiked(false);
    } else {
      addToLike(movie.id);
      setLiked(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="absolute inset-0">
        {movie.banner_url ? (
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

      <div className="relative p-4 min-[520px]:p-5 md:p-6">
        <div className="flex flex-col min-[520px]:flex-row gap-5">
          <div className="shrink-0 w-full min-[520px]:w-[140px] md:w-[170px]">
            <div className="overflow-hidden flex items-center justify-center min-[520px]:flex-none rounded-2xl border border-white/10 min-[520px]:bg-black/30">
              <div className="h-[260px] object-contain w-full min-[520px]:h-auto">
                {movie.poster_url ? (
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
                <div className="text-white/60 flex items-center gap-2 text-xs md:text-sm mb-1">
                  <BackButton />
                  Uzbek tilida • HD • Online tomosha
                </div>

                <h1 className="text-xl md:text-3xl font-extrabold leading-tight line-clamp-2 min-[520px]:line-clamp-1">
                  {title}
                </h1>
              </div>

              <div className="shrink-0 inline-flex items-center gap-1 rounded-full bg-black/40 border border-white/10 px-3 py-2">
                <FaStar className="text-[white]" />
                <span className="text-sm font-semibold">
                  {movie.imdb_rating ?? "—"}
                </span>
                <span className="text-white/60 text-xs">IMDb</span>
              </div>
            </div>

            <div className="mt-4">
              <ScrollToPlayerButton
                targetId="movie-player"
                className="
                  bg-white cursor-pointer text-black hover:bg-white/90 transition
                  inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold
                  w-full min-[400px]:w-auto
                "
              >
                <FaPlay />
                Tomosha qilish
              </ScrollToPlayerButton>
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
                value={<Duration minutes={movie.duration_minutes} />}
              />
              <MetaItem
                icon={<FaGlobe />}
                label="Mamlakat:"
                value={safe(movie.country)}
              />

              <div className="inline-flex items-center gap-2">
                <span className="text-white">Sevimlilar:</span>
                <button className="cursor-pointer" onClick={toggleLike}>
                  {liked ? (
                    <AiFillHeart className="w-[18px] h-[18px] text-red-500" />
                  ) : (
                    <AiOutlineHeart className="w-[18px] h-[18px] text-white" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="text-white font-medium text-sm mr-1">
                Janrlar:
              </div>

              {ganreMovie?.length ? (
                ganreMovie.map((el) => (
                  <span
                    key={el.id}
                    className="
                      inline-flex items-center rounded-full
                      bg-black/30 border border-white/10 px-3 py-1
                      text-xs text-white
                    "
                  >
                    {el.name_uz || el.name_ru || el.name_en || "—"}
                  </span>
                ))
              ) : (
                <span className="text-xs text-white">Janr topilmadi</span>
              )}
            </div>
          </div>
        </div>

        <div
          className="
            mt-5 flex items-center gap-3
            overflow-x-auto custom-scroll pb-1
            rounded
            min-[520px]:max-h-[385px] min-[520px]:overflow-y-auto
          "
        >
          {movieActor.map((p) => (
            <Link
              href={`/actors/${p.id}`}
              key={p.full_name}
              className="shrink-0 cursor-pointer flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-5 py-2"
            >
              <img
                src={p.photo_url}
                className="h-14 w-14 object-cover rounded-xl bg-white/10"
                alt={p.full_name}
              />
              <div className="leading-tight min-w-0">
                <div className="text-sm font-semibold truncate">
                  {p.full_name}
                </div>
                <div className="text-xs text-white/60 truncate">
                  {p.country}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
