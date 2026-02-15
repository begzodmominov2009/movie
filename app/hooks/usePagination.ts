"use client";

import { useMemo, useState } from "react";

type UsePaginationOptions<T> = {
  items: T[];
  pageSize?: number;
  initialPage?: number;
};

export function usePagination<T>({
  items,
  pageSize = 12,
  initialPage = 1,
}: UsePaginationOptions<T>) {
  const [page, setPage] = useState(initialPage);

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, safePage]);

  const meta = useMemo(() => {
    const from = total === 0 ? 0 : (safePage - 1) * pageSize + 1;
    const to = Math.min(safePage * pageSize, total);
    return { total, from, to, page: safePage, totalPages, pageSize };
  }, [total, safePage, totalPages, pageSize]);

  const controls = {
    page: safePage,
    setPage,
    next: () => setPage((p) => Math.min(p + 1, totalPages)),
    prev: () => setPage((p) => Math.max(p - 1, 1)),
    first: () => setPage(1),
    last: () => setPage(totalPages),
    canPrev: safePage > 1,
    canNext: safePage < totalPages,
  };

  return { pageItems, meta, controls };
}
