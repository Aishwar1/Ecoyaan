"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("addresses");
      return data ? JSON.parse(data) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);