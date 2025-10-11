import { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.paypal.com/ncp/payment/4RLAS43U5NGNJ";
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center p-8 bg-gradient-to-br from-[#1b1b1b] via-[#222] to-[#1b1b1b] rounded-xl shadow-2xl border-2 border-orange-500 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">
          Juvenilia Technology
        </h1>
        <h2 className="text-xl text-white mb-6">
          Redirecting to PayPal...
        </h2>
        <p className="text-gray-300 mb-6">
          Please wait a moment while we prepare your secure payment.
        </p>

        {/* Loader */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          If you are not redirected automatically, click <a href="https://www.paypal.com/ncp/payment/4RLAS43U5NGNJ" className="text-orange-500 underline">here</a>.
        </p>
      </div>
    </div>
  );
}
