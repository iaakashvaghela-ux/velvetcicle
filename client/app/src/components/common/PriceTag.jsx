export default function PriceTag({ price, discount, className = "" }) {
  const finalPrice = discount > 0 ? price - (price * (discount / 100)) : price;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-xl font-black text-black dark:text-white">
        ${finalPrice.toFixed(0)}
      </span>
      {discount > 0 && (
        <>
          <span className="text-sm text-gray-400 line-through font-medium">
            ${price}
          </span>
          <span className="text-xs font-black text-red-500 uppercase tracking-widest">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}
