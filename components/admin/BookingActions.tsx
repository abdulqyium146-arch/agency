"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateBooking } from "@/app/actions/booking";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Clock, Loader2 } from "lucide-react";

interface BookingActionsProps {
  bookingId: string;
  currentStatus: string;
}

const actions: Record<string, { label: string; next: string; icon: React.ElementType; className: string }[]> = {
  PENDING: [
    { label: "Confirm", next: "CONFIRMED", icon: CheckCircle2, className: "bg-blue-600 hover:bg-blue-500 text-white" },
    { label: "Cancel", next: "CANCELLED", icon: XCircle, className: "bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30" },
  ],
  CONFIRMED: [
    { label: "Mark Complete", next: "COMPLETED", icon: CheckCircle2, className: "bg-green-600 hover:bg-green-500 text-white" },
    { label: "Cancel", next: "CANCELLED", icon: XCircle, className: "bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30" },
  ],
  COMPLETED: [],
  CANCELLED: [
    { label: "Reopen", next: "PENDING", icon: Clock, className: "bg-[#4F8EF7]/20 hover:bg-[#4F8EF7]/30 text-[#4F8EF7] border border-[#4F8EF7]/30" },
  ],
};

export default function BookingActions({ bookingId, currentStatus }: BookingActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const available = actions[currentStatus] ?? [];
  if (available.length === 0) return null;

  const handleAction = async (next: string) => {
    setLoading(next);
    await updateBooking(bookingId, { status: next });
    router.refresh();
    setLoading(null);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {available.map(({ label, next, icon: Icon, className }) => (
        <Button
          key={next}
          size="sm"
          disabled={loading !== null}
          onClick={() => handleAction(next)}
          className={`flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-2 h-auto transition-all ${className}`}
        >
          {loading === next ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Icon className="h-3.5 w-3.5" />
          )}
          {label}
        </Button>
      ))}
    </div>
  );
}
