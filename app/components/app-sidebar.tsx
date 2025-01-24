"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

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
    title: "Playground",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Models",
    url: "/idk",
    icon: Bot,
  },
  {
    title: "Documentation",
    url: "/idk",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "/idk",
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
