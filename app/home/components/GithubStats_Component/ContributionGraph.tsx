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
        <p className="text-[11px] text-zinc-500 dark:text-white/60 text-center mb-2">
          Monthly contributions Github
        </p>

        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} stroke="#888" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11, fill: "#888" }} 
                axisLine={{ stroke: '#888', opacity: 0.2 }}
                tickLine={{ stroke: '#888', opacity: 0.2 }}
              />
              <YAxis 
                tick={{ fontSize: 11, fill: "#888" }} 
                axisLine={{ stroke: '#888', opacity: 0.2 }}
                tickLine={{ stroke: '#888', opacity: 0.2 }}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.8)", 
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  color: "#08152F"
                }}
                itemStyle={{ color: "#08152F" }}
                labelStyle={{ color: "#08152F", fontWeight: "bold" }}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#3b82f6"
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
