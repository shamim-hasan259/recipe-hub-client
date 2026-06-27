import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getUserSession } from "@/lib/session/session";

export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const user = await getUserSession();
    const formData = await request.formData();
    const price = formData.get("price");
    const title = formData.get("title");
    const recipeId = formData.get("productId");
    const image = formData.get("image");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(price) * 100,
            product_data: {
              name: title,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        price: price,
        userId: user?.id,
        userEmail: user?.email,
        title,
        recipeId,
        image,
      },
      mode: "payment",
      success_url: `${origin}/success/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
