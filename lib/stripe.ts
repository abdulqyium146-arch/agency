import Stripe from "stripe";

export function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2026-05-27.dahlia",
    typescript: true,
  });
}

// Named export kept for backwards compat
export const stripe = {
  get checkout() { return getStripe().checkout; },
  get webhooks() { return getStripe().webhooks; },
};

export async function createCheckoutSession({
  bookingId,
  serviceName,
  amount,
  customerEmail,
}: {
  bookingId: string;
  serviceName: string;
  amount: number;
  customerEmail: string;
}) {
  const stripeClient = getStripe();
  const session = await stripeClient.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: serviceName },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    metadata: { bookingId },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/book/cancel`,
  });

  return session;
}
