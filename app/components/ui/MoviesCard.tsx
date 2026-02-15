"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Movie } from "@/types/MoviesDataTypes";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MovieGenre } from "@/types/MovieGanre";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 17.3l-5.8 3.4 1.6-6.6L2.6 9.7l6.7-.6L12 2.8l2.7 6.3 6.7.6-5.2 4.4 1.6 6.6L12 17.3Z"
      fill="currentColor"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 8v5l3 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

type Props = {
  item: Movie;
  movie_filtered?: Movie[]
  ganer_name_cartoons?: string;
  ganer_name_movie?: string;
};

export default function MovieCard({
  item,
  ganer_name_cartoons,
  ganer_name_movie,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/movies/${item?.id}`}
      prefetch
      className="block w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={[
          "relative overflow-hidden rounded-3xl",
          "border border-white/10 bg-white/[0.04]  ring-1 ring-white/10",
          "shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
          "transition-all duration-200 w-[200px]",
          "hover:border-white/15 hover:ring-white/15 hover:bg-white/[0.06]",
        ].join(" ")}
      >
        <div className="aspect-[4/5]">
          <img
            src={item?.poster_url}
            alt={item?.title_uz || item?.title_uz || "Movie"}
            loading="lazy"
            className={[
              "h-full w-full object-cover transition duration-300",
              hover ? "blur-[5px] scale-[1.06]" : "scale-100",
            ].join(" ")}
          />
        </div>

        <span className="absolute right-2 top-2 inline-flex items-center gap-[1px] rounded-full bg-black/55 px-2 py-[2px] text-[12px] font-semibold text-white ring-1 ring-white/10 backdrop-blur">
          <StarIcon />
          {item?.imdb_rating ?? "—"}
        </span>

        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[12px] font-medium text-white ring-1 ring-white/10 backdrop-blur">
          <ClockIcon />
          {item?.duration_minutes ?? "—"} min
        </span>

        <div
          className={[
            "absolute inset-0 grid place-items-center",
            "transition-opacity duration-300",
            hover ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="relative grid h-[52px] w-[52px] place-items-center rounded-full bg-white/85 ring-4 ring-white/20">
            <span className="text-green-500">
              <IoPlayCircleOutline className="w-7 h-7" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="line-clamp-1 text-[16px] sm:text-[17px] md:text-[18px] font-semibold text-white leading-tight">
          {item?.title_uz || item?.title_uz || item?.title_ru || "—"}
        </h3>
        <p className="mt-1 text-[13px] text-white/55">
          {item?.created_by} : {ganer_name_cartoons}{" "}
          {ganer_name_movie}
        </p>
      </div>
    </Link>
  );
}
