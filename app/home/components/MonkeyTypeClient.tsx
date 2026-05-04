"use client";

import { motion } from "framer-motion";
import { PersonalBest } from "../../types/monkeytype";

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function StatCard({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`
        group relative overflow-hidden rounded-2xl border transition-all duration-500
        ${highlight 
          ? "border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]" 
          : "border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/[0.08] hover:border-blue-500/20 dark:hover:border-white/10"
        }
        p-5
      `}
    >
      {/* Dynamic Glow */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
      
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400/70 transition-colors">
        {label}
      </p>
      
      <div className="mt-3 flex items-baseline gap-1">
        <p className={`text-3xl font-black tracking-tight ${highlight ? "text-blue-600 dark:text-blue-400" : "text-zinc-900 dark:text-white"}`}>
          {value}
        </p>
      </div>
      
      <p className="mt-2 text-[9px] font-semibold text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors uppercase tracking-wider">
        {sub}
      </p>
    </motion.div>
  );
}

interface MonkeyTypeClientProps {
  data: any;
  pbs: {
    pb15: PersonalBest | null;
    pb30: PersonalBest | null;
    pb60: PersonalBest | null;
  };
  bestOverall: PersonalBest | null;
}

export default function MonkeyTypeClient({ data, pbs, bestOverall }: MonkeyTypeClientProps) {
  const { pb15, pb30, pb60 } = pbs;

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-10"
    >
      {/* Premium Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
            <div className="relative p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <span className="text-blue-500 dark:text-blue-400 text-2xl leading-none">⌨️</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Typing Metrics</h3>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[8px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Live</span>
            </div>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">Real-time performance from MonkeyType</p>
          </div>
        </div>
        <a
          href="https://monkeytype.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-5 py-2.5 rounded-2xl overflow-hidden transition-all"
        >
          <div className="absolute inset-0 bg-zinc-100 dark:bg-white/[0.03] group-hover:bg-zinc-200 dark:group-hover:bg-white/[0.08] transition-colors" />
          <div className="absolute inset-0 border border-zinc-200 dark:border-white/10 group-hover:border-zinc-300 dark:group-hover:border-white/20 transition-colors" />
          <span className="relative flex items-center gap-2 text-[10px] font-black text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white uppercase tracking-[0.2em]">
            Profile Details
            <span className="text-zinc-400 dark:text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </span>
        </a>
      </motion.div>

      {/* Ultimate PB Hero */}
      {bestOverall && (
        <motion.div 
          variants={itemVariants}
          className="relative group rounded-[2.5rem] border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/40 p-10 md:p-12 overflow-hidden shadow-xl dark:shadow-2xl backdrop-blur-sm"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full group-hover:bg-blue-500/20 dark:group-hover:bg-blue-600/15 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 dark:group-hover:bg-indigo-600/15 transition-colors duration-700" />
          
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="h-2 w-2 rounded-full bg-blue-500" 
                />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em]">Personal Record</span>
              </div>
              <div className="flex items-start gap-4">
                <motion.span 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="text-8xl md:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.8] drop-shadow-sm dark:drop-shadow-2xl"
                >
                  {bestOverall.wpm.toFixed(0)}
                </motion.span>
                <div className="pt-2">
                  <p className="text-2xl font-black text-blue-600/30 dark:text-blue-500/40 uppercase tracking-widest leading-none">WPM</p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-2 h-1 bg-blue-500/20 rounded-full" 
                  />
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium max-w-sm leading-relaxed">
                Mastered in <span className="text-zinc-900 dark:text-white font-bold">{bestOverall.language}</span> with a raw speed of <span className="text-blue-600 dark:text-blue-400 font-bold">{bestOverall.raw.toFixed(0)} WPM</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:border-l border-zinc-100 dark:border-white/5 lg:pl-12 py-4">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em]">Accuracy</p>
                <p className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">{bestOverall.acc.toFixed(1)}<span className="text-blue-600/30 dark:text-blue-500/40 text-xl">%</span></p>
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bestOverall.acc}%` }}
                    transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-blue-500 dark:bg-blue-500/50 rounded-full" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em]">Consistency</p>
                <p className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">{bestOverall.consistency.toFixed(1)}<span className="text-blue-600/30 dark:text-blue-500/40 text-xl">%</span></p>
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bestOverall.consistency}%` }}
                    transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-indigo-500 dark:bg-indigo-500/50 rounded-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
        {/* Modes breakdown */}
        <div className="xl:col-span-3 space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3 pl-1">
            <h4 className="text-[10px] font-black text-zinc-400 dark:text-zinc-400 uppercase tracking-[0.4em]">Time Capsules</h4>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/5" />
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "15s", pb: pb15, color: "from-blue-500/20" },
              { label: "30s", pb: pb30, color: "from-indigo-500/20" },
              { label: "60s", pb: pb60, color: "from-purple-500/20" },
            ].map(({ label, pb, color }, idx) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.05] hover:border-blue-500/20 dark:hover:border-white/10 shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative">
                  <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-white transition-colors uppercase tracking-[0.2em]">{label}</p>
                  <p className="text-3xl font-black text-zinc-900 dark:text-white mt-2 tracking-tight">
                    {pb ? pb.wpm.toFixed(0) : "—"}
                  </p>
                  <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-blue-600/60 dark:group-hover:text-blue-400/60 transition-colors uppercase mt-1">words / min</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Progress */}
        <div className="xl:col-span-2 space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3 pl-1">
            <h4 className="text-[10px] font-black text-zinc-400 dark:text-zinc-400 uppercase tracking-[0.4em]">Endurance</h4>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/5" />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              label="Tests"
              value={data.completedTests.toLocaleString()}
              sub="Completed"
            />
            <StatCard
              label="Typing"
              value={formatTime(data.timeTyping)}
              sub="Total Time"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
