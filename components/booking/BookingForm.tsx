"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/validations";
import { createBooking, getAvailableSlots } from "@/app/actions/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toast, useToast } from "@/components/ui/toast";
import { TimeSlotPicker } from "./TimeSlotPicker";
import type { Service } from "@prisma/client";
import type { TimeSlot } from "@/types/booking";
import { format } from "date-fns";
import { Loader2, CheckCircle2 } from "lucide-react";

interface BookingFormProps {
  services: Service[];
}

export default function BookingForm({ services }: BookingFormProps) {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const { toasts, toast, removeToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) });

  const selectedDate = watch("date");
  const selectedTime = watch("time");

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setValue("date", date);
    setValue("time", "");
    if (!date) return;
    setLoadingSlots(true);
    const res = await fetch(`/api/available-slots?date=${date}`);
    const data: TimeSlot[] = await res.json();
    setSlots(data);
    setLoadingSlots(false);
  };

  const today = format(new Date(), "yyyy-MM-dd");

  const onSubmit = async (data: BookingFormData) => {
    const result = await createBooking(data);
    if (result?.error) {
      toast("Something went wrong. Please try again.", "error");
      return;
    }
    setBookingId(result.bookingId!);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
        <CheckCircle2 className="h-16 w-16 text-green-400" />
        <h2 className="text-2xl font-bold text-[#E2E8F0]">Booking Confirmed!</h2>
        <p className="text-[#8B9CB8] max-w-sm">
          We&apos;ve sent a confirmation email. Reference:{" "}
          <span className="font-mono text-[#4F8EF7]">#{bookingId.slice(0, 8).toUpperCase()}</span>
        </p>
        <Button onClick={() => setSubmitted(false)}>Book Another</Button>
      </div>
    );
  }

  return (
    <>
      {toasts.map((t) => (
        <Toast key={t.id} message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
      ))}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="customerName">Full Name *</Label>
            <Input id="customerName" placeholder="John Smith" {...register("customerName")} />
            {errors.customerName && <p className="text-xs text-red-400">{errors.customerName.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
            {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" placeholder="+44 7700 900000" {...register("phone")} />
            {errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" placeholder="Acme Ltd" {...register("companyName")} />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>Service *</Label>
          <Select onValueChange={(v) => setValue("serviceId", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name} — £{s.price.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceId && <p className="text-xs text-red-400">{errors.serviceId.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            type="date"
            min={today}
            onChange={handleDateChange}
            className="text-[#E2E8F0]"
          />
          {errors.date && <p className="text-xs text-red-400">{errors.date.message}</p>}
        </div>

        {selectedDate && (
          <div className="space-y-1.5">
            <Label>Available Time Slots *</Label>
            {loadingSlots ? (
              <div className="flex items-center gap-2 text-[#8B9CB8] text-sm py-4">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading slots...
              </div>
            ) : (
              <TimeSlotPicker
                slots={slots}
                selected={selectedTime ?? ""}
                onSelect={(time) => setValue("time", time)}
              />
            )}
            {errors.time && <p className="text-xs text-red-400">{errors.time.message}</p>}
          </div>
        )}

        <div className="space-y-1.5">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Tell us about your project or any specific requirements..."
            rows={4}
            {...register("notes")}
          />
          {errors.notes && <p className="text-xs text-red-400">{errors.notes.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking...</>
          ) : (
            "Confirm Booking"
          )}
        </Button>
      </form>
    </>
  );
}
