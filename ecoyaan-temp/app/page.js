import Stepper from "../components/Stepper";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import data from "../data/mockData.json";

export default function Page() {
  const cart = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Stepper step={0} />

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((item) => (
              <CartItem key={item.product_id} item={item} />
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border h-fit">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}