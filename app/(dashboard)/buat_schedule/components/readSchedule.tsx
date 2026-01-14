"use client";

import { useEffect, useState } from "react";

type Schedule = {
  _id: string;
  schedule_name: string;
  schedule_description: string;
  date: string;
  jam: string;
};

export default function ReadSchedule() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    async function fetchSchedules() {
      const res = await fetch("/api/schedule/", { cache: "no-store" });
      const json = await res.json();
      setSchedules(json.data);
    }
    fetchSchedules();
  }, []);
  
    return (

    <>
    <div className="grid grid-cols-2">
        {schedules.map((schedule) => (
          <div key={schedule._id} className="border p-4 m-2">
            <h2>{schedule.schedule_name}</h2>
            <p>{schedule.schedule_description}</p>
            <p>{schedule.date}</p>
            <p>{schedule.jam}</p>
          </div>
        ))}
    </div>
    </>
  )
}
