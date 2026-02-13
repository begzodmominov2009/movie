import React from "react";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 17.3l-5.8 3.4 1.6-6.6L2.6 9.7l6.7-.6L12 2.8l2.7 6.3 6.7.6-5.2 4.4 1.6 6.6L12 17.3Z"
      fill="currentColor"
    />
  </svg>
);

const HomeMoviesRatingBadge = ({item}) => {
  return (
    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-semibold text-white ring-1 ring-white/10 backdrop-blur">
      <StarIcon />
      {item.rating}
    </span>
  );
};

export default HomeMoviesRatingBadge;
