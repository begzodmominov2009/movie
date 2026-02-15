"use client";

import type { Movie } from "@/types/MoviesDataTypes";
import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import HomeBannerCard from "./components/HomeBanner/HomeBannerCard";
import HomeBannerCardSkeleton from "./components/HomeBanner/HomeBannerScletonCard";

type Props = {
  movies?: Movie[]; // ✅ endi optional
  visible?: number;
  loading?: boolean; // ✅ xohlasang tashqaridan ham berasan
};

export default function HomeBanner({
  movies = [],
  visible = 2,
  loading,
}: Props) {
  // ✅ movies yo‘q / bo‘sh bo‘lsa skeleton chiqsin
  const isLoading = loading ?? movies.length === 0;

  const skeletonItems = Array.from({ length: Math.max(visible, 2) }).map(
    () => ({ id: undefined }) as Movie,
  );

  const items = isLoading ? skeletonItems : movies;

  return (
    <Containers className="mt-6">
      <SwiperSection<Movie>
        variant="hero"
        gap={14}
        autoplay={!isLoading} // ✅ loading paytida autoplay o‘chadi
        loop={!isLoading} // ✅ loading paytida loop o‘chadi
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
