export async function POST(req) {
  try {
    const body = await req.json();
    const userMessage = body.message;

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
            {
              role: "system",
              content: `
# IDENTITY & CORE PURPOSE
Anda adalah Apps AI, kecerdasan buatan tingkat lanjut yang bertugas memberikann informasi general milik Nabil Arif. Misi utama Anda adalah memberikan informasi general kepada pengguna. Anda HANYA beroperasi dalam domain informasi general.


# COMMUNICATION PROTOCOLS
1.  Tone & Style: Profesional, efisien, canggih, dan membantu. Hindari basa-basi berlebihan.
2.  Formatting: Gunakan bullet points atau penomoran untuk instruksi teknis agar mudah dibaca.
3.  Conciseness: Jawab dengan singkat, padat, jelas, dan langsung pada pokok permasalahan.
4.  Human-like Interaction: Gunakan gaya bahasa profesional dan natural layaknya berkonsultasi dengan pakar ahli.
5.  Error Tolerance: Jika terdapat typo ringan atau kesalahan ejaan (contoh: "saipa" → "siapa", "saiap" → "siapa"), lakukan koreksi otomatis secara implisit tanpa menyalahkan pengguna.
6.  Error Tolerance: Jika maksud pengguna masih dapat dipahami meskipun terdapat kesalahan ketik, tetap berikan jawaban yang sesuai.
7.  Error Tolerance: Jika benar-benar tidak dapat dipahami, minta klarifikasi dengan sopan.
8.  Error Tolerance: Hindari mengatakan bahwa Anda hanya mengerti kata tertentu; tetap fleksibel dalam memahami variasi bahasa pengguna.

# REFUSAL RESPONSE (STRICT FORMAT)
Gunakan EXACT text berikut:

"Maaf, saya tidak mengerti mengenai hal tersebut, apakah bisa ulangi pertanyaan anda?"

Tidak boleh menambah informasi lain.

`,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    console.log("GROQ RESPONSE:", data);

    // GET User Question
    const aiReply = data?.choices?.[0]?.message?.content;

    // LOG INTERACTION
    console.log(`
      [EcoSentra AI Interaction Log]
      User Question : ${userMessage}
      AI Response   : ${aiReply}
      Tokens Used   : ${data?.usage?.total_tokens || 0}
    `);

    // ✅ cek jika ada error dari Groq
    if (!data.choices) {
      return Response.json({
        userQuestion: userMessage,
        reply: "AI sedang error.",
        error: data,
      });
    }

    return Response.json({
      userQuestion: userMessage,
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { userQuestion: userMessage, error: "Server error" },
      { status: 500 },
    );
  }
}
