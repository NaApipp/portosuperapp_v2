// /app/tools/apps-ai/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Eraser, Loader2 } from "lucide-react";

export default function AppsAiPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/apps-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Gagal mengambil respon");

      const data = await res.json();
      setMessages([...newMessages, data.message]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Maaf, terjadi kesalahan. Coba lagi nanti." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm("Hapus semua pesan?")) {
      setMessages([]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white font-poppins">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
            <Bot size={24} className="text-black" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Apps AI</h1>
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
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scroll"
      >
        {messages.length === 0 && !isLoading && (
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <Bot size={32} className="text-white/20" />
            </div>
            <h2 className="text-xl font-bold mb-2">Selamat Datang!</h2>
            <p className="text-white/40 max-w-xs">
              Mulai percakapan dengan menanyakan apapun. Saya di sini untuk membantu Anda.
            </p>
          </div>
        )}

        {messages.map((m, i) => (
          <div 
            key={i} 
            className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              m.role === "user" ? "bg-amber-400" : "bg-white/10 shadow-sm"
            }`}>
              {m.role === "user" ? <User size={16} className="text-black" /> : <Bot size={16} />}
            </div>
            
            <div className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
              m.role === "user" 
                ? "bg-amber-400 text-black rounded-tr-none font-medium" 
                : "bg-white/5 border border-white/10 rounded-tl-none text-white/90 leading-relaxed"
            }`}>
              <p className="whitespace-pre-wrap text-sm md:text-base">{m.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none">
              <Loader2 size={18} className="animate-spin text-amber-400" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto relative group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ketik pesan Anda..."
            className="w-full bg-white/5 border border-white/10 focus:border-amber-400/50 outline-none rounded-2xl py-4 pl-5 pr-14 transition-all focus:ring-4 focus:ring-amber-400/10 placeholder:text-white/20"
          />
          <button 
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-xl bg-amber-400 text-black flex items-center justify-center hover:scale-95 active:scale-90 transition-all disabled:opacity-50 disabled:grayscale disabled:pointer-events-none"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center mt-3 text-white/20 uppercase tracking-widest font-medium text-amber-400/50">
          Powered by Apps AI Engine • GPT-4o
        </p>
      </div>
    </div>
  );
}