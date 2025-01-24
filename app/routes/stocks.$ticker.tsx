import { SiteHeader } from "~/components/site-header";
// import Search from "@/components/search";
import { getStockData } from "~/lib/get-stock-data";

export default async function Home({
  searchParams,
}: {
  searchParams: { ticker?: string };
}) {
  const ticker = searchParams.ticker ?? "NFLX";
  const stockData = await getStockData(ticker);

  return (
    <div className="min-h-screen mx-auto max-w-screen-xl space-y-8 p-4">
      <SiteHeader />
      <main className="flex flex-col gap-4">
        <Search />
        <StockChart stockData={stockData} />
      </main>
    </div>
  );
}
