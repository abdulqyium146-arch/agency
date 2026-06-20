export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { bookingId } = await req.json();

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { service: true },
  });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: booking.email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: booking.service.name },
          unit_amount: Math.round(booking.service.price * 100),
        },
        quantity: 1,
      },
    ],
    metadata: { bookingId },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/book/cancel`,
  });

  await prisma.payment.upsert({
    where: { bookingId },
    update: { stripeSessionId: session.id, status: "PENDING" },
    create: {
      bookingId,
      stripeSessionId: session.id,
      amount: booking.service.price,
      status: "PENDING",
    },
  });

  return NextResponse.json({ url: session.url });
}