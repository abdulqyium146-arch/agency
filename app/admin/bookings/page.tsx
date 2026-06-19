"use client";
import { useState, useEffect } from "react";
import { getBookings, getServices } from "@/app/actions/booking";
import BookingsTable from "@/components/admin/BookingsTable";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import type { PaginatedBookings } from "@/types/booking";
import type { Service } from "@prisma/client";

export default function BookingsPage() {
  const [data, setData] = useState<PaginatedBookings | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  useEffect(() => {
    setLoading(true);
    getBookings({
      search: search || undefined,
      status: (status as import("@/types/booking").BookingStatus) || undefined,
      serviceId: serviceId || undefined,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      page,
    }).then((res) => {
      setData(res as unknown as PaginatedBookings);
      setLoading(false);
    });
  }, [search, status, serviceId, dateFrom, dateTo, page]);

  const clearFilters = () => {
    setSearch(""); setStatus(""); setServiceId(""); setDateFrom(""); setDateTo(""); setPage(1);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#E2E8F0]">Bookings</h1>

      <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-4 space-y-4">
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B9CB8]" />
            <Input
              placeholder="Search name, email, company..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="pl-9"
            />
          </div>
          <Select value={status} onValueChange={(v) => { setStatus(v === "ALL" ? "" : v); setPage(1); }}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Status</SelectItem>
              {["PENDING","CONFIRMED","COMPLETED","CANCELLED"].map(s => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={serviceId} onValueChange={(v) => { setServiceId(v === "ALL" ? "" : v); setPage(1); }}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Services</SelectItem>
              {services.map(s => (
                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input type="date" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value); setPage(1); }} className="w-36 text-[#E2E8F0]" />
          <Input type="date" value={dateTo} onChange={(e) => { setDateTo(e.target.value); setPage(1); }} className="w-36 text-[#E2E8F0]" />
          {(search || status || serviceId || dateFrom || dateTo) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 rounded-xl bg-[#0D1627] animate-pulse" />
          ))}
        </div>
      ) : data ? (
        <BookingsTable data={data} onPageChange={setPage} />
      ) : null}
    </div>
  );
}
