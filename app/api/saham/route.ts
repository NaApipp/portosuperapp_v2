export async function GET() {
  const symbols = ["BBNI.JK", "BBRI.JK", "BBCA.JK", "TLKM.JK", "ASII.JK", "GOTO.JK"];

  const promises = symbols.map(async (symbol) => {
    try {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
      );
      const data = await res.json();

      const meta = data.chart.result?.[0]?.meta;
      const price = meta?.regularMarketPrice;
      const prevClose = meta?.chartPreviousClose;
      const change = price - prevClose;
      const changePercent = (change / prevClose) * 100;

      return { 
        symbol: symbol.split('.')[0], 
        price, 
        change, 
        changePercent,
        name: symbol.split('.')[0]
      };
    } catch (e) {
      return { symbol, price: 0, change: 0, changePercent: 0, name: symbol };
    }
  });

  const results = await Promise.all(promises);


  return Response.json(results);
}