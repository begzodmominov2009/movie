"use client";

import React from "react";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  // customization
  siblingCount?: number; // yonida nechta sahifa ko‘rinsin
  className?: string;
  showEdges?: boolean; // 1 va oxirgi ko‘rinsin
};

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function getPages(
  page: number,
  totalPages: number,
  siblingCount: number,
  showEdges: boolean,
) {
  const pages: (number | "...")[] = [];
  if (totalPages <= 1) return [1];

  const start = clamp(page - siblingCount, 1, totalPages);
  const end = clamp(page + siblingCount, 1, totalPages);

  const push = (v: number | "...") => pages.push(v);

  if (showEdges && start > 1) {
    push(1);
    if (start > 2) push("...");
  }

  for (let p = start; p <= end; p++) push(p);

  if (showEdges && end < totalPages) {
    if (end < totalPages - 1) push("...");
    push(totalPages);
  }

  return pages;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
  showEdges = true,
}: PaginationProps) {
  const pages = getPages(page, totalPages, siblingCount, showEdges);

  const Btn = ({
    children,
    active,
    disabled,
    onClick,
  }: {
    children: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "h-10 min-w-10 px-3 rounded-xl text-sm font-medium",
        "border ring-1 transition",
        disabled
          ? "opacity-50 cursor-not-allowed border-white/10 ring-white/10 text-white/60"
          : active
            ? "bg-white/10 border-white/20 ring-white/15 text-white"
            : "bg-white/5 border-white/10 ring-white/10 text-white/85 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );

  return (
    <div className={["flex flex-wrap items-center gap-2", className].join(" ")}>
      <Btn disabled={page <= 1} onClick={() => onPageChange(1)}>
        «
      </Btn>
      <Btn disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        ‹
      </Btn>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-white/50">
            ...
          </span>
        ) : (
          <Btn key={p} active={p === page} onClick={() => onPageChange(p)}>
            {p}
          </Btn>
        ),
      )}

      <Btn disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
        ›
      </Btn>
      <Btn
        disabled={page >= totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        »
      </Btn>
    </div>
  );
}
