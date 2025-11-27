import React from "react";
import axios from "axios";
import { loadScript } from "../utils/loadRazorpay";

export default function PaymentButton({ amount }) {
  const handlePayment = async () => {
    // 1) Load Razorpay script
    const loaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    // 2) Create order using Axios
    const orderRes = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/create-order`,
      { amount }
    );

    const order = orderRes.data;

    // 3) Prepare Razorpay checkout options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Your Company",
      description: "Payment Transaction",
      order_id: order.id,

      handler: async function (response) {
        // 4) Verify payment using Axios
        const verifyRes = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/verify-payment`,
          response
        );

        if (verifyRes.data.ok) {
          alert("Payment Successful & Verified");
        } else {
          alert("Payment verification failed");
        }
      },
    };

    // 5) Open Razorpay widget
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay ₹{amount}</button>;
}