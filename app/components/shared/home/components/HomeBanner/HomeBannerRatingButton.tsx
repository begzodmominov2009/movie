import { ChildrenType } from "@/types/ChildrenTypes";

const HomeBannerRatingButton = ({ children}: ChildrenType) => {
  return (
    <div className="absolute right-5 top-5 rounded-full bg-[gray]/20 border border-[gray]/30 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
      ★ {children}
    </div>
  );
};

export default HomeBannerRatingButton;
