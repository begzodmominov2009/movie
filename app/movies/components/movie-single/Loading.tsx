import SingleMovieSkeleton from "./SingleMovieSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <SingleMovieSkeleton />
          </div>

          {/* Sidebar ham skeleton bo‘lsin */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 overflow-hidden">
              <div className="h-5 w-32 rounded bg-white/10 animate-pulse" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 p-3"
                  >
                    <div className="h-16 w-12 rounded-xl bg-white/10 animate-pulse" />
                    <div className="flex-1">
                      <div className="h-4 w-4/5 rounded bg-white/10 animate-pulse" />
                      <div className="mt-2 h-3 w-2/3 rounded bg-white/10 animate-pulse" />
                      <div className="mt-3 h-5 w-20 rounded-full bg-white/10 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
