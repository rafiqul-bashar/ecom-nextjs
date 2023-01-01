import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cartQuantity } from "../store/slices/cartSlice";

const menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "My Cart",
    url: "/cart",
  },
];

export const MobileMenu = () => {
  return (
    <div className="md:hidden w-full h-[6vh] bg-black z-10 fixed bottom-0">
      <div className="flex space-x-4 ">
        {menu.map((el, i) => (
          <li key={i} className="flex list-none">
            <a
              rel="noopener noreferrer"
              href={el.url}
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent hover:border-violet-400 hover:text-violet-400 transition-all duration-200 ease-in-out"
            >
              {el.title}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const handleMobileMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  const cartItems = useSelector(cartQuantity);
  return (
    <header className="p-4 dark:bg-gray-800  dark:text-gray-100 bg-gray-200">
      <div className="container flex justify-between  items-center h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <h1 className="font-bold tracking-tighter text-2xl text-primary">
            SabStore
          </h1>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {menu.map((el, i) => (
            <li key={i} className="flex">
              <a
                rel="noopener noreferrer"
                href={el.url}
                className="flex items-center px-4 -mb-1 border-b-2  border-transparent hover:border-violet-400 hover:text-violet-400 transition-all duration-200 ease-in-out"
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/cart">
          <span className="relative inline-block">
            <svg
              className="w-6 h-6 text-gray-700  dark:fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>

            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
              {cartItems}
            </span>
          </span>
        </Link>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded  bg-violet-400  text-gray-900">
            Sign up
          </button>
        </div>
      </div>
      {/* MobileMenu */}
    </header>
  );
}
