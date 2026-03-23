import data from "@/app/data/kodepos.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kodepos = searchParams.get("kodepos");

  if (!kodepos) {
    return Response.json({});
  }

  // Traverse the nested object: Province -> Regency -> District -> Village
  for (const provinceName in data) {
    const regencies = (data as any)[provinceName]["Kabupaten/Kota"];
    for (const regencyName in regencies) {
      const districts = regencies[regencyName]["Kecamatan"];
      for (const districtName in districts) {
        const villages = districts[districtName]["Kelurahan/Desa"];
        for (const vName in villages) {
          if (villages[vName]["Kode Pos"] === kodepos) {
            return Response.json({
              province: provinceName,
              city: regencyName,
              district: districtName,
              village: vName,
              kode_pos: kodepos,
              id: villages[vName]["ID"]
            });
          }
        }
      }
    }
  }

  return Response.json({});
}