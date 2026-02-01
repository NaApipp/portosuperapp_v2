// app/(protected)/dashboard/page.tsx
"use client";

import { useAuth } from "../authProvider";

import MessagesPage from "./components/messages";
import Navbar from "../components/navbar";

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) return <div style={{ padding: 24 }}>Loading...</div>;




  return (
    <>
      <div className="bg-gradient-to-br from-[#0F2854] to-[#1C4D8D]">
        <Navbar />
        <div className="pt-20 px-4 max-w-screen-xl mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">SuperApps Dashboard</h1>
          <p className="mb-4">
            Welcome Back Boss, <b>{user?.username}</b>
          </p>
        </div>

        
        <hr style={{ margin: "20px 0" }} className="pl-3" />
        {/* Message Section */}
        <h2 className="mb-5 text-center font-bold text-3xl">Messages</h2>
        <MessagesPage />
      </div>
    </>
    // <div style={{ padding: 24, fontFamily: "system-ui" }}>
    //   <h1>Dashboard</h1>
    //   <p>
    //     Login sebagai: <b>{user?.username}</b> ({user?.role})
    //   </p>

    //   <button onClick={logout} style={{ marginTop: 12 }}>
    //     Logout
    //   </button>

    //   <hr style={{ margin: "20px 0" }} />
    //   <p>
    //     Kamu akan logout otomatis kalau idle 15 menit, atau kalau tab ini ditutup
    //     (karena token disimpan di sessionStorage).
    //   </p>

    // </div>
  );
}
