"use client";

import React from "react";

type Props = {
  targetId?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ScrollToPlayerButton({
  targetId = "movie-player",
  className = "",
  children = "Tomosha qilish",
}: Props) {
  const onClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
