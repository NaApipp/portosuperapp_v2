type StatCardProps = {
  title: string;
  value: number;
  subtitle: string;
  color: string;
};

export default function StatCard({ title, value, subtitle, color }: StatCardProps) {
  return (
    <div className="group p-6 rounded-2xl border border-text-secondary/10 bg-thirdary/10 hover:bg-thirdary/30 hover:border-text-primary/30 transition-all duration-300 hover:-translate-y-1">
      <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-3">{title}</p>
      <div className="text-4xl font-black text-text-primary tracking-tight mb-1">{value}</div>
      <p className="text-sm font-medium text-text-secondary">{subtitle}</p>
      <div className="mt-4 h-[2px] w-full bg-text-secondary/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${Math.min(100, value * 10)}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
