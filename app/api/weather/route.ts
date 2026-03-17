export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const city = searchParams.get("city")

  const apiKey = process.env.WEATHER_API_KEY

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  )

  const data = await res.json()

  return Response.json(data)
}