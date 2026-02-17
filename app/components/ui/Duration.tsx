type Props = {
  minutes?: number | null;
  variant?: "text" | "clock";
  className?: string;
  fallback?: string;
};

export default function Duration({
  minutes,
  variant = "text",
  className = "",
  fallback = "—",
}: Props) {
  const m = Number(minutes);
  if (!Number.isFinite(m) || m <= 0)
    return <span className={className}>{fallback}</span>;

  const h = Math.floor(m / 60);
  const mm = m % 60;

  let out = fallback;

  if (variant === "clock") {
    out =
      h > 0
        ? `${h}:${String(mm).padStart(2, "0")}`
        : `0:${String(mm).padStart(2, "0")}`;
  } else {
    if (h === 0) out = `${mm} min`;
    else if (mm === 0) out = `${h} soat`;
    else out = `${h} soat ${mm} min`;
  }

  return <span className={className}>{out}</span>;
}
