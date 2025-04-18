
import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  CalendarDays, 
  Clock, 
  Dumbbell, 
  FlameKindling, 
  Home,
  Settings,
  Target
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

function NavItem({ href, icon, children, active }: NavItemProps) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors
        ${active 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-muted"
        }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`
      fixed inset-y-0 left-0 z-20 w-64 transform bg-card border-r p-4
      transition-transform duration-200 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
    `}>
      <div className="flex items-center gap-2 mb-8 mt-2">
        <div className="bg-primary rounded-md p-1">
          <Dumbbell className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Alpha Ops</h1>
      </div>
      
      <nav className="space-y-1">
        <NavItem href="/" icon={<Home className="h-4 w-4" />} active>
          Dashboard
        </NavItem>
        <NavItem href="/workouts" icon={<Dumbbell className="h-4 w-4" />}>
          Workouts
        </NavItem>
        <NavItem href="/progress" icon={<BarChart3 className="h-4 w-4" />}>
          Progress
        </NavItem>
        <NavItem href="/habits" icon={<FlameKindling className="h-4 w-4" />}>
          Habits
        </NavItem>
        <NavItem href="/goals" icon={<Target className="h-4 w-4" />}>
          Goals
        </NavItem>
        <NavItem href="/timer" icon={<Clock className="h-4 w-4" />}>
          Timer
        </NavItem>
        <NavItem href="/calendar" icon={<CalendarDays className="h-4 w-4" />}>
          Calendar
        </NavItem>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <NavItem href="/settings" icon={<Settings className="h-4 w-4" />}>
          Settings
        </NavItem>
      </div>
    </div>
  );
}
