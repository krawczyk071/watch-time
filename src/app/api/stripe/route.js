import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// card 4242 4242 4242 4242

export async function POST(request) {
  try {
    const jsonValue = await request.json();
    const origin = request.headers.get("origin");
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NBCgGAlVPvHxSVQhTOO2Gsy" }],
      line_items: jsonValue.map((item) => {
        //   const newImage = urlForImage(item.images[0]);
        const img = item.images[0].asset._ref;
        const newImage = img
          .replace(
            "image-",
            "https://cdn.sanity.io/images/7t28rzgo/production/"
          )
          .replace("-webp", ".webp")
          .replace("-jpg", ".jpg");

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: parseInt(item.price * 100),
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${origin}/confirm`,
      cancel_url: `${origin}/canceled`,
    };

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);

    // res.status(200).json(session);
    return NextResponse.json(session);
  } catch (error) {
    return new Response("Payment failed", { status: 500 });
  }
}
