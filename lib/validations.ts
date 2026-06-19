import { z } from "zod";

export const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number").max(20, "Phone too long"),
  companyName: z.string().optional(),
  serviceId: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  notes: z.string().max(500, "Notes must be under 500 characters").optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const serviceSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().optional(),
  duration: z.number().int().min(15).max(480),
  price: z.number().min(0),
  active: z.boolean().default(true),
});

export const updateBookingSchema = z.object({
  status: z.enum(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"]).optional(),
  notes: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
});
