import React from "react";

function S({ className = "" }: { className?: string }) {
  return (
    <div
      className={["animate-pulse rounded-xl bg-white/10", className].join(" ")}
    />
  );
}

const HomeBannerCardSkeleton = () => {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10">
      {/* Image placeholder */}
      <S className="absolute inset-0 h-full w-full rounded-none bg-white/5" />

      {/* Same overlay vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/50 to-transparent" />

      {/* Rating badge skeleton */}
      <div className="absolute top-4 right-4">
        <div className="rounded-full bg-black/40 px-3 py-2 ring-1 ring-white/10">
          <S className="h-4 w-10 rounded-lg" />
        </div>
      </div>

      {/* Bottom content skeleton */}
      <div className="absolute bottom-0 left-0 p-6">
        <S className="h-9 w-[240px] rounded-2xl" />

        <div className="mt-3 flex flex-wrap gap-2">
          <S className="h-8 w-20 rounded-full" />
          <S className="h-8 w-24 rounded-full" />
          <S className="h-8 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HomeBannerCardSkeleton;
