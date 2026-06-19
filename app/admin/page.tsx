export const dynamic = "force-dynamic";

import { getDashboardStats, getBookings } from "@/app/actions/booking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatTime } from "@/lib/utils";
import { Calendar, Clock, CheckCircle, XCircle, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const statusVariant: Record<string, "pending" | "confirmed" | "completed" | "cancelled"> = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export default async function AdminDashboard() {
  const [stats, { bookings }] = await Promise.all([
    getDashboardStats(),
    getBookings({ pageSize: 5 }),
  ]);

  const statCards = [
    { label: "Total Bookings", value: stats.total, icon: Calendar, color: "text-blue-400" },
    { label: "Today", value: stats.todayCount, icon: Clock, color: "text-amber-400" },
    { label: "Pending", value: stats.pending, icon: Users, color: "text-amber-400" },
    { label: "Confirmed", value: stats.confirmed, icon: CheckCircle, color: "text-blue-400" },
    { label: "Completed", value: stats.completed, icon: TrendingUp, color: "text-green-400" },
    { label: "Cancelled", value: stats.cancelled, icon: XCircle, color: "text-red-400" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#E2E8F0]">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <Card key={label}>
            <CardContent className="p-4">
              <Icon className={`h-5 w-5 ${color} mb-2`} />
              <div className="text-2xl font-bold text-[#E2E8F0]">{value}</div>
              <div className="text-xs text-[#8B9CB8] mt-0.5">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {bookings.map((b) => (
              <Link
                key={b.id}
                href={`/admin/bookings/${b.id}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#080D1A] hover:bg-white/3 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-[#E2E8F0]">{b.customerName}</p>
                  <p className="text-xs text-[#8B9CB8]">{b.service.name} · {formatDate(b.date)} · {formatTime(b.time)}</p>
                </div>
                <Badge variant={statusVariant[b.status]}>{b.status}</Badge>
              </Link>
            ))}
            {bookings.length === 0 && (
              <p className="text-center text-[#8B9CB8] text-sm py-8">No bookings yet</p>
            )}
          </div>
          <Link href="/admin/bookings" className="block mt-4 text-sm text-[#4F8EF7] hover:underline text-center">
            View all bookings →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
