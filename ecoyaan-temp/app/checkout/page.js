"use client";

import Stepper from "../../components/Stepper";
import { useAddress } from "../../context/AddressContext";
import { useState } from "react";

export default function Checkout() {
  const { addresses, setAddresses } = useAddress();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  // ✅ SAVE ADDRESS
  function handleSubmit(e) {
    e.preventDefault();

    const updated = [...addresses, form];
    setAddresses(updated);

    // persist

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
    });
  }

  // ✅ DELETE ADDRESS
  const deleteAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Stepper step={1} />

      <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>

      {/* SAVED ADDRESSES */}
      <div className="space-y-3 mb-6">
        {addresses.length > 0 ? (
          addresses.map((addr, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{addr.name}</p>
                <p className="text-sm text-gray-500">
                  {addr.city}, {addr.state}
                </p>
              </div>

              <button
                onClick={() => deleteAddress(i)}
                className="text-red-500 text-sm font-medium hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved addresses yet.</p>
        )}
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md border"
      >
        <h2 className="text-lg font-semibold mb-4">Add New Address</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={form.name}
            placeholder="Full Name"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            value={form.email}
            placeholder="Email"
            type="email"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            value={form.phone}
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            required
          />

          <input
            placeholder="PIN Code"
            className="border p-3 rounded-lg w-full"
          />

          <input
            value={form.city}
            placeholder="City"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            required
          />

          <input
            value={form.state}
            placeholder="State"
            className="border p-3 rounded-lg w-full"
            onChange={(e) =>
              setForm({ ...form, state: e.target.value })
            }
            required
          />
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90">
          Save Address
        </button>
      </form>
    </div>
  );
}