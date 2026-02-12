import React from "react";
import HomeBannerRatingButton from "./HomeBannerRatingButton";
import HomeBannerButton from "./HomeBannerButton";

type CardType = {
  id: number;
  title: string;
  rating: number;
  poster: string;
  tags: string[];
};


const HomeBannerCard = ({item}: CardType) => {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10">
      <img
        src={item.poster}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      <HomeBannerRatingButton className="">
        {item.rating}
      </HomeBannerRatingButton>

      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-[30px] font-bold text-white drop-shadow">
          {item.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <HomeBannerButton key={i} className="">
              {tag}
            </HomeBannerButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBannerCard;
