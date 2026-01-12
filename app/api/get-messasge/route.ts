import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export const runtime = "nodejs"; // aman untuk mongodb driver

export async function GET(req: Request) {
  const url = new URL(req.url);

  const limitRaw = Number(url.searchParams.get("limit") ?? 9);
  const limit = Math.min(Math.max(limitRaw, 1), 50);

  const cursor = url.searchParams.get("cursor");

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const col = db.collection(process.env.MONGODB_COLLECTION!);

  let cursorDate: Date | null = null;
  let cursorId: ObjectId | null = null;

  if (cursor) {
    try {
      const decoded = JSON.parse(Buffer.from(cursor, "base64").toString("utf8"));
      cursorDate = new Date(decoded.date);     // ini ISO string dari cursor
      cursorId = new ObjectId(decoded.id);
    } catch {
      return Response.json({ error: "Invalid cursor" }, { status: 400 });
    }
  }

  const pipeline: any[] = [
    {
      $addFields: {
        message_date_parsed: {
          $dateFromString: {
            dateString: "$message_date",
            format: "%d/%m/%Y %H:%M:%S",
            timezone: "Asia/Jakarta",
          },
        },
      },
    },
  ];

  if (cursorDate && cursorId) {
    pipeline.push({
      $match: {
        $or: [
          { message_date_parsed: { $lt: cursorDate } },
          { message_date_parsed: cursorDate, _id: { $lt: cursorId } },
        ],
      },
    });
  }

  pipeline.push(
    { $sort: { message_date_parsed: -1, _id: -1 } },
    { $limit: limit + 1 },
    { $project: { message_date_parsed: 1,email: 1, name: 1, message: 1, message_date: 1 } }
  );

  const docs = await col.aggregate(pipeline).toArray();

  const hasNext = docs.length > limit;
  if (hasNext) docs.pop();

  if (docs.length === 0) {
    return Response.json({ data: [], nextCursor: null, hasNext: false });
  }

  const last = docs[docs.length - 1];

  const nextCursor = hasNext
    ? Buffer.from(
        JSON.stringify({
          date: last.message_date_parsed.toISOString(), // SEKARANG ini Date beneran
          id: String(last._id),
        })
      ).toString("base64")
    : null;

  const data = docs.map((d: any) => ({
    _id: String(d._id),
    email: d.email,
    name: d.name,
    message: d.message,
    message_date: d.message_date, // tetap string seperti awal (kalau mau)
  }));

  return Response.json({ data, nextCursor, hasNext });
}