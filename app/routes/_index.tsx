import type { MetaFunction } from "@remix-run/node";
// import Nav from "~/components/nav";
import { SiteHeader } from "~/components/site-header";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-1 flex-col p-4">
        <PageHeader>
          {/* <Announcement /> */}
          <PageHeaderHeading>Stocky</PageHeaderHeading>
          <PageHeaderDescription>
            Easily maintain your stock portfolio with Stocky.
          </PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link to="/stocks">Browse Stocks</Link>
            </Button>
          </PageActions>
        </PageHeader>
      </main>
    </div>
  );
}
