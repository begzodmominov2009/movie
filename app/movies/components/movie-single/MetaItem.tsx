export default function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-white">{icon}</span>
      <span className="text-white">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}
