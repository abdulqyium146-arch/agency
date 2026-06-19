import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const DEFAULT_SLOTS = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

export default function AvailabilityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#E2E8F0]">Availability</h1>
      <Card>
        <CardHeader><CardTitle className="text-base">Working Hours</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DAYS.map((day, i) => (
              <div key={day} className="flex items-center justify-between p-3 rounded-xl bg-[#080D1A]">
                <span className="text-sm font-medium text-[#E2E8F0]">{day}</span>
                {i < 5 ? (
                  <span className="text-xs text-[#8B9CB8]">09:00 AM – 06:00 PM</span>
                ) : (
                  <span className="text-xs text-red-400">Closed</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Time Slots (Mon–Fri)</CardTitle></CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {DEFAULT_SLOTS.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-lg bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
