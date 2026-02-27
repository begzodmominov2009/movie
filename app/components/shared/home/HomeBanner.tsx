"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import HomeBannerCard from "./components/HomeBanner/HomeBannerCard";
import HomeBannerCardSkeleton from "./components/HomeBanner/HomeBannerScletonCard";

type Props = {
  movies?: Movie[];
  visible?: number;
  loading?: boolean;
};

export default function HomeBanner({
  movies = [],
  visible = 2,
  loading,
}: Props) {
  const isLoading = loading ?? movies.length === 0;

  const skeletonItems: Movie[] = Array.from({
    length: Math.max(visible, 2),
  }).map(
    (_, idx) =>
      ({
        id: `sk-${idx}`, // 👈 string fake id
      }) as Movie,
  );

  const items = isLoading ? skeletonItems : movies;

  return (
    <Containers className="mt-6">
      <SwiperSection<Movie>
        variant="hero"
        gap={14}
        autoplay={!isLoading}
        loop={!isLoading}
        visible={visible}
        heroBreakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.05 },
          768: { slidesPerView: 1.15 },
          1024: { slidesPerView: visible },
        }}
        items={items}
        getKey={(m, idx) => (typeof m.id === "number" ? m.id : `sk-${idx}`)}
        renderItem={(m, idx) =>
          isLoading ? (
            <HomeBannerCardSkeleton key={`sk-${idx}`} />
          ) : (
            <HomeBannerCard item={m} />
          )
        }
      />
    </Containers>
  );
}
