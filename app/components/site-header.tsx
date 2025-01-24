import { Link } from "@remix-run/react";

// import { siteConfig } from "@/config/site";
// import { Icons } from "@/components/icons";
import { MainNav } from "./main-nav";
import { AuthNav } from "./auth-nav";
import { MobileNav } from "./mobile-nav";
// import { ModeSwitcher } from "@/components/mode-switcher";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 flex h-14 justify-between items-center w-full">
        <MainNav />
        <MobileNav />
        <div className="flex items-center justify-between gap-2 md:justify-end">
          <AuthNav />
        </div>
      </div>
    </header>
  );
}
