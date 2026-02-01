"use client";

import { useEffect, useState } from "react";

type Msg = {
  _id: string;
  email: string;
  name: string;
  message: string;
  message_date: string; // kalau Date di DB, biasanya terkirim sebagai ISO string
};

export default function MessagesPage() {
  const [items, setItems] = useState<Msg[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);

  async function loadMore(isFirst = false) {
    if (loading) return;
    setLoading(true);

    const params = new URLSearchParams({ limit: "9" });
    if (!isFirst && cursor) params.set("cursor", cursor);

    const res = await fetch(`/api/get-messasge?${params.toString()}`, { cache: "no-store" });
    const json = await res.json();

    setItems((prev) => (isFirst ? json.data : [...prev, ...json.data]));
    setCursor(json.nextCursor);
    setHasNext(json.hasNext);
    setLoading(false);
  }

  useEffect(() => {
    loadMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-message">
        {items.map((m) => (
<div key={m._id} className="bg-gray-900 w-max h-64 rounded-lg p-3">
    <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
    <p className="font-bold ">Nama : <span className="data-message">{m.name}</span></p>
    <p className="font-bold ">Email: <span className="data-message">{m.email}</span></p>
    <p className="font-bold ">Pesan: <span className="data-message">{m.message}</span></p>
    <p className="font-bold ">Waktu: <span className="data-message">{m.message_date}</span></p>
  </div>
</div>
        ))}
      {/* {hasNext && (
        <button className="button-load text-white" onClick={() => loadMore(false)} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )} */}
    </div>
  );
}