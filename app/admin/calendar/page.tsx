"use client";
import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek } from "date-fns";
import { getBookings } from "@/app/actions/booking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BookingWithRelations } from "@/types/booking";
import { cn } from "@/lib/utils";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookings, setBookings] = useState<BookingWithRelations[]>([]);
  const [selected, setSelected] = useState<BookingWithRelations[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const from = format(startOfMonth(currentMonth), "yyyy-MM-dd");
    const to = format(endOfMonth(currentMonth), "yyyy-MM-dd");
    getBookings({ dateFrom: from, dateTo: to, pageSize: 500 }).then((r) => {
      setBookings(r.bookings as unknown as BookingWithRelations[]);
    });
  }, [currentMonth]);

  const monthStart = startOfMonth(currentMonth);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calEnd = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  const getBookingsForDay = (day: Date) =>
    bookings.filter((b) => isSameDay(new Date(b.date), day));

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    setSelected(getBookingsForDay(day));
  };

  const statusColors: Record<string, string> = {
    PENDING: "bg-amber-500",
    CONFIRMED: "bg-blue-500",
    COMPLETED: "bg-green-500",
    CANCELLED: "bg-red-500",
  };

  const statusVariant: Record<string, "pending" | "confirmed" | "completed" | "cancelled"> = {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    COMPLETED: "completed",
    CANCELLED: "cancelled",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#E2E8F0]">Calendar</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-[#E2E8F0] font-semibold w-36 text-center">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-[#8B9CB8] py-2">{d}</div>
        ))}
        {days.map((day) => {
          const dayBookings = getBookingsForDay(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isToday = isSameDay(day, new Date());

          return (
            <button
              key={day.toString()}
              onClick={() => handleDayClick(day)}
              className={cn(
                "min-h-16 rounded-xl p-2 text-left transition-colors border",
                isCurrentMonth ? "bg-[#0D1627] border-white/7" : "bg-transparent border-transparent",
                !isCurrentMonth && "opacity-30",
                isSelected && "border-[#4F8EF7]",
                isToday && !isSelected && "border-[#4F8EF7]/50",
                "hover:bg-white/5"
              )}
            >
              <span className={cn(
                "text-xs font-medium",
                isToday ? "text-[#4F8EF7] font-bold" : "text-[#8B9CB8]"
              )}>
                {format(day, "d")}
              </span>
              <div className="mt-1 space-y-0.5">
                {dayBookings.slice(0, 2).map((b) => (
                  <div key={b.id} className={cn("w-full h-1.5 rounded-full", statusColors[b.status])} />
                ))}
                {dayBookings.length > 2 && (
                  <span className="text-[10px] text-[#8B9CB8]">+{dayBookings.length - 2} more</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-6">
          <h2 className="font-semibold text-[#E2E8F0] mb-4">{format(selectedDate, "EEEE, MMMM d")}</h2>
          {selected.length === 0 ? (
            <p className="text-[#8B9CB8] text-sm">No bookings on this day.</p>
          ) : (
            <div className="space-y-2">
              {selected.map((b) => (
                <div key={b.id} className="flex items-center justify-between p-3 rounded-xl bg-[#080D1A]">
                  <div>
                    <p className="text-sm font-medium text-[#E2E8F0]">{b.time} — {b.customerName}</p>
                    <p className="text-xs text-[#8B9CB8]">{b.service.name}</p>
                  </div>
                  <Badge variant={statusVariant[b.status]}>{b.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
