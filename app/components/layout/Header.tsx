"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Home,
  Film,
  Tv,
  Moon,
  Sun,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import Containers from "../ui/Containers";
import ActiveLink from "../ui/ActiveLink";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#121417] via-[#0e1012] to-[#0b0c0e] dark:bg-[#0B0B0D] backdrop-blur-sm">
      <Containers>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* LEFT: logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-white text-lg font-semibold">
                freekino<span className="text-lime-400">.net</span>
              </span>
            </Link>
          </div>

          {/* CENTER: search bar */}
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-2xl">
              <form className="relative">
                <input
                  aria-label="Qidirish"
                  placeholder="Qidirish..."
                  className="w-full rounded-full bg-[#161616]/80 dark:bg-[#1A1A1A] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#2b2b2b] px-4 py-2 pl-12 text-sm text-gray-200 placeholder:text-gray-400 transition"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={16} />
                </div>
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 shadow-sm px-3 py-1.5">
                  Qidirish
                </Button>
              </form>
            </div>
          </div>

          {/* RIGHT: nav + actions */}
          <nav className="hidden md:flex items-center gap-3">
            <ActiveLink href="/" exact>
              <Home size={16} />
              <span className="text-sm">Bosh sahifa</span>
            </ActiveLink>

            <ActiveLink href="/movies">
              <Film size={16} />
              <span className="text-sm">Kino</span>
            </ActiveLink>

            <ActiveLink href="/serials">
              <Tv size={16} />
              <span className="text-sm">Serial</span>
            </ActiveLink>

            <ActiveLink href="/cartoons">
              <Film size={16} />
              <span className="text-sm">Multfilm</span>
            </ActiveLink>
          </nav>

          {/* MOBILE: menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark((s) => !s)}
              className="rounded-full p-2 hover:bg-white/5 text-gray-200"
              title="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setOpenMobile((s) => !s)}
              className="rounded-md p-2 hover:bg-white/5 text-gray-200"
              aria-label="menu"
            >
              {openMobile ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Containers>

      {/* MOBILE MENU */}
      {openMobile && (
        <div className="md:hidden border-t border-white/5 bg-[#0B0B0D]">
          <div className="mx-auto max-w-[1280px] px-4 py-3 flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-gray-200"
            >
              <Home size={16} /> Bosh sahifa
            </Link>
            <Link
              href="/kino"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-gray-200"
            >
              <Film size={16} /> Kino
            </Link>
            <Link
              href="/serial"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-gray-200"
            >
              <Tv size={16} /> Serial
            </Link>
            <Link
              href="/multfilm"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-gray-200"
            >
              <Film size={16} /> Multfilm
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
