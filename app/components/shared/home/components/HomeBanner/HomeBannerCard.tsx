import React from "react";
import HomeBannerRatingButton from "./HomeBannerRatingButton";
import HomeBannerButton from "./HomeBannerButton";
import { Movie } from "@/types/MoviesDataTypes";
import Link from "next/link";

type Props = {
  item: Movie;
};

const HomeBannerCard = ({ item }: Props) => {
  return (
    <Link href={`/movies/${item?.id}`}>
      <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10">
        <img
          src={item?.poster_url}
          alt={item?.title_uz}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/55 to-transparent" />

        <HomeBannerRatingButton>{item?.imdb_rating}</HomeBannerRatingButton>

        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-[30px] font-bold text-white drop-shadow-lg">
            {item?.title_uz}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            <HomeBannerButton>{item?.country}</HomeBannerButton>
            <HomeBannerButton>{item?.language}</HomeBannerButton>
            <HomeBannerButton>{item?.created_by}</HomeBannerButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeBannerCard;
