export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const provinceId = searchParams.get("provinceId");

  const res = await fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
  );

  const data = await res.json();
  return Response.json(data);
}