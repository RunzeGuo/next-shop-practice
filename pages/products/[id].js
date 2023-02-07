import { getProduct, getProducts } from "@/lib/products";
import Head from "next/head";
import Title from "@/components/Title";

export async function getStaticPaths() {
  const products = await getProducts();
  const productsPath = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths: productsPath,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);
  return {
    props: { product },
  };
}

function ProductPage({ product }) {
  console.log("[ProductPage] render: ", product);
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="p-2">
        <img src={product.pictureUrl} alt="" />
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}

export default ProductPage;
