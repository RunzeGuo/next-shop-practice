import Link from "next/link";
import styles from "./productCard.module.scss";

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border my-4 w-80 flex">
        <div className={styles.photo}>
          <img src={product.pictureUrl} alt="" />
        </div>
        <div className="p-2 flex-col justify-between">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>{product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
