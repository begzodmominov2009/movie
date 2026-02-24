"use client";

import React, { useState } from "react";
import Containers from "../../ui/Containers";
import SwiperSection from "../SwiperSection/SwiperSection";
import type { GenerType } from "@/types/GenerTypes";

function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer select-none",
        "inline-flex items-center gap-2",
        "h-10 px-4 rounded-lg w-full items-center justify-center",
        "border ring-1 transition-all duration-200",
        active
          ? "bg-white/10 border-white/20 ring-white/15 text-white"
          : "bg-white/5 border-white/10 ring-white/10 text-white/90 hover:bg-white/8 hover:border-white/15",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

type Props = {
  ganer?: GenerType[];
};

export default function HomeGaner({ ganer }: Props) {
  const [activeId, setActiveId] = useState<string>(ganer?.[0]?.id ?? "");

  return (
    <Containers className="mt-4">
      <SwiperSection<GenerType>
        variant="hero"
        gap={7}
        autoplay={false}
        loop
        visible={6.5}
        heroBreakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3.2 },
          640: { slidesPerView: 4.2 },
          768: { slidesPerView: 5.2 },
          1024: { slidesPerView: 8 },
        }}
        items={ganer ?? []}
        getKey={(g) => g?.id}
        renderItem={(g) => (
          <div className="py-1">
            <Pill
              active={g?.id === activeId}
              onClick={() => g?.id && setActiveId(g.id)}
            >
              {g?.icon && (
                <img
                  src={g.icon}
                  alt={g?.name_uz}
                  className="h-4 w-4"
                  style={{ filter: "brightness(0) invert(1)" }}
                  loading="lazy"
                />
              )}

              <span className="text-[14px] font-medium">{g?.name_uz}</span>
            </Pill>
          </div>
        )}
      />
    </Containers>
  );
}
