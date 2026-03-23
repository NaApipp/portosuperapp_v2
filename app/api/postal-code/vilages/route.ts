export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const districtId = searchParams.get("districtId");

  const res = await fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
  );

  const data = await res.json();
  return Response.json(data);
}