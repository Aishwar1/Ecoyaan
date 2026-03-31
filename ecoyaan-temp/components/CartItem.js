export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">

      <img src={item.image} className="w-20 h-20 rounded-lg" />

      <div>
        <h3 className="font-semibold">{item.product_name}</h3>
        <p className="text-gray-600">₹{item.product_price}</p>
        <p className="text-sm">Qty: {item.quantity}</p>
      </div>

    </div>
  );
}