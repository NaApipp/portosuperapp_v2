"use client";

import { useEffect, useState } from "react";
import { 
  MapPin, 
  ChevronRight, 
  Navigation, 
  Map, 
  Home as HomeIcon, 
  Hash,
  Loader2,
  CheckCircle2,
  Building
} from "lucide-react";

export default function KodePos() {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  const [loading, setLoading] = useState({
    provinces: false,
    cities: false,
    districts: false,
    villages: false,
    kodepos: false
  });

  const [kodepos, setKodepos] = useState("");

  // Load provinces
  useEffect(() => {
    setLoading(prev => ({ ...prev, provinces: true }));
    fetch("/api/postal-code/provinces")
      .then((res) => res.json())
      .then(data => {
        setProvinces(data);
        setLoading(prev => ({ ...prev, provinces: false }));
      });
  }, []);

  // Load cities
  useEffect(() => {
    if (!selectedProvince) return;

    setLoading(prev => ({ ...prev, cities: true }));
    fetch(`/api/postal-code/cities?provinceId=${selectedProvince}`)
      .then((res) => res.json())
      .then(data => {
        setCities(data);
        setLoading(prev => ({ ...prev, cities: false }));
      });

    setDistricts([]);
    setVillages([]);
    setSelectedCity("");
    setSelectedDistrict("");
    setSelectedVillage("");
    setKodepos("");
  }, [selectedProvince]);

  // Load districts
  useEffect(() => {
    if (!selectedCity) return;

    setLoading(prev => ({ ...prev, districts: true }));
    fetch(`/api/postal-code/districts?cityId=${selectedCity}`)
      .then((res) => res.json())
      .then(data => {
        setDistricts(data);
        setLoading(prev => ({ ...prev, districts: false }));
      });

    setVillages([]);
    setSelectedDistrict("");
    setSelectedVillage("");
    setKodepos("");
  }, [selectedCity]);

  // Load villages
  useEffect(() => {
    if (!selectedDistrict) return;

    setLoading(prev => ({ ...prev, villages: true }));
    fetch(`/api/postal-code/vilages?districtId=${selectedDistrict}`)
      .then((res) => res.json())
      .then(data => {
        setVillages(data);
        setLoading(prev => ({ ...prev, villages: false }));
      });
    
    setSelectedVillage("");
    setKodepos("");
  }, [selectedDistrict]);

  // Get kodepos
  useEffect(() => {
    if (!selectedVillage) return;

    setLoading(prev => ({ ...prev, kodepos: true }));
    fetch(`/api/postal-code/kode-pos?village=${selectedVillage}`)
      .then((res) => res.json())
      .then((data) => {
        setKodepos(data.kode_pos || "-");
        setLoading(prev => ({ ...prev, kodepos: false }));
      });
  }, [selectedVillage]);

  return (
    <div className="py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center justify-center gap-3 italic">
            FIND POSTAL CODE
          </h2>
          <p className="text-gray-400 text-sm">Select location details to find the specific area code</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Timeline Connector (Visual Only for md+ screens) */}
          <div className="hidden md:absolute md:block left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2" />

          {/* Provinsi */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00BCFF] group-focus-within:text-white transition-colors">
              <Map className="w-3.5 h-3.5" />
              Province
            </label>
            <div className="relative">
              <select 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00BCFF]/50 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pr-10"
                onChange={(e) => setSelectedProvince(e.target.value)}
                value={selectedProvince}
                disabled={loading.provinces}
              >
                <option value="" className="bg-[#1a1a1a]">Pilih Provinsi</option>
                {provinces.map((p: any) => (
                  <option key={p.id} value={p.id} className="bg-[#1a1a1a]">
                    {p.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {loading.provinces ? <Loader2 className="w-4 h-4 animate-spin text-[#00BCFF]" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </div>
          </div>

          {/* Kota */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00BCFF] group-focus-within:text-white transition-colors">
              <Navigation className="w-3.5 h-3.5" />
              City
            </label>
            <div className="relative">
              <select 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00BCFF]/50 transition-all cursor-pointer disabled:opacity-30 disabled:grayscale pr-10"
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
                disabled={!selectedProvince || loading.cities}
              >
                <option value="" className="bg-[#1a1a1a]">Pilih Kota / Kabupaten</option>
                {cities.map((c: any) => (
                  <option key={c.id} value={c.id} className="bg-[#1a1a1a]">
                    {c.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {loading.cities ? <Loader2 className="w-4 h-4 animate-spin text-[#00BCFF]" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </div>
          </div>

          {/* Kecamatan */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00BCFF] group-focus-within:text-white transition-colors">
              <Building className="w-3.5 h-3.5" />
              District
            </label>
            <div className="relative">
              <select 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00BCFF]/50 transition-all cursor-pointer disabled:opacity-30 disabled:grayscale pr-10"
                onChange={(e) => setSelectedDistrict(e.target.value)}
                value={selectedDistrict}
                disabled={!selectedCity || loading.districts}
              >
                <option value="" className="bg-[#1a1a1a]">Pilih Kecamatan</option>
                {districts.map((d: any) => (
                  <option key={d.id} value={d.id} className="bg-[#1a1a1a]">
                    {d.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {loading.districts ? <Loader2 className="w-4 h-4 animate-spin text-[#00BCFF]" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </div>
          </div>

          {/* Kelurahan */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00BCFF] group-focus-within:text-white transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              Village
            </label>
            <div className="relative">
              <select 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00BCFF]/50 transition-all cursor-pointer disabled:opacity-30 disabled:grayscale pr-10"
                onChange={(e) => setSelectedVillage(e.target.value)}
                value={selectedVillage}
                disabled={!selectedDistrict || loading.villages}
              >
                <option value="" className="bg-[#1a1a1a]">Pilih Kelurahan</option>
                {villages.map((v: any) => (
                  <option key={v.id} value={v.name} className="bg-[#1a1a1a]">
                    {v.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {loading.villages ? <Loader2 className="w-4 h-4 animate-spin text-[#00BCFF]" /> : <ChevronRight className="w-4 h-4" />}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col items-center">
            {kodepos ? (
                <div className="group animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500 animate-pulse" />
                        Result Found
                    </span>
                    <div className="relative group overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-[#00BCFF] rounded-2xl blur opacity-25 group-hover:opacity-50 group-hover:rounded-3xl transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative flex items-center gap-4 px-8 py-4">
                            <Hash className="w-6 h-6 text-[#00BCFF]" />
                            <span className="text-5xl font-black text-white tracking-widest">
                                {loading.kodepos ? (
                                    <Loader2 className="w-10 h-10 animate-spin text-[#00BCFF]" />
                                ) : (
                                    kodepos
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center text-gray-600 italic">
                    <Hash className="w-8 h-8 opacity-20 mb-2" />
                    <p className="text-xs uppercase tracking-[0.2em]">Select location to generate code</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

