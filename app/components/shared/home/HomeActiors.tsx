"use client";

import type { MovieAktor } from "@/types/MoviesActor";
import SwiperSection from "../SwiperSection/SwiperSection";
import Containers from "../../ui/Containers";
import { MovieActorCard } from "../../ui/ActiorsCard";

type Props = {
  aktors: MovieAktor[];
  visible?: number;
};

const HomeActiors = ({ aktors, visible = 6 }: Props) => {
  return (
    <Containers>
      <SwiperSection<MovieAktor>
        variant="hero"
        gap={12} 
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 2.2 },
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: visible },
        }}
        items={aktors}
        getKey={(m, idx) => String(m.id ?? m.full_name ?? idx)}
        renderItem={(m) => (
          <div className="py-1">
            {/* ✅ har slide ichida faqat bitta actor */}
            <MovieActorCard item={m} variant="swiper" />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeActiors;
