export default function OrderSummary({ cart }) {
  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cart.shipping_fee;

  return (
    <div>
      <h2 className="font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{cart.shipping_fee}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
}