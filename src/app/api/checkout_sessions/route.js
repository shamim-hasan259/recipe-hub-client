import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getUserSession } from "@/lib/session/session";

export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const priceId = "price_1TlLMWFyEPBZ3rFpXJ05ppqy";
    const user = await getUserSession();

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        priceId: priceId,
        userId: user?.id,
        userEmail: user?.email,
        plan: user?.plan,
        amount: 9.99,
      },
      mode: "subscription",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
