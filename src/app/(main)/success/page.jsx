import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { addSubscription } from "@/lib/actions/subscription";

const SuccessPage = async ({ searchParams }) => {
  const params = await searchParams;
  const session_id = params?.session_id;

  if (!session_id) {
    throw new Error("Please provide a valid session_id");
  }

  const {
    payment_intent,
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    redirect("/");
  }
  if (status === "complete") {
    await addSubscription({
      ...metadata,
      transaction_id: payment_intent?.id,
      sessionId: session_id,
    });
  }
  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0c1017] flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-[#111c2a] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center shadow-xl transition-colors duration-300">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center text-green-500 dark:text-green-400 text-4xl animate-pulse">
            ✓
          </div>
        </div>

        <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-3 font-serif tracking-tight">
          Payment Successful!
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 px-2 leading-relaxed">
          Thank you for your purchase! Your account has been upgraded to{" "}
          <span className="font-semibold text-orange-500 dark:text-orange-400">
            Premium Lifetime
          </span>
          . Enjoy unlimited recipe uploads and exclusive features.
        </p>

        <div className="bg-gray-50 dark:bg-[#162235] border border-gray-100 dark:border-gray-700/50 rounded-xl p-4 mb-8 text-left text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Payment Status</span>
            <span className="text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-950/30 px-2 py-0.5 rounded text-xs">
              Paid
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Amount Paid</span>
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              $9.99 USD
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Access</span>
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              Lifetime
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/dashboard/user"
            className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium shadow-md shadow-blue-500/20 transition-all text-sm"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="block w-full text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium py-2 text-xs transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
