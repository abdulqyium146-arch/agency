"use client";
import { cn } from "@/lib/utils";
import type { TimeSlot } from "@/types/booking";
import { formatTime } from "@/lib/utils";

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selected: string;
  onSelect: (time: string) => void;
}

export function TimeSlotPicker({ slots, selected, onSelect }: TimeSlotPickerProps) {
  if (!slots.length) {
    return <p className="text-[#8B9CB8] text-sm py-2">No slots available for this date.</p>;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
      {slots.map(({ time, available }) => (
        <button
          key={time}
          type="button"
          disabled={!available}
          onClick={() => available && onSelect(time)}
          className={cn(
            "rounded-lg border py-2.5 text-sm font-medium transition-all",
            !available && "border-white/5 bg-white/3 text-[#8B9CB8]/40 cursor-not-allowed line-through",
            available && selected !== time && "border-white/10 bg-[#0D1627] text-[#E2E8F0] hover:border-[#4F8EF7]/50 hover:bg-[#4F8EF7]/10",
            available && selected === time && "border-[#4F8EF7] bg-[#4F8EF7]/20 text-[#4F8EF7] font-semibold"
          )}
        >
          {formatTime(time)}
        </button>
      ))}
    </div>
  );
}
