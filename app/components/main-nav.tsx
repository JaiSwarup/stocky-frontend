import { NavLink } from "@remix-run/react";

// import { siteConfig } from "@/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <NavLink to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logoLight className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">Stocky</span>
      </NavLink>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <NavLink
          to="/docs"
          className={({ isActive, isPending }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/50"
            )
          }
        >
          Docs
        </NavLink>
        <NavLink
          to="/docs/components"
          className={({ isActive, isPending }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/50"
            )
          }
        >
          Components
        </NavLink>
        <NavLink
          to="/blocks"
          className={({ isActive, isPending }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/50"
            )
          }
        >
          Blocks
        </NavLink>
        <NavLink
          to="/charts"
          className={({ isActive, isPending }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/50"
            )
          }
        >
          Browse Stocks
        </NavLink>
      </nav>
    </div>
  );
}
