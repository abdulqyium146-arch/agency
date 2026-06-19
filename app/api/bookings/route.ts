import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getBookings } from "@/app/actions/booking";
import type { BookingStatus } from "@/types/booking";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const params = req.nextUrl.searchParams;
  const statusParam = params.get("status");
  const bookings = await getBookings({
    status: statusParam ? (statusParam as BookingStatus) : undefined,
    serviceId: params.get("serviceId") ?? undefined,
    dateFrom: params.get("dateFrom") ?? undefined,
    dateTo: params.get("dateTo") ?? undefined,
    search: params.get("search") ?? undefined,
    page: Number(params.get("page") ?? 1),
    pageSize: Number(params.get("pageSize") ?? 10),
  });

  return NextResponse.json(bookings);
}
