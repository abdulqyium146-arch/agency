"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime, exportToCSV } from "@/lib/utils";
import { updateBooking, deleteBooking } from "@/app/actions/booking";
import { Eye, Trash2, Download, ChevronLeft, ChevronRight, ChevronDown, Phone, Mail } from "lucide-react";
import type { PaginatedBookings } from "@/types/booking";

const STATUS_OPTIONS = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"] as const;
type BookingStatus = typeof STATUS_OPTIONS[number];

const statusVariant: Record<BookingStatus, "pending" | "confirmed" | "completed" | "cancelled"> = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

interface BookingsTableProps {
  data: PaginatedBookings;
  onPageChange: (page: number) => void;
  onRefresh?: () => void;
}

function StatusDropdown({ bookingId, current, onUpdated }: {
  bookingId: string;
  current: BookingStatus;
  onUpdated: (id: string, status: BookingStatus) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelect = async (status: BookingStatus) => {
    if (status === current) { setOpen(false); return; }
    setLoading(true);
    setOpen(false);
    await updateBooking(bookingId, { status });
    onUpdated(bookingId, status);
    setLoading(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={loading}
        className="flex items-center gap-1 focus:outline-none"
      >
        <Badge variant={statusVariant[current]}>{current}</Badge>
        <ChevronDown className="h-3 w-3 text-[#8B9CB8]" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-1 z-20 bg-[#0D1627] border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px]">
            {STATUS_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSelect(s)}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-white/5 transition-colors"
              >
                <Badge variant={statusVariant[s]} className="pointer-events-none">{s}</Badge>
                {s === current && <span className="ml-auto text-[#4F8EF7] text-xs">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function BookingsTable({ data, onPageChange, onRefresh }: BookingsTableProps) {
  const [localStatuses, setLocalStatuses] = useState<Record<string, BookingStatus>>({});

  const getStatus = (id: string, original: string) =>
    (localStatuses[id] ?? original) as BookingStatus;

  const handleStatusUpdated = (id: string, status: BookingStatus) => {
    setLocalStatuses((prev) => ({ ...prev, [id]: status }));
    onRefresh?.();
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete booking for ${name}? This cannot be undone.`)) return;
    await deleteBooking(id);
    onRefresh?.();
  };

  const handleExport = () => {
    const rows = data.bookings.map((b) => ({
      ID: b.id,
      Name: b.customerName,
      Email: b.email,
      Phone: b.phone,
      Company: b.companyName ?? "",
      Service: b.service.name,
      Date: formatDate(b.date),
      Time: formatTime(b.time),
      Status: b.status,
      Notes: b.notes ?? "",
      Created: formatDate(b.createdAt),
    }));
    exportToCSV(rows, "bookings");
  };

  if (data.bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-white/7 bg-[#0D1627] py-16 text-center">
        <p className="text-[#8B9CB8] text-sm">No bookings found</p>
        <p className="text-[#8B9CB8]/60 text-xs mt-1">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#8B9CB8]">
          {data.total} booking{data.total !== 1 ? "s" : ""}
          {data.totalPages > 1 && ` · Page ${data.page} of ${data.totalPages}`}
        </p>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" /> Export CSV
        </Button>
      </div>

      <div className="rounded-2xl border border-white/7 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#0D1627] border-b border-white/7">
            <tr>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider">Customer</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider hidden md:table-cell">Service</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider hidden sm:table-cell">Date & Time</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider">Status</th>
              <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 bg-[#080D1A]">
            {data.bookings.map((b) => (
              <tr key={b.id} className="hover:bg-white/2 transition-colors group">
                {/* Customer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#4F8EF7]/15 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-[#4F8EF7]">
                        {b.customerName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-[#E2E8F0]">{b.customerName}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <a href={`mailto:${b.email}`} className="flex items-center gap-1 text-[10px] text-[#8B9CB8] hover:text-[#4F8EF7] transition-colors">
                          <Mail className="h-2.5 w-2.5" />{b.email}
                        </a>
                        {b.phone && (
                          <a href={`tel:${b.phone}`} className="flex items-center gap-1 text-[10px] text-[#8B9CB8] hover:text-green-400 transition-colors">
                            <Phone className="h-2.5 w-2.5" />{b.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                {/* Service */}
                <td className="px-5 py-4 hidden md:table-cell">
                  <span className="text-[#8B9CB8] text-sm">{b.service.name}</span>
                  {b.companyName && <p className="text-xs text-[#8B9CB8]/60 mt-0.5">{b.companyName}</p>}
                </td>
                {/* Date */}
                <td className="px-5 py-4 hidden sm:table-cell">
                  <p className="text-[#E2E8F0] text-sm">{formatDate(b.date)}</p>
                  <p className="text-xs text-[#8B9CB8] mt-0.5">{formatTime(b.time)}</p>
                </td>
                {/* Status */}
                <td className="px-5 py-4">
                  <StatusDropdown
                    bookingId={b.id}
                    current={getStatus(b.id, b.status)}
                    onUpdated={handleStatusUpdated}
                  />
                </td>
                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/admin/bookings/${b.id}`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#8B9CB8] hover:text-[#4F8EF7]"
                        title="View details"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#8B9CB8] hover:text-red-400"
                      onClick={() => handleDelete(b.id, b.customerName)}
                      title="Delete booking"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#8B9CB8]">
            Showing {((data.page - 1) * data.pageSize) + 1}–{Math.min(data.page * data.pageSize, data.total)} of {data.total}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={data.page === 1}
              onClick={() => onPageChange(data.page - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-[#8B9CB8] px-2">
              {data.page} / {data.totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={data.page === data.totalPages}
              onClick={() => onPageChange(data.page + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
