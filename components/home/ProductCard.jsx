import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
export default function ProductCard({
  id,
  title,
  category,
  price,

  image,
}) {
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
    <div className="h-[36vh]  bg-white/90 p-2 hover:shadow-lg md:h-[400px] md:w-[188px]">
      <Link href={`/product/${id}`} className=" block overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="h-20 md:h-[188px] md:w-[188px]  w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[180px] mb-2"
        />

        <div className="">
          <h3 className="uppercase text-xs  group-hover:underline group-hover:underline-offset-4 text-gray-600 mb-1">
            {category}
          </h3>

          <h3 className="h-20 md:h-18 overflow-hidden text-sm  uppercase   group-hover:underline group-hover:underline-offset-4 ">
            {title}
          </h3>
          <br />

          <div className="flex flex-col justify-center space-y-1 items-center ">
            <div className="flex items-center mr-auto ">
              <span className="tracking-wider text-lg font-semibold">
                {" "}
                $ {price + " "}{" "}
              </span>
              <span className="tracking-wider text-sm ml-2"> USD </span>
            </div>
            <button className="bg-primary text-white w-full py-1">
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
    // <div className="relative mx-auto overflow-hidden max-w-[520px]  shadow-md flex dark:text-gray-100 capitalize ">
    //   <div>
    //     <img
    //       src={image}
    //       alt={title}
    //       className="h-[320px] w-[280px] md:h-[420px] md:w-[320px]"
    //     />
    //   </div>
    //   <div className="h-[30%] flex flex-col px-4 md:px-8">
    //     <p>{category}</p>
    //     <h2>{title}</h2>
    //     <br />
    //     <p className="h-[40%]">{description}</p>
    //     <br />

    //     <div className="h-[30%] flex  justify-between items-center">
    //       <div className="">${price}</div>
    //       <button className="button">Add to cart</button>
    //     </div>
    //   </div>
    // </div>

    // ANother Card
    // <div className="flex flex-col max-w-md overflow-hidden  rounded-sm shadow-lg bg-gray-200 dark:bg-gray-700 md:h-[40vh]">
    //   <div className="w-1/4 h-1/4 mx-auto">
    //     <img src={image} alt={title} className="p-2" />
    //   </div>

    //   <div className=" p-4 md:p-4 w-full">
    //     <h1 className="md:text-2xl font-bold text-gray-800 dark:text-white">
    //       {title}
    //     </h1>
    //     <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
    //     </p>

    //     <div className="flex flex-col md:flex-row justify-between mt-3 item-center">
    //       <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
    //         ${price}
    //       </h1>
    //       <button
    //         onClick={handleAddtoCart}
    //         className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
