"use client";
import React, { useState, useEffect } from "react";
import { Search, Home, Film, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Containers from "../ui/Containers";
import ActiveLink from "../ui/ActiveLink";
import SearchHeader from "../shared/SearchHeader/SearchHeader";
import { AiOutlineHeart } from "react-icons/ai";
import { getLikes } from "@/service/useLike";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [likedCount, setLikedCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const likes = getLikes();
    setLikedCount(likes.length);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const bottomItemClass = (href: string) =>
    [
      "flex-1 min-w-0",
      "flex flex-col items-center justify-center gap-1",
      "py-2 rounded-xl transition",
      isActive(href)
        ? "bg-white/5 text-white ring-1 ring-white/15"
        : "text-gray-200 hover:bg-white/5",
    ].join(" ");

  const bottomIconClass = (href: string) =>
    isActive(href) ? "text-lime-400" : "text-gray-200";

  return (
    <>
      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 bg-[linear-gradient(180deg,#121417_0px,#0e1012_32px,#0b0c0e_64px)] backdrop-blur">
        <Containers className="px-0">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* LEFT: logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-white text-lg font-semibold">
                  freekino<span className="text-lime-400">.net</span>
                </span>
              </Link>
            </div>

            {/* CENTER: search (md+) */}
            <div className="hidden md:flex flex-1 px-4">
              <SearchHeader />
            </div>

            {/* RIGHT: nav (md+) */}
            <nav className="hidden md:flex items-center gap-3">
              <ActiveLink href="/" exact>
                <Home size={16} />
                <span className="text-sm">Bosh sahifa</span>
              </ActiveLink>
              <ActiveLink href="/movies">
                <Film size={16} />
                <span className="text-sm">Kino</span>
              </ActiveLink>
              <ActiveLink href="/cartoons">
                <Film size={16} />
                <span className="text-sm">Multfilm</span>
              </ActiveLink>
              <ActiveLink
                href="/movies/like"
                className="relative inline-flex items-center gap-1"
              >
                <AiOutlineHeart size={24} className="text-white" />
                <span className="text-sm text-white">Sevimlilar</span>

                {/* Badge */}
                {likedCount > 0 && (
                  <span
                    className="
                      absolute top-1 left-3 
                      bg-white text-[black] text-[8px] 
                      font-bold w-3 h-3 flex items-center justify-center 
                      rounded-full
                    "
                  >
                    {likedCount}
                  </span>
                )}
              </ActiveLink>
            </nav>

            {/* THEME BUTTON */}
            <div className="flex items-center">
              <button
                onClick={() => setIsDark((s) => !s)}
                className="rounded-full p-2 hover:bg-white/5 text-gray-200"
                title="Toggle theme"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </Containers>
      </header>

      {/* BOTTOM HEADER (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-0 py-2 left-0 right-0 z-50 border-t border-white/10 bg-[linear-gradient(180deg,#121417_0px,#0e1012_32px,#0b0c0e_64px)] backdrop-blur">
        <div className="grid grid-cols-5 h-14">
          <Link href="/" className={bottomItemClass("/")}>
            <Home size={20} className={bottomIconClass("/")} />
            <span className="text-[11px]">Home</span>
          </Link>

          <Link href="/search" className={bottomItemClass("/search")}>
            <Search size={20} className={bottomIconClass("/search")} />
            <span className="text-[11px]">Qidiruv</span>
          </Link>

          <Link href="/movies" className={bottomItemClass("/movies")}>
            <Film size={20} className={bottomIconClass("/movies")} />
            <span className="text-[11px]">Kino</span>
          </Link>

          <Link href="/cartoons" className={bottomItemClass("/cartoons")}>
            <Film size={20} className={bottomIconClass("/cartoons")} />
            <span className="text-[11px]">Mult</span>
          </Link>

          <Link
            href="/movies/like"
            className={bottomItemClass("/movies/like") + " relative"}
          >
            <AiOutlineHeart
              size={22}
              className={bottomIconClass("/movies/like")}
            />
            <span className="text-[11px]">Sevimlilar</span>

            {likedCount > 0 && (
              <span
                className="
            absolute -top-1 right-3
            bg-lime-400 text-black text-[9px]
            font-bold min-w-[16px] h-4 px-1
            flex items-center justify-center
            rounded-full
          "
              >
                {likedCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* spacer */}
      <div className="md:hidden h-14" />
    </>
  );
}
