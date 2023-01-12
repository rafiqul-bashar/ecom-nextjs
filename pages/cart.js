import React from "react";
import { Footer, Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  cartQuantity,
  getTotals,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className=" w-screen bg-gray-100 text-center text-gray-800 py-12">
      <img
        className="h-0 w-28 mx-auto my-2"
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
      />
      <h2 className="tracking-tight text-4xl ">
        {" "}
        Your cart is currently empty
      </h2>
      <Link href="/products">
        <button className="px-8 py-2 rounded-md my-4 border-primary border-2 bg-primary font-semibold text-white tracking-wider cursor-pointer focus:border-white ">
          Return to shop
        </button>
      </Link>
    </div>
  );
};

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const itemsQuantity = useSelector(cartQuantity);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <>
      <Header />
      {itemsQuantity == 0 && <EmptyCart />}
      {itemsQuantity !== 0 && (
        <div className="w-screen text-gray-900 flex justify-center bg-gray-100">
          <div className="flex flex-col md:w-[60vw] p-6 space-y-4 sm:p-10  ">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {cartItems &&
                cartItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-contain w-20 h-20  border-transparent rounded outline-none sm:w-32 sm:h-32 "
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                              {item.title}
                            </h3>
                            {/* <p className="text-sm  text-gray-400">Classic</p> */}
                          </div>
                          <div className="flex items-center space-x-8">
                            <p className="text-lg font-semibold">
                              {item.price}$
                            </p>
                            <p className="text-lg font-semibold">X</p>
                            <p className="text-lg font-semibold">
                              {item.cartQuantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">{cartTotal} $</span>
              </p>
              <p className="text-sm  text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href="/products">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md  border-violet-400"
                >
                  Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
              </Link>
              <button
                type="button"
                className="px-6 py-2 border rounded-md  bg-violet-400  text-gray-900  border-violet-400"
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
