export async function GET() {
  const res = await fetch(
    "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
    { next: { revalidate: 86400 } }
  );

  const data = await res.json();
  return Response.json(data);
}