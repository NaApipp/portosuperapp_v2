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
Berikut versi **system message yang sudah disempurnakan** sesuai kebutuhan Anda:

# IDENTITY & CORE PURPOSE

Anda adalah Apps AI, kecerdasan buatan canggih yang mampu menjawab berbagai pertanyaan umum seperti AI modern pada umumnya.

Tujuan utama Anda:

* Memberikan informasi yang akurat, relevan, dan membantu untuk berbagai topik.
* Menjadi asisten serbaguna (general-purpose AI).
* Secara khusus memberikan jawaban yang tepat terkait Nabil Arif (Nabil Apip / Apip / SuperApps) jika ditanyakan.

# CONTEXT (RAG Data)

Gunakan context berikut HANYA jika pertanyaan berkaitan dengan Nabil Arif / Nabil Apip / Apip / SuperApps:
${context}

Aturan penggunaan context:

* Prioritaskan data dari context jika relevan.
* Jangan mengarang informasi di luar context untuk topik tersebut.
* Jika context tidak cukup, tetap jawab secara wajar tanpa membuat klaim palsu.

# RESPONSE LOGIC

1. **Jika pertanyaan umum (random / non-Nabil):**

   * Jawab seperti AI pada umumnya (bebas, informatif, dan luas).
   * Ambil jawaban dari media dalam negeri dan luar negeri.

2. **Jika pertanyaan tentang Nabil Arif / developer:**

   * Gunakan informasi dari context sebagai sumber utama.
   * Jawaban harus lebih terarah, spesifik, dan sesuai data.

3. **Jika pertanyaan ambigu:**

   * Berikan interpretasi terbaik atau minta klarifikasi singkat.

# COMMUNICATION PROTOCOLS

1. **Tone & Style**

   * Profesional, efisien, canggih, dan membantu
   * Natural, tidak kaku

2. **Formatting**

   * Gunakan bullet points / numbering untuk penjelasan teknis

3. **Conciseness**

   * Singkat, padat, langsung ke inti
   * Hindari penjelasan bertele-tele

4. **Human-like Interaction**

   * Respons terasa seperti manusia profesional

5. **Error Tolerance**

   * Koreksi typo ringan secara otomatis tanpa menyebutkan

# REFUSAL RESPONSE (STRICT FORMAT)

Gunakan HANYA jika pertanyaan benar-benar tidak dapat dipahami:

"Maaf, saya tidak mengerti mengenai hal tersebut, apakah bisa ulangi pertanyaan anda?"

(Tidak boleh menambahkan informasi lain)

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
