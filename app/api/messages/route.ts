import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import {Resend} from "resend";

// GET API KEY in env
const resend = new Resend(process.env.RESEND_API_KEY);  

// Format date to "DD/MM/YYYY HH:MM:SS"  For Message Date
function formatDateWIB(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  return `${map.day}/${map.month}/${map.year} ${map.hour}:${map.minute}:${map.second}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, message} = body;

    const data = await resend.emails.send({
      from: "appsporto <no-reply@appsporto.my.id>",
      to: "nabilapipp2@gmail.com",
      subject: `Pesan baru dari ${name}`,
      html: `
        <h2 style="color: black; margin: 0 auto; padding-bottom: 10px; ">Anda mendapat pesan baru dari website Appsporto</h2>
        <p style="border: 2px solid black; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; ">
          <strong>Dari:</strong> ${name}
        </p>
        <p style="border: 2px solid black; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; ">
          <strong>Email:</strong> ${email}
        </p>
        <p style="border: 2px solid black; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; ">
          <strong>Pesan:</strong> ${message}
        </p>
      `
    })

    const client = await clientPromise;
    const db = client.db("porto-apip");
    const collection = db.collection("messages");

    const formattedDate = formatDateWIB(new Date());

    const result = await collection.insertOne({
      email: email.trim(),
      name: name.trim(),
      message: message.trim(),
      message_date: formattedDate,
    });

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
        data: data
      },
      { status: 200 }
    );

    
  } catch (error) {
    console.error("POST /messages:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}
