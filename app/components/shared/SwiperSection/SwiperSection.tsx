"use client";

import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Autoplay } from "swiper/modules";
import type { AutoplayOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

type SlidesPerViewBp = Record<number, { slidesPerView: number }>;

function SectionHeader({
  title,
  allHref,
  rightSlot,
}: {
  title?: string;
  allHref?: string;
  rightSlot?: React.ReactNode;
}) {
  if (!title) return null;

  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <span className="text-white text-[18px] font-semibold">{title}</span>

      <div className="flex items-center gap-2">
        {rightSlot}
        {allHref ? (
          <Link
            href={allHref}
            className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/8"
          >
            barchasi
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export type SwiperSectionProps<T> = {
  variant?: "grid" | "hero";
  title?: string;
  allHref?: string;

  rows?: number;
  cols?: number;

  gap?: number;
  className?: string;

  visible?: number;
  heroBreakpoints?: SlidesPerViewBp;

  autoplay?: boolean | AutoplayOptions;
  loop?: boolean;
  speed?: number;

  items?: T[];
  renderItem?: (item: T, idx: number) => React.ReactNode;

  children?: React.ReactNode;
};

export default function SwiperSection<T = unknown>({
  variant = "grid",
  title,
  allHref,

  rows = 1,
  cols = 4,

  gap = 16,
  className = "",

  visible = 1.2,
  heroBreakpoints,

  autoplay = false,
  loop = false,
  speed = 450,

  items,
  renderItem,
  children,
}: SwiperSectionProps<T>) {
  const isGrid = variant === "grid";
  const safeRows = Math.max(1, Math.min(10, Number(rows) || 1));

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const content =
    Array.isArray(items) && typeof renderItem === "function"
      ? items.map((it, idx) => (
          <SwiperSlide key={(it as any)?.id ?? idx} className="h-auto">
            {renderItem(it, idx)}
          </SwiperSlide>
        ))
      : children;

  const clipClass = isGrid
    ? "relative overflow-hidden"
    : "relative overflow-hidden rounded-[28px]";

  const heroBp = useMemo<SlidesPerViewBp>(
    () =>
      heroBreakpoints || {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1.05 },
        768: { slidesPerView: 1.15 },
        1024: { slidesPerView: Number(visible) || 1 },
      },
    [heroBreakpoints, visible]
  );

  const gridBp = useMemo<SlidesPerViewBp>(
    () => ({
      0: { slidesPerView: 1.05 },
      480: { slidesPerView: 2.2 },
      768: { slidesPerView: Math.min(3, cols) },
      1024: { slidesPerView: cols },
      1280: { slidesPerView: cols },
    }),
    [cols]
  );

  const autoplayConfig: AutoplayOptions | undefined =
    autoplay === true
      ? { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }
      : typeof autoplay === "object"
      ? autoplay
      : undefined;

  const modules = useMemo(() => {
    const base = isGrid ? [Navigation, Grid] : [Navigation];
    if (autoplayConfig) base.push(Autoplay);
    return base;
  }, [isGrid, autoplayConfig]);

  return (
    <section className={className}>
      {isGrid && (
        <SectionHeader
          title={title}
          allHref={allHref}
          rightSlot={
            <div className="hidden md:flex items-center gap-2">
              <button
                ref={prevRef}
                type="button"
                className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/8 text-white"
                aria-label="prev"
              >
                ‹
              </button>
              <button
                ref={nextRef}
                type="button"
                className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/8 text-white"
                aria-label="next"
              >
                ›
              </button>
            </div>
          }
        />
      )}

      <div className={clipClass}>
        {!isGrid && (
          <>
            <button
              ref={prevRef}
              type="button"
              className="cursor-pointer absolute left-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white ring-1 ring-white/10 hover:bg-black/55 backdrop-blur flex items-center justify-center"
              aria-label="prev"
            >
              ‹
            </button>
            <button
              ref={nextRef}
              type="button"
              className="cursor-pointer absolute right-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white ring-1 ring-white/10 hover:bg-black/55 backdrop-blur flex items-center justify-center"
              aria-label="next"
            >
              ›
            </button>
          </>
        )}

        <Swiper
          modules={modules}
          onBeforeInit={(swiper) => {
            // @ts-expect-error Swiper internal typing
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper internal typing
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          grid={isGrid ? { rows: safeRows, fill: "row" } : undefined}
          spaceBetween={gap}
          slidesPerView={isGrid ? 1.2 : Number(visible) || 1}
          breakpoints={isGrid ? gridBp : heroBp}
          autoplay={autoplayConfig}
          loop={Boolean(loop)}
          speed={Number(speed) || 450}
          className="w-full"
        >
          {content}
        </Swiper>
      </div>
    </section>
  );
}
