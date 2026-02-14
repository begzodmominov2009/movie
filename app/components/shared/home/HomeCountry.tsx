"use client";

import Containers from "../../ui/Containers";
import Link from "next/link";

type CountryItem = {
  id: number;
  title: string;
  count?: string;
  flag: string;
  href: string;
};

const countries: CountryItem[] = [
  {
    id: 1,
    title: "Hindiston kinolari",
    count: "350+",
    flag: "🇮🇳",
    href: "/movie/country/india",
  },
  {
    id: 2,
    title: "AQSH kinolari",
    count: "2K+",
    flag: "🇺🇸",
    href: "/movie/country/usa",
  },
  {
    id: 3,
    title: "Turk kinolari",
    count: "300+",
    flag: "🇹🇷",
    href: "/movie/country/turkey",
  },
  {
    id: 4,
    title: "Janubiy Koreya kinolari",
    count: "200+",
    flag: "🇰🇷",
    href: "/movie/country/korea",
  },
  {
    id: 5,
    title: "AQSH seriallari",
    count: "100+",
    flag: "🇺🇸",
    href: "/serial/country/usa",
  },
  {
    id: 6,
    title: "Turk seriallari",
    count: "60+",
    flag: "🇹🇷",
    href: "/serial/country/turkey",
  },

  {
    id: 7,
    title: "Janubiy Koreya kinolari",
    count: "200+",
    flag: "🇰🇷",
    href: "/movie/country/korea",
  },

  {
    id: 8,
    title: "O'zbek tilida yangi kinolar  2025",
    count: "HD  ",
    flag: "🇰🇷",
    href: "/movie/country/korea",
  },
];

export default function HomeCountry() {
  return (
    <Containers>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white/5  my-[20px] p-[10px] rounded-[10px] ">
        {countries.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center justify-between gap-3
             hover:bg-white/10
              border border-white/10 hover:border-white/20
              rounded-xl px-4 py-3 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl text-[white] font-bold">{item.flag}</span>
              <span className="text-sm text-white">{item.title}</span>
            </div>

            {item.count && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                {item.count}
              </span>
            )}
          </Link>
        ))}
      </div>
    </Containers>
    
  );
}
