import Stepper from "../components/Stepper";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

async function getCart() {
  const res = await fetch("/api/cart", { cache: "no-store" })
  return res.json();
}

export default async function Page() {
  const cart = await getCart();

  return (
    <>
      <Stepper step={0} />

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 space-y-4">
          {cart.cartItems.map((item) => (
            <CartItem key={item.product_id} item={item} />
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <OrderSummary cart={cart} />
        </div>

      </div>
    </>
  );
}