"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);

  // ✅ LOAD from localStorage (only once)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("addresses");
      if (stored) {
        setAddresses(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Error loading addresses:", err);
    }
  }, []);

  // ✅ SAVE to localStorage (whenever changed)
  useEffect(() => {
    try {
      localStorage.setItem("addresses", JSON.stringify(addresses));
    } catch (err) {
      console.error("Error saving addresses:", err);
    }
  }, [addresses]);

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
}

// ✅ SAFE HOOK
export const useAddress = () => {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error("useAddress must be used inside AddressProvider");
  }

  return context;
};