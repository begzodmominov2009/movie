import { ChildrenType } from "@/types/ChildrenTypes";
import React from "react";

const HomeBannerButton = ({children, key}: ChildrenType) => {
  return (
    <span
    key={key}
      className="rounded-full bg-[gray]/10 border border-[gray]/30 px-3 py-1 text-sm  text-white/90 backdrop-blur"
    >
      {children}
    </span>
  );
};

export default HomeBannerButton;
