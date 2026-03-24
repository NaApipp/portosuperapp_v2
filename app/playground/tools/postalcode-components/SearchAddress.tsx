"use client";

import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Hash, 
  Loader2, 
  Navigation,
  Building,
  Home as HomeIcon,
  ChevronRight
} from "lucide-react";

export default function SearchAddress() {
  const [kodepos, setKodepos] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!kodepos) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/postal-code/search-address?kodepos=${kodepos}`,
      );
      const data = await res.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Search failed", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center justify-center gap-3 italic">
            SEARCH BY POSTAL CODE
          </h2>
          <p className="text-gray-400 text-sm">Enter a postal code to find associated addresses</p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00BCFF] transition-colors">
              <Hash className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Masukkan kode pos..."
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00BCFF]/50 transition-all font-mono text-xl tracking-widest"
              value={kodepos}
              onChange={(e) => setKodepos(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button 
            onClick={handleSearch}
            disabled={loading || !kodepos}
            className="h-14 px-8 rounded-2xl bg-[#00BCFF] hover:bg-[#0099ff] text-black font-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:grayscale active:scale-95 shadow-[0_0_20px_-5px_rgba(0,188,255,0.5)]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            SEARCH
          </button>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="flex flex-col items-center py-12 text-gray-500 space-y-4">
              <Loader2 className="w-10 h-10 animate-spin text-[#00BCFF]" />
              <p className="text-xs uppercase tracking-widest font-bold">Fetching addresses...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2 italic">
                Found {results.length} results
              </p>
              {results.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#00BCFF]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                          <HomeIcon className="w-4 h-4 text-[#00BCFF]" />
                          <span className="text-xl font-black text-white">{item.village}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Building className="w-3 h-3" />
                            <span className="font-medium">{item.district}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Navigation className="w-3 h-3" />
                            <span className="font-medium">{item.city}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400 sm:col-span-2">
                            <MapPin className="w-3 h-3" />
                            <span className="font-medium">{item.province}</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : !loading && kodepos && results.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-gray-600 italic">
              <Search className="w-8 h-8 opacity-20 mb-2" />
              <p className="text-xs uppercase tracking-[0.2em]">No results found for {kodepos}</p>
            </div>
          ) : (
             <div className="flex flex-col items-center py-12 text-gray-600 italic">
              <MapPin className="w-8 h-8 opacity-20 mb-2" />
              <p className="text-xs uppercase tracking-[0.2em]">Enter a code to start searching</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
