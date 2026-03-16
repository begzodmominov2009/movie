import Containers from "./components/ui/Containers";
import ActorCardSkeleton from "./skleton/ActorCardSkeleton";
import HomeBannerSkeleton from "./skleton/HomeBannerSkeleton";
import MovieCardSkeleton from "./skleton/MovieCardSkeleton";


export default function Loading() {
  return (
    <Containers className="space-y-10 animate-pulse">
      {/* Banner */}
      <HomeBannerSkeleton />

      {/* Genres */}
      <div className="flex gap-3 px-6 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-10 w-28 bg-[#1f1f1f] rounded-xl" />
        ))}
      </div>

      {/* Movie cards */}
      <div className="px-6">
        <div className="h-6 w-52 bg-[#1f1f1f] rounded mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Top movies */}
      <div className="grid md:grid-cols-2 gap-6 px-6">
        <div className="h-72 bg-[#1f1f1f] rounded-2xl" />
        <div className="h-72 bg-[#1f1f1f] rounded-2xl" />
      </div>

      {/* Actors */}
      <div className="px-6">
        <div className="h-6 w-40 bg-[#1f1f1f] rounded mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <ActorCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </Containers>
  );
}
