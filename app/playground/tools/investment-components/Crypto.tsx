"use client";

import { useEffect, useState } from "react";
import { Coins } from "lucide-react";

export default function Crypto() {
  const [timeFrame, setTimeFrame] = useState("12M");

  useEffect(() => {
    // Load TradingView widget script if it hasn't been loaded yet
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src = "https://widgets.tradingview-widget.com/w/id/tv-mini-chart.js";
      script.type = "module";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const assets_crypto = [
    { symbol: "BINANCE:BTCUSD", name: "Bitcoin" },
    { symbol: "BINANCE:ETHUSD", name: "Ethereum" },
    { symbol: "BINANCE:SOLUSD", name: "Solana" },
    { symbol: "BINANCE:XRPUSD", name: "XRP" },
    { symbol: "TVC:SILVER", name: "Silver" },
    { symbol: "OANDA:XAUUSD", name: "Gold" },
  ];

  const timeFrames = [
    { label: "1D", value: "1D" },
    { label: "5D", value: "5D" },
    { label: "1M", value: "1M" },
    { label: "3M", value: "3M" },
    { label: "12M", value: "12M" },
    { label: "60M", value: "60M" },
    { label: "ALL", value: "ALL" },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Coins className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Investments</h2>
            <p className="text-xs text-zinc-500 font-medium">Real-time Global Assets</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900/50 p-1 rounded-xl border border-zinc-800/50 backdrop-blur-sm overflow-x-auto scrollbar-hide">
            {timeFrames.map((tf) => (
              <button
                key={tf.value}
                onClick={() => setTimeFrame(tf.value)}
                className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all whitespace-nowrap ${
                  timeFrame === tf.value
                    ? "bg-zinc-100 text-black shadow-xl scale-105"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets_crypto.map((asset) => (
          <div 
            key={asset.symbol + timeFrame} 
            className="group bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-5 hover:border-zinc-700 transition-all shadow-2xl overflow-hidden relative"
          >
             {/* Subtle Header */}
             <div className="flex items-center justify-between relative z-10 mb-4 px-1">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{asset.name}</span>
              <span className="text-[10px] text-zinc-700 font-mono tracking-tighter">{asset.symbol}</span>
            </div>

            <div className="h-[220px] w-full overflow-hidden rounded-xl relative z-10">
              {/* @ts-ignore */}
              <tv-mini-chart
                symbol={asset.symbol} 
                theme="dark" 
                width="100%" 
                height="220"
                locale="en"
                date-range={timeFrame}
                trend-line-color="#3b82f6"
                under-line-color="rgba(59, 130, 246, 0.1)"
                under-line-bottom-color="rgba(59, 130, 246, 0)"
              />
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
