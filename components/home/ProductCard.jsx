import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { ProductsContext } from "../ProductsContext";

export default function ProductCard({ id, title, price, description, image }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(addToCart({ id, title, image, price, cartQuantity: 1 }));
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse ">
        <div className="h-48 rounded-t dark:bg-gray-700"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
          <div className="w-full h-6 rounded dark:bg-gray-700"></div>
          <div className="w-full h-6 rounded dark:bg-gray-700"></div>
          <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col max-w-md overflow-hidden  rounded-sm shadow-lg bg-gray-200 dark:bg-gray-700 md:h-[40vh]">
      <div className="w-1/4 h-1/4 mx-auto">
        <img src={image} alt={title} className="p-2" />
      </div>

      <div className=" p-4 md:p-4 w-full">
        <h1 className="md:text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        </p>

        <div className="flex flex-col md:flex-row justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            ${price}
          </h1>
          <button
            onClick={handleAddtoCart}
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
