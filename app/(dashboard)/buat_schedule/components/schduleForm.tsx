"use client"

import { useSchedule } from "@/app/hooks/useSchedule";

export default function AddSchdule() {

      const {
        schedule_name,
        setScheduleName,
        schedule_description,
        setScheduleDescription,
        date,
        setDate,
        jam,
        setJam,
        status,
        statusType,
        isSubmitting,
        handleSubmit,
      } = useSchedule();
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 flex flex-col gap-4 w-96">
        <h1 className="text-black text-center font-black">Buat Schedule</h1>

        {/* Judul Schedule */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">Judul Schedule</label>
          <input
            value={schedule_name}
            onChange={(e) => setScheduleName(e.target.value)}
            type="text"
            placeholder="Masukkan Judul Schedule"
            className="bg-gray-500 border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
            required
          />
        </div>

        {/* Deskripsi Schedule */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">Deskripsi Schedule</label>
          <input
            value={schedule_description}
            onChange={(e) => setScheduleDescription(e.target.value)}
            type="text"
            placeholder="Masukkan Deskripsi Schedule"
            className="bg-gray-500 border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
            required
          />
        </div>

        {/* Tanggal Pelaksanaan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">Pelaksanaan</label>
          <input
            
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Masukkan Tanggal Schedule"
            className="bg-gray-500 border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
            required
          />
        </div>

        {/* Jam Pelaksanaan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">Jam Pelaksanaan</label>
          <input
            value={jam}
            onChange={(e) => setJam(e.target.value)}
            type="time"
            placeholder="Masukkan Jam Schedule"
            className="bg-gray-500 border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
            required
          />
        </div>
        <button className="bg-amber-400 text-white rounded hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer">
          Tambah Schedule
        </button>
        {status && (
          <p className={statusType === "error" ? "text-red-500" : "text-green-500"}>
            {status}
          </p>
        )}
      </form>
    </>
  );
}
