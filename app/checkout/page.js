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

  function handleSubmit(e) {
    e.preventDefault();
    setAddresses([...addresses, form]);
  }

  return (
    <>
      <Stepper step={1} />

      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>

      {/* SAVED */}
      <div className="space-y-3 mb-6">
        {addresses.map((addr, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
            <p className="font-medium">{addr.name}</p>
            <p className="text-sm text-gray-500">{addr.city}, {addr.state}</p>
          </div>
        ))}
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl space-y-4">

        <input className="input" placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}/>

        <input className="input" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <input className="input" placeholder="Phone"
          onChange={(e)=>setForm({...form,phone:e.target.value})}/>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="City"
            onChange={(e)=>setForm({...form,city:e.target.value})}/>
          <input className="input" placeholder="State"
            onChange={(e)=>setForm({...form,state:e.target.value})}/>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Save Address
        </button>

      </form>
    </>
  );
}