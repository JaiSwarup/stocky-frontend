import { NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

export function AuthNav() {
  return (
    <>
      <Button asChild variant="outline">
        <NavLink className={cn("rounded-lg text-sm font-normal")} to="/login">
          Login
        </NavLink>
      </Button>
      <Button asChild>
        <NavLink
          className={cn("rounded-lg text-sm font-normal")}
          to="/register"
        >
          Get Started
        </NavLink>
      </Button>
    </>
  );
}
