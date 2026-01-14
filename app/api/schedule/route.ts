import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { schedule_name, schedule_description, date, jam } = body;

    const client = await clientPromise;
    const db = client.db("porto-apip");
    const collection = db.collection("schedules");

    const result = await collection.insertOne({
      schedule_name: schedule_name.trim(),
      schedule_description: schedule_description.trim(),
      date: date.trim(),
      jam: jam.trim(),
      
    });

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
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


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("porto-apip");
    const collection = db.collection("schedules");

    const schedules = await collection
      .find({})
      .sort({ date: 1, jam: 1 }) // opsional, tapi logis
      .toArray();

    return NextResponse.json(
      {
        success: true,
        data: schedules,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /schedules:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}