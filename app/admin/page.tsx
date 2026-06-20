export const dynamic = "force-dynamic";

import { getDashboardStats, getBookings } from "@/app/actions/booking";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatTime } from "@/lib/utils";
import {
  CalendarDays, Clock, TrendingUp, AlertCircle,
  CheckCircle2, ArrowRight, Phone, Mail,
} from "lucide-react";
import Link from "next/link";

const statusVariant: Record<string, "pending" | "confirmed" | "completed" | "cancelled"> = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const statusDot: Record<string, string> = {
  PENDING: "bg-amber-400",
  CONFIRMED: "bg-blue-400",
  COMPLETED: "bg-green-400",
  CANCELLED: "bg-red-400",
};

export default async function AdminDashboard() {
  const [stats, { bookings: recentBookings }] = await Promise.all([
    getDashboardStats(),
    getBookings({ pageSize: 6, status: undefined }),
  ]);

  const kpis = [
    {
      label: "Pending Action",
      value: stats.pending,
      sub: "need response",
      icon: AlertCircle,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      urgent: stats.pending > 0,
      href: "/admin/bookings",
    },
    {
      label: "Today",
      value: stats.todayCount,
      sub: "appointments",
      icon: CalendarDays,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      urgent: false,
      href: "/admin/calendar",
    },
    {
      label: "This Month",
      value: stats.monthBookings,
      sub: "bookings",
      icon: TrendingUp,
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      text: "text-green-400",
      urgent: false,
      href: "/admin/bookings",
    },
    {
      label: "Revenue",
      value: `£${stats.revenue.toLocaleString()}`,
      sub: "total paid",
      icon: CheckCircle2,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      urgent: false,
      href: "/admin/bookings",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#E2E8F0]">Dashboard</h1>
          <p className="text-sm text-[#8B9CB8] mt-0.5">
            {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
        <Link
          href="/admin/bookings"
          className="flex items-center gap-2 text-sm text-[#4F8EF7] hover:text-blue-300 transition-colors"
        >
          All bookings <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ label, value, sub, icon: Icon, bg, border, text, urgent, href }) => (
          <Link
            key={label}
            href={href}
            className={`relative rounded-2xl border p-5 transition-all hover:scale-[1.02] ${bg} ${border}`}
          >
            {urgent && (
              <span className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            )}
            <div className={`inline-flex p-2 rounded-xl ${bg} mb-3`}>
              <Icon className={`h-5 w-5 ${text}`} />
            </div>
            <div className={`text-3xl font-bold ${text} tabular-nums`}>{value}</div>
            <div className="mt-1">
              <span className="text-[#E2E8F0] text-sm font-medium">{label}</span>
              <span className="text-[#8B9CB8] text-xs ml-1.5">{sub}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-[#0D1627] border border-white/7 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-[#E2E8F0] flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#4F8EF7]" />
              Today&apos;s Schedule
            </h2>
            <Link href="/admin/calendar" className="text-xs text-[#4F8EF7] hover:underline">
              Calendar →
            </Link>
          </div>

          {stats.todayBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CalendarDays className="h-10 w-10 text-[#8B9CB8]/40 mb-3" />
              <p className="text-sm text-[#8B9CB8]">No appointments today</p>
              <p className="text-xs text-[#8B9CB8]/60 mt-1">Enjoy the free day</p>
            </div>
          ) : (
            <div className="space-y-3">
              {stats.todayBookings.map((b) => (
                <Link
                  key={b.id}
                  href={`/admin/bookings/${b.id}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#080D1A] hover:bg-white/3 transition-colors group"
                >
                  <div className="flex flex-col items-center pt-0.5 min-w-[44px]">
                    <span className="text-xs font-bold text-[#4F8EF7]">{b.time}</span>
                    <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${statusDot[b.status]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#E2E8F0] truncate">{b.customerName}</p>
                    <p className="text-xs text-[#8B9CB8] truncate">{b.service.name}</p>
                  </div>
                  <Badge variant={statusVariant[b.status]} className="shrink-0 text-[10px]">
                    {b.status}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Bookings */}
        <div className="lg:col-span-3 bg-[#0D1627] border border-white/7 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/7">
            <h2 className="font-semibold text-[#E2E8F0]">Recent Bookings</h2>
            <Link href="/admin/bookings" className="text-xs text-[#4F8EF7] hover:underline">
              View all →
            </Link>
          </div>

          {recentBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-sm text-[#8B9CB8]">No bookings yet</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {recentBookings.map((b) => (
                <Link
                  key={b.id}
                  href={`/admin/bookings/${b.id}`}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-white/2 transition-colors group"
                >
                  {/* Avatar */}
                  <div className="h-9 w-9 rounded-full bg-[#4F8EF7]/15 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#4F8EF7]">
                      {b.customerName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#E2E8F0] truncate">{b.customerName}</p>
                    <p className="text-xs text-[#8B9CB8] truncate">{b.service.name}</p>
                  </div>
                  {/* Date */}
                  <div className="hidden sm:flex flex-col items-end shrink-0">
                    <span className="text-xs text-[#E2E8F0]">{formatDate(b.date)}</span>
                    <span className="text-xs text-[#8B9CB8]">{formatTime(b.time)}</span>
                  </div>
                  {/* Status */}
                  <Badge variant={statusVariant[b.status]} className="shrink-0 ml-2">
                    {b.status}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Confirmed", value: stats.confirmed, color: "text-blue-400" },
          { label: "Completed", value: stats.completed, color: "text-green-400" },
          { label: "Cancelled", value: stats.cancelled, color: "text-red-400" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-[#0D1627] border border-white/7 rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-[#8B9CB8]">{label}</span>
            <span className={`text-lg font-bold tabular-nums ${color}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
