"use client";

import { MovieAktor } from "@/types/MoviesActor";
import SwiperSection from "../SwiperSection/SwiperSection";
import MovieActors from "../../ui/ActiorsCard";
import Containers from "../../ui/Containers";

type Props = {
  aktors: MovieAktor[];
  visible?: number;
};

const HomeActiors = ({ aktors, visible = 1 }: Props) => {
  return (
    <Containers>
      <SwiperSection<MovieAktor>
        variant="hero"
        gap={4}
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: visible },
        }}
        items={aktors}
        getKey={(m) => m.id ?? m.full_name}
        renderItem={(m) => (
          <div className="py-1">
            <MovieActors aktors={aktors} className="flex gap-5" />
          </div>
        )}
      />
    </Containers>
  );
};

export default HomeActiors;
