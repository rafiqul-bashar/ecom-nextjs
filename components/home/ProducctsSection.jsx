import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import ProductCard from "./ProductCard";

export default function ProducctsSection({ products }) {
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
              className="capitalize font-semibold tracking-wide cursor-pointer p-2 text-gray-800 text-center  bg-gray-200"
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
          <div className="grid grid-cols-2 md:grid-cols-6  gap-x-2 md:px-2 gap-y-4">
            {products?.map((productInfo) => (
              <div key={productInfo.id} className="px-2 snap-start">
                <ProductCard {...productInfo} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Paginatin */}
      <Pagination />
    </>
  );
}
