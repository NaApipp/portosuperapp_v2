export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cityId = searchParams.get("cityId");

  const res = await fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`
  );

  const data = await res.json();
  return Response.json(data);
}