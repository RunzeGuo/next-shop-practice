import Title from "@/components/Title";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import Head from "next/head";

export async function getStaticProps() {
  console.log("[HomePage]: getStaticProps()");
  // const response = await fetch("http://localhost:1337/api/products");
  // const { data } = await response.json();
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
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                {product.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
