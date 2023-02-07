import Link from "next/link";

function ProductCard({ product }) {
  return (
    <div className="border my-4 w-80">
      <Link href={`/products/${product.id}`}>
        <img src={product.pictureUrl} alt="" />
        <div className="p-2 flex justify-between">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;