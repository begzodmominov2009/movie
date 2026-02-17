"use client";

import Containers from "../../ui/Containers";
import { MovieAktor } from "@/types/MoviesActor";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

type Props = {
  aktors: MovieAktor[];
  className?: string;
};

function MovieCard({ item }: { item: MovieAktor }) {
  return (
    <Link href={`/actors/${item.id}`} className="bg-transparent border border-white/20 rounded-2xl group hover:border-white/50 hover:bg-white/2 p-3 transition cursor-pointer max-w-[180px] w-full">
      <div className="w-full h-[190px] rounded-xl overflow-hidden mb-3">
        <img
          src={item.photo_url}
          alt={item.full_name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-sm font-semibold text-white truncate">
        {item.full_name}
      </h3>

      <p className="text-xs text-gray-400">Actor</p>
    </Link>
  );
}

export default function HomeActiors({ aktors, className = "" }: Props) {
  return (
    <div className={className}>
     
      <Containers className="flex gap-5">
        {aktors.map((item) => (
          <MovieCard key={item.id ?? item.full_name} item={item} />
        ))}
      </Containers>
    </div>
  );
}
