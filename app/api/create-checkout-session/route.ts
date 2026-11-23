import Stripe from "stripe";
import { NextResponse } from "next/server";
import { menuItems } from "../../data/menu";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe is not configured on this server." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { items?: Array<{ id: string; quantity: number }>; fulfillment?: string };
    const requestedItems = body.items ?? [];
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = requestedItems
      .flatMap(({ id, quantity }) => {
        const item = menuItems.find((menuItem) => menuItem.id === id);
        if (!item || !Number.isInteger(quantity) || quantity < 1 || quantity > 25) return [];
        return [{
          price_data: {
            currency: "usd",
            product_data: { name: item.name, description: item.description },
            unit_amount: Math.round(item.price * 100),
          },
          quantity,
        }];
      })

    if (!lineItems.length) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      invoice_creation: { enabled: true },
      customer_creation: "always",
      metadata: { fulfillment: body.fulfillment === "delivery" ? "delivery" : "local_pickup" },
      success_url: `${origin}/checkout?success=1`,
      cancel_url: `${origin}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error", error);
    return NextResponse.json({ error: "Unable to start Stripe checkout." }, { status: 500 });
  }
}
