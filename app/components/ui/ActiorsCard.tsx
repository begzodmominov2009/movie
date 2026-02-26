"use client";

import { MovieAktor } from "@/types/MoviesActor";
import Link from "next/link";

type MovieActorCardProps = {
  item: MovieAktor;
  variant?: "grid" | "list";
  className?: string;
};

type MovieActorsProps = {
  aktors: MovieAktor[];
  variant?: "grid" | "list";
  className?: string;
};

function MovieActorCard({
  item,
  variant = "grid",
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
        {item.photo_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.photo_url}
            alt={item.full_name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      <h3 className="text-sm font-semibold text-white truncate">
        {item.full_name}
      </h3>

      <p className="text-xs text-gray-400">Actor</p>
    </div>
  );
}

export default function MovieActors({
  aktors,
  variant = "grid",
  className = "",
}: MovieActorsProps) {
  return (
    <div
      className={
        variant === "grid"
          ? `grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`
          : `flex gap-4 overflow-x-auto ${className}`
      }
    >
      {aktors?.map((item) => (
        <Link key={item.id} href={`/actors/${item.id}`}>
          <MovieActorCard item={item} variant={variant} />
        </Link>
      ))}
    </div>
  );
}
