"use client";

import Containers from "../../ui/Containers";
import { MovieAktor } from "@/types/MoviesActor";
import SwiperSection from "../SwiperSection/SwiperSection";
import Link from "next/link";

type Props = {
  aktors: MovieAktor[];
  className?: string;
};

function ActorCard({ item }: { item: MovieAktor }) {
  return (
    <Link href={`/actors/${item.id}`} className="block w-full">
      <div
        className="
    border border-white/20
    rounded-2xl
    overflow-hidden
    p-3
    transition
    group
    hover:border-white/50
  "
      >
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
      </div>
    </Link>
  );
}

export default function HomeActiors({ aktors, className = "" }: Props) {
  return (
    <div className={className}>
      <Containers>
        <SwiperSection<MovieAktor>
          variant="hero"
          gap={16}
          autoplay={false}
          loop={false}
          visible={6}
          items={aktors}
          getKey={(a, idx) =>
            typeof a.id === "number" ? a.id : `actor-${idx}`
          }
          renderItem={(a) => <ActorCard item={a} />}
          heroBreakpoints={{
            0: { slidesPerView: 2.2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        />
      </Containers>
    </div>
  );
}
