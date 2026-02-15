"use client";

import Containers from "./Containers";
import { MovieAktor } from "@/types/MoviesActor";

type MovieActorCardProps = {
  item: MovieAktor;
  className?: string;
};

type MovieActorsGridProps = {
  aktors: MovieAktor[];
  className?: string;
};

function MovieActorCard({ item, className = "" }: MovieActorCardProps) {
  return (
    <div
      className={[
        "bg-transparent border border-white/20 rounded-2xl",
        "group hover:border-white/50 hover:bg-white/2",
        "p-3 transition cursor-pointer max-w-[180px] w-full",
        className,
      ].join(" ")}
    >
      <div className="w-full h-[190px] rounded-xl overflow-hidden mb-3">
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

export default function MovieActors({
  aktors,
  className = "",
}: MovieActorsGridProps) {
  return (
    <div className={className}>
        {aktors?.map((item) => (
          <MovieActorCard key={item.id ?? item.full_name} item={item} />
        ))}
    </div>
  );
}
