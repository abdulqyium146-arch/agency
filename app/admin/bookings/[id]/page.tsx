export const dynamic = "force-dynamic";

import { getBookingById } from "@/app/actions/booking";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatTime } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Building2, Calendar, Clock, FileText, CreditCard } from "lucide-react";
import BookingActions from "@/components/admin/BookingActions";

const statusVariant: Record<string, "pending" | "confirmed" | "completed" | "cancelled"> = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const booking = await getBookingById(id);
  if (!booking) notFound();

  const fields = [
    { icon: Mail, label: "Email", value: booking.email, href: `mailto:${booking.email}` },
    { icon: Phone, label: "Phone", value: booking.phone, href: `tel:${booking.phone}` },
    { icon: Building2, label: "Company", value: booking.companyName ?? "—", href: null },
    { icon: Calendar, label: "Date", value: formatDate(booking.date), href: null },
    { icon: Clock, label: "Time", value: formatTime(booking.time), href: null },
    { icon: FileText, label: "Service", value: booking.service.name, href: null },
  ];

  return (
    <div className="max-w-2xl space-y-6">
      {/* Back + Title */}
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/admin/bookings"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold text-[#E2E8F0]">Booking #{id.slice(0, 8).toUpperCase()}</h1>
          <p className="text-xs text-[#8B9CB8]">Created {formatDate(booking.createdAt)}</p>
        </div>
      </div>

      {/* Status Banner */}
      <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#8B9CB8] uppercase tracking-wider mb-1">Current Status</p>
            <Badge variant={statusVariant[booking.status]} className="text-sm px-3 py-1">
              {booking.status}
            </Badge>
          </div>
          {/* Quick Actions */}
          <BookingActions bookingId={id} currentStatus={booking.status} />
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-[#0D1627] border border-white/7 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/7 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#4F8EF7]/15 flex items-center justify-center">
            <span className="text-sm font-bold text-[#4F8EF7]">
              {booking.customerName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-semibold text-[#E2E8F0]">{booking.customerName}</p>
            <p className="text-xs text-[#8B9CB8]">{booking.service.name}</p>
          </div>
        </div>
        <div className="divide-y divide-white/5">
          {fields.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 px-5 py-3.5">
              <Icon className="h-4 w-4 text-[#8B9CB8] shrink-0" />
              <span className="text-xs text-[#8B9CB8] w-20 shrink-0">{label}</span>
              {href ? (
                <a href={href} className="text-sm text-[#4F8EF7] hover:underline truncate">
                  {value}
                </a>
              ) : (
                <span className="text-sm text-[#E2E8F0]">{value}</span>
              )}
            </div>
          ))}
          {booking.notes && (
            <div className="px-5 py-3.5">
              <div className="flex items-start gap-4">
                <FileText className="h-4 w-4 text-[#8B9CB8] shrink-0 mt-0.5" />
                <span className="text-xs text-[#8B9CB8] w-20 shrink-0">Notes</span>
                <p className="text-sm text-[#E2E8F0] leading-relaxed">{booking.notes}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment */}
      {booking.payment && (
        <div className="bg-[#0D1627] border border-white/7 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/7 flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-[#8B9CB8]" />
            <h2 className="font-semibold text-[#E2E8F0] text-sm">Payment</h2>
          </div>
          <div className="divide-y divide-white/5">
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-sm text-[#8B9CB8]">Status</span>
              <Badge variant={booking.payment.status.toLowerCase() as "paid" | "failed" | "refunded" | "pending"}>
                {booking.payment.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-sm text-[#8B9CB8]">Amount</span>
              <span className="text-sm font-semibold text-[#E2E8F0]">£{booking.payment.amount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
