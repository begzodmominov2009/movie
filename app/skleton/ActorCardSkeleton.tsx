const ActorCardSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center gap-3 p-3 bg-[#151515] rounded-xl">
      <div className="w-12 h-12 bg-[#1f1f1f] rounded-full" />

      <div className="flex-1 space-y-2">
        <div className="h-4 w-24 bg-[#1f1f1f] rounded" />
        <div className="h-3 w-16 bg-[#1f1f1f] rounded" />
      </div>
    </div>
  );
};

export default ActorCardSkeleton;
