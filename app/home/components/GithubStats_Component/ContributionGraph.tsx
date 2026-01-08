type Day = {
  date: string;
  contributionCount: number;
  color: string;
};

type Week = {
  contributionDays: Day[];
};

type MonthlyContribution = {
  month: string;
  total: number;
};

function aggregateMonthly(weeks: Week[]): MonthlyContribution[] {
  const map: Record<string, number> = {};

  weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      const monthKey = day.date.slice(0, 7); // YYYY-MM
      map[monthKey] = (map[monthKey] || 0) + day.contributionCount;
    });
  });

  return Object.entries(map).map(([month, total]) => ({
    month,
    total,
  }));
}

export default function ContributionGraph({ weeks }: { weeks: Week[] }) {
  const monthlyData = aggregateMonthly(weeks);
  const maxMonthly = Math.max(...monthlyData.map((m) => m.total));

  return (
    <div className="mt-4">
      <div
        className="grid items-center justify-center gap-[2px]"
        style={{ gridTemplateColumns: "repeat(53, 11px)" }}
      >
        {weeks.map((week) =>
          week.contributionDays.map((day) => (
            <div
              key={day.date}
              title={`${day.contributionCount} contributions`}
              className="rounded-[2px]"
              style={{
                width: 11,
                height: 11,
                backgroundColor: day.color,
              }}
            />
          ))
        )}
      </div>

      <div className="flex justify-center items-center text-[11px] text-white/50 mt-2">
        <span>Less </span>
        <span> | | </span>
        <span> More</span>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-[11px] text-white/60 text-center">
          Monthly contributions (aggregated)
        </p>

        {monthlyData.map((item) => (
          <div key={item.month}>
            <div className="flex justify-between text-[11px] text-white/70">
              <span>{item.month}</span>
              <span>{item.total}</span>
            </div>

            <div className="h-[6px] bg-white/10 rounded mt-[2px]">
              <div
                className="h-full rounded bg-green-500"
                style={{
                  width: `${(item.total / maxMonthly) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
