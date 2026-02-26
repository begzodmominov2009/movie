"use client";
import Link from "next/link";
import Containers from "../ui/Containers";
import YearMovie from "../shared/YearMovie/yearMovie";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#121417] via-[#0e1012] to-[#0b0c0e]">
      <Containers>
        {/* Top */}
        <div className="flex flex-col gap-10 py-14 lg:flex-row lg:justify-between">
          {/* Left: logo + text */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2">
              <div className="text-[34px] font-extrabold leading-none tracking-tight">
                <span className="text-white">free</span>
                <span className="text-[#9dfc2b]">kino</span>
                <span className="ml-1 rounded-md bg-[#9dfc2b] px-2 py-0.5 text-[18px] font-extrabold text-black align-middle">
                  net
                </span>
              </div>
            </div>

            <p className="mt-7 max-w-[520px] text-[14px] leading-7 text-white/55">
              Filmlarga bo&apos;lgan huquq ularning mualliflariga tegishli.
              Barcha filmlar faqat ma&apos;lumot olish uchun mo&apos;ljallangan.
              <br />
              Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun
              ma&apos;muryat javobgar emas! Har qanday film mualliflik huquqi
              egasining iltimosiga binoan olib tashlanadi.
            </p>
          </div>

          {/* Right: columns */}
          {/* Right: columns */}
          <div className="flex flex-col gap-35 sm:flex-row sm:justify-between flex-1">
            {/* Column 2: YearMovie */}
            <div className="flex-1">
              <YearMovie />
            </div>

            {/* Column 3: Contact */}
            <div className="flex-1">
              <h4 className="text-[15px] font-semibold text-white/85">
                Aloqa / Contact
              </h4>
              <div className="mt-7 space-y-2 text-[14px] text-white/55">
                <Link href="#" className="block hover:text-white/80 transition">
                  Telegram
                </Link>
                <Link href="#" className="block hover:text-white/80 transition">
                  DMCA
                </Link>
                <Link href="#" className="block hover:text-white/80 transition">
                  Правообладателям
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2021-2026 Freekino.net — Barcha huquqlar himoyalangan.</div>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white/70 transition">
              Foydalanish shartlari
            </Link>
            <Link href="#" className="hover:text-white/70 transition">
              Maqolalar / Reklama
            </Link>
          </div>
        </div>
      </Containers>
    </footer>
  );
}
