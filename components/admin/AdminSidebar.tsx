"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Calendar, Settings, Users, Briefcase, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart3, exact: true },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/calendar", label: "Calendar", icon: Clock },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/availability", label: "Availability", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden lg:flex flex-col w-64 bg-[#0D1627] border-r border-white/7">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-white/7">
        <BarChart3 className="h-6 w-6 text-[#4F8EF7]" />
        <span className="font-bold text-[#E2E8F0]">SBMP Admin</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active ? "bg-[#4F8EF7]/15 text-[#4F8EF7]" : "text-[#8B9CB8] hover:bg-white/5 hover:text-[#E2E8F0]"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
