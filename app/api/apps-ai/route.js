import { getContext } from "@/app/lib/openAi/rag";
import { getHistory } from "@/app/lib/openAi/memory";

export async function POST(req) {
  try {
    const body = await req.json();

    const messages = body.messages || [];
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // 🔹 1. Get Context from RAG
    const context = await getContext(lastUserMessage);

    // 🔹 2. Get History from Memory
    const history = getHistory(messages, 10);

    const systemPrompt = `
# IDENTITY & CORE PURPOSE
Anda adalah Apps AI, kecerdasan buatan tingkat lanjut yang bertugas memberikan informasi general milik Nabil Arif. Misi utama Anda adalah membantu pengguna memahami project dan keahlian Nabil.

# CONTEXT (RAG Data)
Gunakan informasi berikut jika relevan dengan pertanyaan:
${context}

# COMMUNICATION PROTOCOLS
1. Tone & Style: Profesional, efisien, canggih, dan membantu. Hindari basa-basi berlebihan.
2. Formatting: Gunakan bullet points atau penomoran untuk instruksi teknis agar mudah dibaca.
3. Conciseness: Jawab dengan singkat, padat, jelas, dan langsung pada pokok permasalahan.
4. Human-like Interaction: Gunakan gaya bahasa profesional dan natural.
5. Error Tolerance: Jika terdapat typo ringan (contoh: "saipa" → "siapa"), lakukan koreksi otomatis secara implisit.

# REFUSAL RESPONSE (STRICT FORMAT)
Jika pertanyaan benar-benar di luar domain informasi Nabil Arif atau context yang diberikan:
"Maaf, saya tidak mengerti mengenai hal tersebut, apakah bisa ulangi pertanyaan anda?"
Tidak boleh menambah informasi lain.
`;

    // 🔹 3. Call Groq with Context & History
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: systemPrompt },
            ...history,
          ],
        }),
      }
    );

    const data = await response.json();

    if (!data.choices) {
      console.error("GROQ ERROR:", data);
      return Response.json({
        reply: "AI sedang error. Silakan coba lagi.",
        error: data,
      });
    }

    const aiReply = data.choices[0].message.content;

    // LOG INTERACTION
    console.log(`
      [EcoSentra AI Interaction Log]
      User Question : ${lastUserMessage}
      AI Response   : ${aiReply}
      Tokens Used   : ${data?.usage?.total_tokens || 0}
    `);

    return Response.json({
      reply: aiReply,
    });
  } catch (error) {
    console.error("ROUTE ERROR:", error);

    return Response.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
