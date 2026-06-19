"use server";

import { prisma } from "@/lib/prisma";
import { bookingSchema, updateBookingSchema } from "@/lib/validations";
import {
  sendConfirmationEmail,
  sendAdminNotificationEmail,
  sendCancellationEmail,
} from "@/lib/resend";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";
import type { BookingFilters } from "@/types/booking";

export async function createBooking(data: unknown) {
  const parsed = bookingSchema.safeParse(data);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const { customerName, email, phone, companyName, serviceId, date, time, notes } = parsed.data;

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service || !service.active) return { error: { serviceId: ["Service not available"] } };

  const bookingDate = new Date(date);
  const existing = await prisma.booking.findFirst({
    where: {
      date: bookingDate,
      time,
      status: { not: "CANCELLED" },
    },
  });
  if (existing) return { error: { time: ["This slot is already booked"] } };

  const booking = await prisma.booking.create({
    data: {
      customerName,
      email,
      phone,
      companyName,
      serviceId,
      date: bookingDate,
      time,
      notes,
      status: "PENDING",
    },
    include: { service: true },
  });

  const formattedDate = format(bookingDate, "EEEE, MMMM d, yyyy");

  await Promise.allSettled([
    sendConfirmationEmail({
      customerName,
      email,
      serviceName: service.name,
      date: formattedDate,
      time,
      bookingId: booking.id,
    }),
    sendAdminNotificationEmail({
      customerName,
      email,
      phone,
      serviceName: service.name,
      date: formattedDate,
      time,
      bookingId: booking.id,
    }),
  ]);

  revalidatePath("/admin/bookings");
  return { success: true, bookingId: booking.id };
}

export async function getBookings(filters: BookingFilters = {}) {
  const { status, serviceId, dateFrom, dateTo, search, page = 1, pageSize = 10 } = filters;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};
  if (status) where.status = status;
  if (serviceId) where.serviceId = serviceId;
  if (dateFrom || dateTo) {
    where.date = {};
    if (dateFrom) where.date.gte = new Date(dateFrom);
    if (dateTo) where.date.lte = new Date(dateTo);
  }
  if (search) {
    where.OR = [
      { customerName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { companyName: { contains: search, mode: "insensitive" } },
    ];
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: { service: true, payment: true },
      orderBy: { date: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.booking.count({ where }),
  ]);

  return { bookings, total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
}

export async function getBookingById(id: string) {
  return prisma.booking.findUnique({
    where: { id },
    include: { service: true, payment: true },
  });
}

export async function updateBooking(id: string, data: unknown) {
  const parsed = updateBookingSchema.safeParse(data);
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateData: any = { ...parsed.data };
  if (updateData.date) {
    updateData.date = new Date(updateData.date);
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: updateData,
    include: { service: true },
  });

  if (parsed.data.status === "CANCELLED") {
    await sendCancellationEmail({
      customerName: booking.customerName,
      email: booking.email,
      serviceName: booking.service.name,
      date: format(booking.date, "EEEE, MMMM d, yyyy"),
      time: booking.time,
    });
  }

  revalidatePath("/admin/bookings");
  revalidatePath(`/admin/bookings/${id}`);
  return { success: true };
}

export async function deleteBooking(id: string) {
  await prisma.booking.delete({ where: { id } });
  revalidatePath("/admin/bookings");
  return { success: true };
}

export async function getAvailableSlots(date: string) {
  const slots = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
  const bookingDate = new Date(date);

  const booked = await prisma.booking.findMany({
    where: {
      date: bookingDate,
      status: { not: "CANCELLED" },
    },
    select: { time: true },
  });

  const bookedTimes = new Set(booked.map((b: { time: string }) => b.time));

  return slots.map((time) => ({
    time,
    available: !bookedTimes.has(time),
  }));
}

export async function getServices() {
  return prisma.service.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
  });
}

export async function getDashboardStats() {
  const [total, pending, confirmed, completed, cancelled, todayCount] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.booking.count({ where: { status: "CONFIRMED" } }),
    prisma.booking.count({ where: { status: "COMPLETED" } }),
    prisma.booking.count({ where: { status: "CANCELLED" } }),
    prisma.booking.count({
      where: {
        date: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
          lt: new Date(new Date().setHours(23, 59, 59, 999)),
        },
      },
    }),
  ]);

  return { total, pending, confirmed, completed, cancelled, todayCount };
}
