"use client";

import type { MovieAktor } from "@/types/MoviesActor";

type MovieActorCardProps = {
  item: MovieAktor;
  variant?: "swiper" | "list";
  className?: string;
};

export function MovieActorCard({
  item,
  variant = "swiper",
  className = "",
}: MovieActorCardProps) {
  return (
    <div
      className={[
        "bg-transparent border border-white/20 rounded-2xl",
        "group hover:border-white/50 hover:bg-white/5",
        "p-3 transition cursor-pointer",
        variant === "list" ? "w-[200px] shrink-0" : "w-full",
        className,
      ].join(" ")}
    >
      <div className="w-full h-[190px] rounded-xl overflow-hidden mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.photo_url}
          alt={item.full_name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <h3 className="text-sm font-semibold text-white truncate">
        {item.full_name}
      </h3>

      <p className="text-xs text-gray-400">Actor</p>
    </div>
  );
}

type MovieActorsGridProps = {
  aktors: MovieAktor[];
  className?: string;
};

export default function MovieActors({
  aktors,
  className = "",
}: MovieActorsGridProps) {
  return (
    <div className={className}>
      {aktors?.map((item) => (
        <MovieActorCard
          key={String(item.id ?? item.full_name)}
          item={item}
          variant="list"
        />
      ))}
    </div>
  );
}
