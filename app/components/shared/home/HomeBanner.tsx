"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import HomeBannerCard from "./components/HomeBanner/HomeBannerCard";

type Props = {
  movies: Movie[];
  visible?: number;
};

export default function HomeBanner({ movies, visible = 2 }: Props) {
  return (
    <Containers className="mt-6">
      <SwiperSection<Movie>
        variant="hero"
        gap={14}
        autoplay
        loop
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.05 },
          768: { slidesPerView: 1.15 },
          1024: { slidesPerView: visible },
        }}
        items={movies}
        getKey={(m, idx) => (typeof m.id === "number" ? m.id : idx)}
        renderItem={(m) => <HomeBannerCard item={m} />}
      />
    </Containers>
  );
}
