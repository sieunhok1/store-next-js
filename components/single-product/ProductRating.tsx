import React from "react";
import { FaStar } from "react-icons/fa";

function ProductRating({ productId }: { productId: string }) {
  console.log(productId);

  const rating = 4.2;
  const count = 25;
  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className="h-3 w-3" />
      {rating} {countValue}
    </span>
  );
}

export default ProductRating;
