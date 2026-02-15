export type DurationFormat = "text" | "clock";

export function formatDuration(
  minutes?: number | null,
  format: DurationFormat = "text",
) {
  const m = Number(minutes);
  if (!Number.isFinite(m) || m <= 0) return "—";

  const h = Math.floor(m / 60);
  const mm = m % 60;

  if (format === "clock") {
    // 2:05 format
    return h > 0
      ? `${h}:${String(mm).padStart(2, "0")}`
      : `0:${String(mm).padStart(2, "0")}`;
  }

  // text format: "2 soat 5 min"
  if (h === 0) return `${mm} min`;
  if (mm === 0) return `${h} soat`;
  return `${h} soat ${mm} min`;
}
