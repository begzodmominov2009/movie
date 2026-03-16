const MovieCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[2/3] bg-[#1f1f1f] rounded-xl" />

      <div className="mt-2 space-y-2">
        <div className="h-4 w-3/4 bg-[#1f1f1f] rounded" />
        <div className="h-3 w-1/2 bg-[#1f1f1f] rounded" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;