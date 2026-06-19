"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime, exportToCSV } from "@/lib/utils";
import { updateBooking, deleteBooking } from "@/app/actions/booking";
import { Pencil, Trash2, Download, ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginatedBookings } from "@/types/booking";

const STATUS_OPTIONS = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"] as const;
const statusVariant: Record<string, "pending" | "confirmed" | "completed" | "cancelled"> = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

interface BookingsTableProps {
  data: PaginatedBookings;
  onPageChange: (page: number) => void;
}

export default function BookingsTable({ data, onPageChange }: BookingsTableProps) {
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusChange = async (id: string, status: string) => {
    setUpdating(id);
    await updateBooking(id, { status });
    setUpdating(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this booking?")) return;
    await deleteBooking(id);
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

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" /> Export CSV
        </Button>
      </div>

      <div className="rounded-xl border border-white/7 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#0D1627] border-b border-white/7">
            <tr>
              {["Customer", "Service", "Date & Time", "Status", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.bookings.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-12 text-[#8B9CB8]">No bookings found</td>
              </tr>
            )}
            {data.bookings.map((b) => (
              <tr key={b.id} className="hover:bg-white/2 transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-[#E2E8F0]">{b.customerName}</p>
                  <p className="text-xs text-[#8B9CB8]">{b.email}</p>
                  {b.companyName && <p className="text-xs text-[#8B9CB8]">{b.companyName}</p>}
                </td>
                <td className="px-4 py-3 text-[#8B9CB8]">{b.service.name}</td>
                <td className="px-4 py-3">
                  <p className="text-[#E2E8F0]">{formatDate(b.date)}</p>
                  <p className="text-xs text-[#8B9CB8]">{formatTime(b.time)}</p>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={b.status}
                    onChange={(e) => handleStatusChange(b.id, e.target.value)}
                    disabled={updating === b.id}
                    className="bg-transparent border border-white/10 rounded-lg px-2 py-1 text-xs text-[#E2E8F0] cursor-pointer"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-[#0D1627]">{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/bookings/${b.id}`}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-400 hover:text-red-300"
                      onClick={() => handleDelete(b.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
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
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={data.page === 1} onClick={() => onPageChange(data.page - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" disabled={data.page === data.totalPages} onClick={() => onPageChange(data.page + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
