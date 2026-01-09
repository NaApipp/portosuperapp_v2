"use client"

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

  return Object.entries(map)
    .map(([month, total]) => ({ month, total }))
    .sort((a, b) => a.month.localeCompare(b.month)); // penting!
}


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function ContributionGraph({ weeks }: { weeks: Week[] }) {
  const monthlyData = aggregateMonthly(weeks);
  const maxMonthly = Math.max(...monthlyData.map((m) => m.total));

  return (
    <div className="mt-4">
      
      {/* Per Month */}
      <div className="mt-6">
        <p className="text-[11px] text-white/60 text-center mb-2">
          Monthly contributions Github
        </p>

        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "rgba(255,255,255,0.6)" }} />
              <YAxis tick={{ fontSize: 11, fill: "rgba(255,255,255,0.6)" }} />
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid rgba(255,255,255,0.15)" }}
                labelStyle={{ color: "rgba(255,255,255,0.8)" }}
              />
              <Line
                type="monotone"
                dataKey="total"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
