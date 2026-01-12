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
    <div className="grid grid-cols-3 gap-2">
        {items.map((m) => (
          <div key={m._id} className="bg-red-400 p-4 mb-4 rounded-md border border-red-200">
            <p>Nama Pengirim: <span className="data">{m.email}</span></p>
            <p>Pesan: <span className="data">{m.message}</span></p>
            <p>Waktu: <span className="data">{m.message_date}</span></p>
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