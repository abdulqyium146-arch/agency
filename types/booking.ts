import type { Booking, Service, Payment, BookingStatus, PaymentStatus } from "@prisma/client";

export type BookingWithRelations = Booking & {
  service: Service;
  payment?: Payment | null;
};

export type { BookingStatus, PaymentStatus };

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFilters {
  status?: BookingStatus;
  serviceId?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface PaginatedBookings {
  bookings: BookingWithRelations[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
