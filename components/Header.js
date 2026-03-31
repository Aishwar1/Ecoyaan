"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          Ecoyaan
        </Link>

        {/* SEARCH */}
        <input
          placeholder="Search eco products..."
          className="hidden md:block w-1/2 border rounded-lg px-4 py-2"
        />

        {/* CART */}
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </Link>

      </div>

    </header>
  );
}