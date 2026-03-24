import data from "@/app/data/kodepos.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kodepos = searchParams.get("kodepos");

  if (!kodepos) {
    return Response.json({ error: "Kode pos wajib diisi" }, { status: 400 });
  }

  const results: any[] = [];

  // Traverse the nested object: Province -> Kabupaten/Kota -> Kecamatan -> Kelurahan/Desa
  for (const provinceName in data) {
    const regencies = (data as any)[provinceName]["Kabupaten/Kota"];
    for (const regencyName in regencies) {
      const districts = regencies[regencyName]["Kecamatan"];
      for (const districtName in districts) {
        const villages = districts[districtName]["Kelurahan/Desa"];
        for (const villageName in villages) {
          const villageData = villages[villageName];
          if (villageData["Kode Pos"] === kodepos) {
            results.push({
              province: provinceName,
              city: regencyName,
              district: districtName,
              village: villageName,
              kode_pos: kodepos,
              id: villageData["ID"]
            });
          }
        }
      }
    }
  }

  return Response.json(results);
}