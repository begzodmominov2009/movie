"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function ActiveLink({
  href,
  exact = false,
  children,
  className = "",
}: Props) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 rounded-full px-3 py-2 transition",
        isActive
          ? "bg-white/5 text-white border border-white/20"
          : "text-gray-200 hover:bg-white/5",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
