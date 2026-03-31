"use client";

import Stepper from "../../components/Stepper";
import { useAddress } from "../../context/AddressContext";
import { useRouter } from "next/navigation";

export default function Payment() {
  const { addresses } = useAddress();
  const router = useRouter();

  const address = addresses[addresses.length - 1];

  return (
    <>
      <Stepper step={2} />

      <h1 className="text-2xl font-bold mb-4">Payment</h1>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="font-medium">{address?.name}</p>
        <p>{address?.city}</p>
      </div>

      <button
        onClick={() => router.push("/success")}
        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg"
      >
        Pay Securely
      </button>
    </>
  );
}