export default function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-white/70">{icon}</span>
      <span className="text-white/60">{label}</span>
      <span className="text-white/90 font-semibold">{value}</span>
    </div>
  );
}
