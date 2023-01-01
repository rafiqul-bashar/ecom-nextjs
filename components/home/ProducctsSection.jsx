import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProducctsSection({ products }) {
  const [phrase, setPhrase] = useState("");

  const [productLoading, setProductLoading] = useState(true);

  const categoriesNames = [...new Set(products?.map((p) => p.category))];
  useEffect(() => {
    if (products?.length) {
      setProductLoading(false);
    }
  }, [products]);

  // if (phrase) {
  //   products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  // }

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoriesNames.map((categoryName) => (
            <h2
              key={categoryName}
              className="capitalize font-semibold tracking-wide cursor-pointer p-2 text-white bg-violet-400 text-center dark:text-violet-400 dark:bg-gray-800"
            >
              {categoryName}
            </h2>
          ))}
        </div>
        <br />
        {productLoading ? (
          <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t  bg-gray-700"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8  bg-gray-900">
              <div className="w-full h-6 rounded  bg-gray-700"></div>
              <div className="w-full h-6 rounded  bg-gray-700"></div>
              <div className="w-3/4 h-6 rounded  bg-gray-700"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products?.map((productInfo) => (
              <div key={productInfo.id} className="px-5 snap-start">
                <ProductCard {...productInfo} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Paginatin */}
      <div className="flex justify-center space-x-1  text-gray-100">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  bg-gray-900  border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          title="Page 1"
          className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  bg-gray-900  text-violet-400  border-violet-400"
        >
          1
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  bg-gray-900  border-gray-800"
          title="Page 2"
        >
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  bg-gray-900  border-gray-800"
          title="Page 3"
        >
          3
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  bg-gray-900  border-gray-800"
          title="Page 4"
        >
          4
        </button>
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  bg-gray-900  border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}
