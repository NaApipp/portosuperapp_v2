"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { authStorageKeys } from "@/app/(dashboard)/authProvider";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Login gagal");
        return;
      }

      const data = (await res.json()) as { token: string };
      sessionStorage.setItem(authStorageKeys.TOKEN_KEY, data.token);
      sessionStorage.setItem(
        authStorageKeys.LAST_ACTIVITY_KEY,
        String(Date.now()),
      );

      router.replace("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#08152F] min-h-screen flex items-center justify-center">
        {/* Container Screen */}
        <div className="">
          {/* Container 1 */}
          <div className="bg-[#102D41] m-5 rounded-2xl p-10" id="form">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Login Dashboard <br /> SuperApps
            </h2>
            <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
              <div className="flex flex-col gap-2" id="username">
                <label htmlFor="username" className="text-white">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="email-alternative"
                  className="border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
                  placeholder="username? lu kira2 aja"
                  required
                />
              </div>
              <div className="flex flex-col gap-2" id="password">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="email-alternative"
                  className="border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
                  placeholder="password? lu kira2 aja"
                  required
                />
              </div>
              <button type="submit" disabled={loading} className="btn-login">
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>

          <div id="go-home" className="flex items-center justify-center">
            <Link href={"/home"} className="btn-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house w-8 h-8"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="text-[20px] font-medium">Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
