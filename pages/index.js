import Title from "@/components/Title";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Next Shop Practice</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop</Title>
        <p>Contents</p>
      </main>
    </>
  );
}

export default HomePage;
