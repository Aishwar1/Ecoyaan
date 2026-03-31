import Stepper from "../components/Stepper";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { headers } from "next/headers";

async function getCart() {
  try {
    const headersList = headers();
    const host = headersList.get("host");

    const protocol =
      process.env.NODE_ENV === "development" ? "http" : "https";

    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/cart`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch cart");

    return res.json();
  } catch (error) {
    console.error("Cart fetch error:", error);

    // fallback (so UI doesn't crash)
    return {
      cartItems: [],
      shipping_fee: 0,
      discount_applied: 0,
    };
  }
}

export default async function Page() {
  const cart = await getCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Stepper step={0} />

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-4">
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((item) => (
              <CartItem key={item.product_id} item={item} />
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-2xl shadow-md border h-fit">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}