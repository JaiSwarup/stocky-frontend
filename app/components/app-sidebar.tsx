import * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "~/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "~/components/ui/sidebar";

// This is sample data.
const data = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: Bot,
  },
  {
    title: "Trading",
    url: "/trading",
    icon: BookOpen,
  },
  {
    title: "Wallet",
    url: "/wallet",
    icon: Settings2,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="">
        <SidebarTrigger className="-ml-1" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
    </Sidebar>
  );
}
