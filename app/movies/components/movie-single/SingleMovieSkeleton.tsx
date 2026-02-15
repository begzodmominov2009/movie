import Skeleton from "./Skleton";

export default function SingleMovieSkeleton() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-9">
            <HeroSkeleton />
            <PlayerSkeleton />
            <InfoSkeleton />
          </div>

          {/* RIGHT */}
          <aside className="col-span-12 lg:col-span-3">
            <RecommendedSkeleton />
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ---------- pieces ---------- */

function HeroSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="absolute inset-0">
        <Skeleton className="h-full w-full rounded-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      <div className="relative p-5 md:p-6">
        <div className="flex gap-5">
          {/* Poster */}
          <div className="w-[140px] md:w-[170px] shrink-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="aspect-[2/3]">
                <Skeleton className="h-full w-full rounded-none" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 w-full">
                <Skeleton className="h-4 w-40 mb-2" />
                <Skeleton className="h-9 w-[70%] md:w-[60%]" />
              </div>

              <div className="shrink-0 rounded-full bg-black/40 border border-white/10 px-3 py-2">
                <Skeleton className="h-5 w-20 rounded-lg" />
              </div>
            </div>

            <div className="mt-4">
              <Skeleton className="h-10 w-44 rounded-xl" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Skeleton className="h-6 w-28 rounded-full" />
              <Skeleton className="h-6 w-36 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Skeleton className="h-5 w-16 rounded-lg" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 pb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-2"
            >
              <Skeleton className="h-9 w-9 rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-28 rounded-lg" />
                <Skeleton className="h-3 w-20 rounded-lg opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerSkeleton() {
  return (
    <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
      <Skeleton className="w-full h-[240px] md:h-[380px] rounded-none bg-white/5" />

      <div className="p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-20 rounded-xl" />
          <Skeleton className="h-10 w-20 rounded-xl" />
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-24 rounded-xl" />
          <Skeleton className="h-10 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

function InfoSkeleton() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5">
      <div className="p-4 md:p-5 flex items-center justify-between">
        <Skeleton className="h-5 w-64 rounded-lg" />
        <Skeleton className="h-5 w-6 rounded-lg" />
      </div>

      <div className="px-4 md:px-5 pb-5">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[55%] rounded-lg" />
          <Skeleton className="h-4 w-[45%] rounded-lg" />
          <Skeleton className="h-4 w-[50%] rounded-lg" />
          <Skeleton className="h-4 w-[40%] rounded-lg" />
          <Skeleton className="h-4 w-[35%] rounded-lg" />
        </div>

        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-[92%] rounded-lg" />
          <Skeleton className="h-4 w-[86%] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

function RecommendedSkeleton() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="p-4 font-semibold flex items-center gap-2">
        <Skeleton className="h-5 w-32 rounded-lg" />
      </div>

      <div className="px-3 pb-3 space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 p-3"
          >
            <Skeleton className="h-16 w-12 rounded-xl shrink-0" />
            <div className="min-w-0 flex-1">
              <Skeleton className="h-4 w-[80%] rounded-lg" />
              <Skeleton className="h-3 w-24 rounded-lg mt-2 opacity-70" />
              <Skeleton className="h-5 w-16 rounded-full mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
