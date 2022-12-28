import { setLazyProp } from "next/dist/server/api-utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header, HeroSection, ProducctsSection } from "../components";
import ProductCard from "../components/home/ProductCard";
import Layout from "../components/Layout";
export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Ecom NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Layout>
          <HeroSection />
          {/* <input
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="bg-gray-200 w-full py-2 px-4 rounded-xl"
          /> */}
          <ProducctsSection products={products} />
        </Layout>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
