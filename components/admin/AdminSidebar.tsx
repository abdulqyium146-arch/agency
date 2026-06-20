"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarDays, Settings, Users, Briefcase, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart3, exact: true },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/admin/calendar", label: "Calendar", icon: Clock },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/availability", label: "Availability", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

interface AdminSidebarProps {
  pendingCount?: number;
}

export default function AdminSidebar({ pendingCount = 0 }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden lg:flex flex-col w-64 bg-[#0D1627] border-r border-white/7">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 h-16 border-b border-white/7 shrink-0">
        <div className="h-8 w-8 rounded-lg bg-[#4F8EF7]/20 flex items-center justify-center">
          <BarChart3 className="h-4 w-4 text-[#4F8EF7]" />
        </div>
        <div>
          <span className="font-bold text-[#E2E8F0] text-sm">SBMP Admin</span>
          <p className="text-[10px] text-[#8B9CB8] leading-none mt-0.5">Booking Portal</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] font-semibold text-[#8B9CB8]/60 uppercase tracking-widest px-3 mb-2">
          Main Menu
        </p>
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          const showBadge = label === "Bookings" && pendingCount > 0;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-[#4F8EF7]/15 text-[#4F8EF7]"
                  : "text-[#8B9CB8] hover:bg-white/5 hover:text-[#E2E8F0]"
              )}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </span>
              {showBadge && (
                <span className="h-5 min-w-5 px-1 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {pendingCount > 99 ? "99+" : pendingCount}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-white/7">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-[#8B9CB8] hover:text-[#E2E8F0] transition-colors"
          target="_blank"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          View live site
        </Link>
      </div>
    </aside>
  );
}
