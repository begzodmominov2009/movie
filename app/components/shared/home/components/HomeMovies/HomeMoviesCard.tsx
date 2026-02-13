"use client";
import React, { useState } from "react";
import HomeMoviesNewBadge from "./HomeMoviesNewBadge";
import HomeMoviesRatingBadge from "./HomeMoviesRatingBadge";

const PlayIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <path d="M9 7l10 5-10 5V7Z" fill="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 8v5l3 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

function HomeMoviesCard() {
  const [hover, setHover] = useState(false);

  const item = {
    title: "Xizmatkor ayol / Oqsoch",
    genre: "Triller",
    year: 2025,
    rating: "7.0",
    duration: "131 min",
    isNew: true,
    poster:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=70",
  };

  return (
    <div
      className="w-[280px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* poster box */}
      <div
        className={[
          "relative overflow-hidden rounded-3xl",
          "border border-white/10 bg-white/[0.04]",
          "ring-1 ring-white/10",
          "shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >
        {/* poster */}
        <div className="aspect-[4/5]">
          <img
            src={item.poster}
            alt={item.title}
            className={[
              "h-full w-full object-cover",
              "transition duration-300",
              hover ? "blur-[5px] scale-[1.06]" : "scale-100",
            ].join(" ")}
          />
        </div>

        {/* NEW badge */}
        {item.isNew && <HomeMoviesNewBadge />}

        {/* rating badge (top-right) */}
        <HomeMoviesRatingBadge item={item}/>

        {/* duration badge (bottom-right) */}
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-[12px] font-medium text-white ring-1 ring-white/10 backdrop-blur">
          <ClockIcon />
          {item.duration}
        </span>

        {/* hover overlay + play */}
        <div
          className={[
            "absolute inset-0 grid place-items-center",
            "transition-opacity duration-300 ",
            hover ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="relative grid h-[72px] w-[72px] place-items-center rounded-full bg-white/85 ring-4 ring-white/20">
            <span className="text-green-500 cursor-pointer">
              <PlayIcon />
            </span>
          </div>
        </div>
      </div>

      {/* title + meta (pastidagi qism) */}
      <div className="mt-4">
        <h3 className="text-[18px] font-semibold text-white leading-tight">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] text-white/55">
          {item.genre} • {item.year}
        </p>
      </div>
    </div>
  );
}

export default HomeMoviesCard;
