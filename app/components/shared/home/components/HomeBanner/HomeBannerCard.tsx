import React from "react";
import HomeBannerRatingButton from "./HomeBannerRatingButton";
import HomeBannerButton from "./HomeBannerButton";
import { Movie } from "@/types/MoviesDataTypes";

type Props = {
  item: Movie;
};

const HomeBannerCard = ({ item }: Props) => {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10">
      <img
        src={item.poster_url}
        alt={item.title_en}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

      <HomeBannerRatingButton>{item.age_rating}</HomeBannerRatingButton>

      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-[30px] font-bold text-white drop-shadow">
          {item.title_en}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          <HomeBannerButton>{item.country}</HomeBannerButton>
          <HomeBannerButton>{item.language}</HomeBannerButton>
          <HomeBannerButton>{item.release_year}</HomeBannerButton>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerCard;
