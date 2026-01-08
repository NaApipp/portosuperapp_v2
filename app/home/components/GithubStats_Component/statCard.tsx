type StatCardProps = {
  title: string;
  value: number;
  subtitle: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
  color,
}: StatCardProps) {
  return (
    <div
      className="
        p-4
        rounded-xl
        bg-white/5
        backdrop-blur-md
        border border-white/10
        shadow-lg
      "
    >
      <h4 className="text-sm text-white/60">{title}</h4>

      <div className="text-2xl font-bold text-white mt-1">
        {value}
      </div>

      <p className="text-xs text-white/40 mt-1">
        {subtitle}
      </p>

      <div className="mt-3 h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(100, value * 10)}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
