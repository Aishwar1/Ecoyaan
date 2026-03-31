"use client";

export default function Stepper({ step }) {
  const steps = ["Cart", "Address", "Payment", "Success"];

  return (
    <div className="flex justify-between mb-6">

      {steps.map((s, i) => (
        <div key={i} className="flex-1 text-center">

          <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center 
            ${i <= step ? "bg-black text-white" : "bg-gray-300"}`}>
            {i + 1}
          </div>

          <p className="text-xs mt-2">{s}</p>

        </div>
      ))}

    </div>
  );
}