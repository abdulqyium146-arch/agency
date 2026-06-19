import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots } from "@/app/actions/booking";
import { rateLimit } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  if (!rateLimit(ip, 30)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const date = req.nextUrl.searchParams.get("date");
  if (!date) return NextResponse.json({ error: "Date required" }, { status: 400 });

  const slots = await getAvailableSlots(date);
  return NextResponse.json(slots);
}
