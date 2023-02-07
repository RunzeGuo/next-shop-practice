import Title from "@/components/Title";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import Head from "next/head";
import ProductCard from "@/components/ProductCard";

export async function getStaticProps() {
  console.log("[HomePage]: getStaticProps()");
  const products = await getProducts();
  return { props: { products }, revalidate: 10 };
}

function HomePage({ products }) {
  console.log("[HomePage] render: ", products);
  return (
    <>
      <Head>
        <title>Next Shop Practice</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop</Title>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
