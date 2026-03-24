"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, LayoutGrid, RefreshCcw } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export default function Saham() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStocks = () => {
    setLoading(true);
    fetch("/api/saham")
      .then((res) => res.json())
      .then((data) => {
        setStocks(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 60000); // Auto refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <LayoutGrid className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Market Overview</h2>
            <p className="text-xs text-zinc-500 font-medium">Top IDX Stock Performance</p>
          </div>
        </div>
        <button 
          onClick={fetchStocks}
          disabled={loading}
          className="p-2 hover:bg-zinc-800 rounded-full transition-colors disabled:opacity-50"
        >
          <RefreshCcw className={`w-4 h-4 text-zinc-400 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading && stocks.length === 0 ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="h-32 bg-zinc-900 animate-pulse rounded-2xl border border-zinc-800" />
          ))
        ) : (
          stocks.map((stock) => {
            const isPositive = stock.change >= 0;
            return (
              <div 
                key={stock.symbol}
                className="group relative bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-5 hover:border-zinc-700 transition-all shadow-2xl overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute -right-4 -top-8 w-24 h-24 blur-[60px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-30 ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                
                <div className="flex items-start justify-between relative z-10">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white tracking-tighter">{stock.symbol}</h3>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{stock.name}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                  }`}>
                    {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>

                <div className="mt-6 space-y-0.5 relative z-10">
                  <p className="text-zinc-500 text-[10px] font-bold uppercase">Price</p>
                  <p className="text-2xl font-mono text-zinc-100 font-bold">
                    Rp {stock.price.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}