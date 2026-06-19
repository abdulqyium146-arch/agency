export const dynamic = "force-dynamic";

import { getBookingById } from "@/app/actions/booking";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatTime } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/bookings"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-2xl font-bold text-[#E2E8F0]">Booking Detail</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">#{id.slice(0, 8).toUpperCase()}</CardTitle>
            <Badge variant={statusVariant[booking.status]}>{booking.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Customer", value: booking.customerName },
            { label: "Email", value: booking.email },
            { label: "Phone", value: booking.phone },
            { label: "Company", value: booking.companyName ?? "—" },
            { label: "Service", value: booking.service.name },
            { label: "Date", value: formatDate(booking.date) },
            { label: "Time", value: formatTime(booking.time) },
            { label: "Notes", value: booking.notes ?? "—" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-[#8B9CB8]">{label}</span>
              <span className="text-[#E2E8F0] text-right max-w-xs">{value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {booking.payment && (
        <Card>
          <CardHeader><CardTitle className="text-base">Payment</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8B9CB8]">Status</span>
              <Badge variant={booking.payment.status.toLowerCase() as "paid" | "failed" | "refunded" | "pending"}>{booking.payment.status}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8B9CB8]">Amount</span>
              <span className="text-[#E2E8F0]">£{booking.payment.amount.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
