"use client";

import { Button } from "@/app/_components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";

const AcquirePlanButton = () => {

    const handleAcquirePlanClick = async () => {
        const { sessionId } = await createStripeCheckout();

        if(!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY){
            throw new Error("Stripe key not found");
        };

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,);

        if(!stripe){
            throw new Error("Stripe not initialized");
        };

        await stripe.redirectToCheckout({ sessionId });
    };

    return (
        <Button
            className="w-full rounded-full mt-4 font-bold"
            onClick={handleAcquirePlanClick}
        >
            Adquirir plano
        </Button>
    );
}

export default AcquirePlanButton;