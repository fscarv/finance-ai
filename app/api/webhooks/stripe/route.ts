import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: Request) => {
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
        return NextResponse.error();
    };

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
        return NextResponse.error();
    };

    const text = await req.text();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2024-10-28.acacia",
    });

    const event = stripe.webhooks.constructEvent(
        text,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
    );

    switch (event.type) {
        case "invoice.paid": {
            const { customer, subscription, subscription_details } = event.data.object;
            const clerkUserId = subscription_details?.metadata?.clerk_client_id;

            if (!clerkUserId) {
                return NextResponse.error();
            };

            await clerkClient().users.updateUser(clerkUserId, {
                privateMetadata: {
                    stripeCustomerId: customer,
                    stripeSubscriptionId: subscription,
                },
                publicMetadata: {
                    subscriptionPlan: "premium",
                },
            });
        break;
        }
        case "customer.subscription.deleted": {
            // Remover plano premium do usuário
            const subscription = await stripe.subscriptions.retrieve(
                event.data.object.id
            );

            const clerkUserId = subscription.metadata.clerk_client_id;
            if (!clerkUserId) {
                return NextResponse.error();
            };
            await clerkClient().users.updateUser(clerkUserId, {
                privateMetadata: {
                    stripeCustomerId: null,
                    stripeSubscriptionId: null,
                },
                publicMetadata: {
                    subscriptionPlan: "free",
                },
            });
            break;
        }
    }
    return NextResponse.json({ received: true }); // status: 200
};