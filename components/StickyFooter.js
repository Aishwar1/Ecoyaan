"use client";

import { useRouter, usePathname } from "next/navigation";

export default function StickyFooter() {
  const router = useRouter();
  const path = usePathname();

  function nextStep() {
    if (path === "/") router.push("/checkout");
    else if (path === "/checkout") router.push("/payment");
    else if (path === "/payment") router.push("/success");
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-4 flex justify-between z-50">

      <button
        onClick={() => router.back()}
        className="px-6 py-2 border rounded-lg"
      >
        Back
      </button>

      <button
        onClick={nextStep}
        className="px-6 py-2 bg-black text-white rounded-lg"
      >
        Next Step
      </button>

    </div>
  );
}