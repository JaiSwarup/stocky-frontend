import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React, { memo, useEffect, useRef } from "react";
import TradingViewWidget from "~/components/graph";
import { SiteHeader } from "~/components/site-header";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const symbol = params!.symbol; // Ensure `symbol` is passed as part of the route parameters
  //   const isValidSymbol = ["AAPL", "GOOGL", "MSFT"].includes(symbol as string); // Ensure the symbol is valid
  //   if (!isValidSymbol) {
  //     throw new Error("Invalid symbol");
  //   }
  const isLoggedIn = false; // Check if the user is logged in
  return { symbol, isLoggedIn }; // Pass the symbol to the client
};

function StockPage() {
  const { symbol, isLoggedIn } = useLoaderData<typeof loader>();

  return (
    <div>
      <SiteHeader />
      <h1>Stock: {symbol}</h1>
      <div className="flex p-4 gap-4 items-stretch">
        <div className="min-h-full w-full flex-1 rounded-lg overflow-hidden">
          <TradingViewWidget symbol={symbol} />
        </div>
        {!isLoggedIn ? (
          <Card className="w-96 flex flex-col items-center">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Get Started with Stocky for free
              </CardTitle>
              <CardDescription className="text-sm text-wrap">
                With our range of features that you can equip for free, Stocky
                allows you to be more educated and aware of your tax reports.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/Frame.webp" alt="" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex-1">
            <Card>
              <div className="text-sm">Some other details</div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(StockPage);
