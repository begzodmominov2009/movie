"use client";

import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function ActionsClient({
  trailerUrl,
}: {
  trailerUrl?: string | null;
}) {
  const [up, setUp] = useState(14);
  const [down, setDown] = useState(1);

  return (
    <div className="p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setUp((v) => v + 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm"
        >
          <FaThumbsUp />
          <span>{up}</span>
        </button>

        <button
          onClick={() => setDown((v) => v + 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm"
        >
          <FaThumbsDown />
          <span>{down}</span>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={trailerUrl || "#"}
          className={[
            "inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm",
            "bg-black/25 hover:bg-black/35 transition",
            !trailerUrl ? "opacity-50 pointer-events-none" : "",
          ].join(" ")}
        >
          Treyler
        </a>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm bg-black/25 hover:bg-black/35 transition"
        >
          Yuklab olish
        </a>
      </div>
    </div>
  );
}
