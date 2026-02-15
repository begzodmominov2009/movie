import { DEMO_RECOMMENDED } from "./MovieSingleUtils";

export default function RecommendedSidebar() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="p-4 font-semibold flex items-center gap-2">
        ✨ Tavsiyalar
      </div>

      <div className="px-3 pb-3 space-y-3">
        {DEMO_RECOMMENDED.map((r) => (
          <a
            key={r.id}
            href="#"
            className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 hover:bg-black/35 transition p-3"
          >
            <div className="h-16 w-12 rounded-xl overflow-hidden bg-white/10 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.poster}
                alt={r.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">{r.title}</div>
              <div className="text-xs text-white/60 mt-1">
                {r.year} • {r.minutes} daq
              </div>
              <div className="mt-2 inline-flex rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-[11px] text-white/75">
                {r.tag}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
