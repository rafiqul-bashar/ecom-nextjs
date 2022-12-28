import React, { useEffect, useState } from "react";
import { Header, Footer } from "../components";
import ProductCard from "../components/home/ProductCard";
export default function products({ products }) {
  const categoriesNames = [...new Set(products.map((p) => p.category))];

  const switchDisplayProducts = (parameter) => {
    switch (parameter) {
      case categoriesNames[0]:
        return categoriesNames[0];
      case categoriesNames[1]:
        return categoriesNames[1];
      case categoriesNames[2]:
        return categoriesNames[2];
      case categoriesNames[3]:
        return categoriesNames[3];
      default:
        return "all";
    }
  };
  const [productsToShow, setProductsToShow] = useState("all");
  const [productsInShow, setProductsInShow] = useState([]);

  useEffect(() => {
    if (productsToShow === "all") {
      setProductsInShow(products);
    } else {
      const matchProducts = products.filter(
        (el) => el.category === productsToShow
      );
      setProductsInShow(matchProducts);
    }
  }, [productsToShow]);

  console.log(productsInShow);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <aside className=" md:h-screen p-6 sm:w-60 bg-gray-900 text-gray-100">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                Catagories
              </h2>
              <div className="flex flex-col space-y-1">
                <div>
                  <h2
                    onClick={() => {
                      setProductsToShow("all");
                    }}
                    className="text-xl cursor-pointer py-5 capitalize"
                  >
                    All Products
                  </h2>
                </div>
                {categoriesNames.map((categoryName) => (
                  <div key={categoryName}>
                    {products.find((p) => p.category === categoryName) && (
                      <div>
                        <h2
                          onClick={() => {
                            setProductsToShow(categoryName);
                          }}
                          className="text-xl cursor-pointer py-5 capitalize"
                        >
                          {categoryName}
                        </h2>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </aside>
        <div className="h-screen py-4 overflow-auto bg-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productsInShow?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
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
