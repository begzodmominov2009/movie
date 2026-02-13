"use client";

import React, { useState } from "react";
import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import { GenerType } from "@/types/GenerTypes";

type Genre = {
  id: number;
  label: string;
  icon: React.ReactNode;
  slug?: string; // keyin route qilasan
};

function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer select-none",
        "inline-flex items-center gap-2",
        "h-10 px-4 rounded-lg w-full flex items-center justify-center",
        "border ring-1",
        "transition-all duration-200",
        active
          ? "bg-white/10 border-white/20 ring-white/15 text-white"
          : "bg-white/5 border-white/10 ring-white/10 text-white/90 hover:bg-white/8 hover:border-white/15",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

const IconBolt = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M13 2L3 14h7l-1 8 12-16h-7l-1-4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSmile = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 14s1.5 2 4 2 4-2 4-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9h.01M15 9h.01"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const IconDrama = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 4h10v9a5 5 0 0 1-10 0V4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 9h.01M15 9h.01"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M8 13c1 1 7 1 8 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconSparkles = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M19 13l.8 2.6L22 16l-2.2.4L19 19l-.8-2.6L16 16l2.2-.4L19 13Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMoon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12.8A8.5 8.5 0 0 1 11.2 3 7.5 7.5 0 1 0 21 12.8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEye = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const IconShield = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l8 4v6c0 5-3.3 9.3-8 10-4.7-.7-8-5-8-10V6l8-4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPuzzle = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 3h3a2 2 0 1 1 4 0h3v5a2 2 0 1 0 0 4v5h-5a2 2 0 1 1-4 0H3v-5a2 2 0 1 0 0-4V3h5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMap = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M10 20 3 17V4l7 3 7-3 4 2v13l-4-2-7 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M10 7v13M17 4v13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconCrime = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 7h10v10H7V7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 12h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 9v6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const GENRES: Genre[] = [
  { id: 1, label: "Jangari", icon: IconBolt, slug: "action" },
  { id: 2, label: "Komediya", icon: IconSmile, slug: "comedy" },
  { id: 3, label: "Drama", icon: IconDrama, slug: "drama" },
  { id: 4, label: "Fantastika", icon: IconSparkles, slug: "sci-fi" },
  { id: 5, label: "Ujas", icon: IconMoon, slug: "horror" },
  { id: 6, label: "Triller", icon: IconEye, slug: "thriller" },
  { id: 7, label: "Harbiy", icon: IconShield, slug: "war" },
  { id: 8, label: "Multfilmlar", icon: IconPuzzle, slug: "cartoon" },
  { id: 9, label: "Sarguzasht", icon: IconMap, slug: "adventure" },
  { id: 10, label: "Kriminal", icon: IconCrime, slug: "crime" },
];

type Props = {
  ganer: GenerType
}

export default function HomeGaner({ganer}: Props) {
  const [activeId, setActiveId] = useState<number>(1);
  return (
    <Containers className="mt-4">
      <SwiperSection<Genre>
        variant="hero"
        gap={7}
        autoplay={false}
        loop={true}
        visible={6.5} // ✅ katta ekranda ko‘proq ko‘rinsin
        heroBreakpoints={{
          0: { slidesPerView: 2.2 },
          480: { slidesPerView: 3.2 },
          640: { slidesPerView: 4.2 },
          768: { slidesPerView: 5.2 },
          1024: { slidesPerView: 8.5 },
        }}
        items={GENRES}
        getKey={(ganre) => ganre.id}
        renderItem={(ganre) => (
          <div className="py-1">
            <Pill active={ganre.id === activeId} onClick={() => setActiveId(ganre.id)}>
              <span className="text-white/90">{ganre.icon}</span>
              <span className="text-[14px] font-medium ">{ganre.label}</span>
            </Pill>
          </div>
        )}
      />
    </Containers>
  );
}
