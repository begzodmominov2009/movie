"use client";

import React from "react";
import Containers from "@/app/components/ui/Containers";

type SectionHeaderProps = {
  title: string;
  iconUrl?: string; // chapdagi icon (optional)
  iconAlt?: string;

  actionLabel?: string; // "barchasi" (optional)
  actionIconUrl?: string; // o‘ngdagi arrow icon (optional)
  onActionClick?: () => void; // button bosilganda
  actionHref?: string; // link bo‘lsa (onActionClick o‘rniga)
  className?: string;

  // agar iconlar qora kelib qolsa white qilish uchun
  whiteIcon?: boolean;
};

export default function SectionHeader({
  title,
  iconUrl,
  iconAlt = "icon",
  actionLabel = "barchasi",
  actionIconUrl = "https://unpkg.com/lucide-static/icons/arrow-right.svg",
  onActionClick,
  actionHref,
  className = "",
  whiteIcon = true,
}: SectionHeaderProps) {
  const iconFilter = whiteIcon
    ? { filter: "brightness(0) invert(1)" }
    : undefined;

  const ActionWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (actionHref) {
      return (
        <a
          href={actionHref}
          className="
            group inline-flex items-center gap-2
            px-4 py-1 rounded-xl
            bg-[#111317] border border-white/10
            cursor-pointer text-white
            transition-all duration-200
            hover:bg-white/5 hover:border-white/20
          "
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={onActionClick}
        className="
          group inline-flex items-center gap-2
          px-4 py-1 rounded-xl
          bg-[#111317] border border-white/10
          cursor-pointer text-white
          transition-all duration-200
          hover:bg-white/5 hover:border-white/20
        "
      >
        {children}
      </button>
    );
  };

  return (
    <Containers
      className={`flex items-center justify-between mb-3 ${className}`}
    >
      {/* left */}
      <div className="flex items-center gap-2">
        {iconUrl && (
          <img
            src={iconUrl}
            alt={iconAlt}
            className="w-5 h-5"
            style={iconFilter}
          />
        )}
        <h1 className="text-white text-[18px] sm:text-[24px] font-semibold">{title}</h1>
      </div>

      {/* right action (optional) */}
      {actionLabel && (
        <ActionWrapper>
          <span
            className="
              flex items-center justify-center
              w-6 h-6 rounded-full
              bg-white/10 border border-white/15
            "
          >
            {actionIconUrl && (
              <img
                src={actionIconUrl}
                alt="action"
                className="w-3.5 h-3.5"
                style={iconFilter}
              />
            )}
          </span>

          <span className="text-sm font-medium">{actionLabel}</span>
        </ActionWrapper>
      )}
    </Containers>
  );
}
