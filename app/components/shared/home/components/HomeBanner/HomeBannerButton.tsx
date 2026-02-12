import { ChildrenType } from "@/types/ChildrenTypes";
import React from "react";

const HomeBannerButton = ({ children, className = "" }: ChildrenType) => {
  return (
    <span
      className={`rounded-full bg-[gray]/10 border border-[gray]/30 px-3 py-1 text-sm text-white/90 backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
};

export default HomeBannerButton;
