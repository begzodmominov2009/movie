export default function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-white/60">{label}</div>
      <div className="text-white/85">{value}</div>
    </div>
  );
}
