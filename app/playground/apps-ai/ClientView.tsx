// /app/tools/apps-ai/page.tsx
"use client";

import { Bot, Eraser, Loader2, Send, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AppsAiPage() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  async function send() {
    if (!msg.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: msg };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setMsg("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/apps-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Gagal mengambil respon");

      const data = await res.json();
      
      // The backend returns { reply: string, userQuestion: string }
      if (data.reply) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages([...newMessages, { role: "assistant", content: "Maaf, terjadi kesalahan pada server. Coba lagi nanti." }]);
    } finally {
      setIsLoading(false);
    }
  }

  const clearChat = () => {
    if (confirm("Hapus semua pesan?")) {
      setMessages([]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#08152F] text-white font-poppins mt-16 lg:mt-0">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#102D41]/60 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00BCFF] flex items-center justify-center shadow-lg shadow-[#00BCFF]/20">
            <Bot size={24} className="text-black" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-white font-poppins">Apps AI</h1>
            <p className="text-xs text-white/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Online Assistant
            </p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/50 hover:text-red-400"
          title="Clear Chat"
        >
          <Eraser size={20} />
        </button>
      </header>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 flex flex-col custom-scroll"
      >
        {messages.length === 0 && !isLoading && (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 self-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <Bot size={32} className="text-white/20" />
            </div>
            <h2 className="text-xl font-bold mb-2">Selamat Datang!</h2>
            <div className="text-white/40 max-w-xs text-sm">
              <TypeAnimation
                sequence={[
                  'Mulai percakapan dengan menanyakan apapun.',
                  1000,
                  'Tanyakan apa yang ingin kau tanyakan.',
                  2000,
                  'Saya di sini untuk membantu Anda.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div 
            key={i} 
            className={`flex items-start gap-3 w-full ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              m.role === "user" ? "bg-[#00BCFF] font-bold" : "bg-white/10 shadow-sm"
            }`}>
              {m.role === "user" ? <User size={16} className="text-black" /> : <Bot size={16} />}
            </div>
            
            <div className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
              m.role === "user" 
                ? "bg-[#00BCFF] text-black rounded-tr-none font-medium" 
                : "bg-white/5 border border-white/10 rounded-tl-none text-white/90 leading-relaxed"
            }`}>
              <p className="whitespace-pre-wrap text-sm md:text-base">{m.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start gap-3 w-full">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none">
              <Loader2 size={18} className="animate-spin text-[#00BCFF]" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border border-white w-full"></div>
      <div className="p-4 md:p-6 bg-[#08152F]">
        <div className="max-w-4xl mx-auto relative group">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ketik pesan Anda..."
            className="w-full bg-white/5 border border-white/10 focus:border-[#00BCFF]/50 outline-none rounded-2xl py-4 pl-5 pr-14 transition-all focus:ring-4 focus:ring-[#00BCFF]/10 placeholder:text-white/20 text-white"
          />
          <button 
            onClick={send}
            disabled={!msg.trim() || isLoading}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-xl bg-[#00BCFF] text-black flex items-center justify-center hover:scale-95 active:scale-90 transition-all disabled:opacity-50 disabled:grayscale disabled:pointer-events-none cursor-pointer"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center mt-3 text-white/20 uppercase tracking-widest font-medium text-[#00BCFF]/50">
          Powered by Apps AI Engine 
        </p>
      </div>
    </div>
  );
}