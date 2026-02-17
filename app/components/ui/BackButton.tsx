"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  label = "",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={[
        "group inline-flex items-center gap-2",
        "rounded-full px-2 py-1",
        "bg-white/[0.05] border border-white/10",
        "text-white/80 hover:text-white",
        "hover:bg-white/[0.08] hover:border-white/20",
        "transition-all duration-300 flex items-center cursor-pointer justify-center",
        "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      <ArrowLeft
        size={18}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      {/* <span className="text-sm font-medium">{label}</span> */}
    </button>
  );
}
