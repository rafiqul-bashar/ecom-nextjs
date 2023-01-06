import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cartQuantity } from "../store/slices/cartSlice";
import { BsCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
const menu = [
  {
    title: "Home",
    url: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Categories",
    url: "/products",
    icon: <MdCategory />,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: <BsCartFill />,
  },
];

export const MobileMenu = ({ user = false }) => {
  return (
    <div className="md:hidden  w-screen h-[10vh] bg-white shadow-md  z-10 fixed bottom-0">
      <div className="flex justify-center items-center space-x-2">
        {menu.map((el, i) => (
          <a
            rel="noopener noreferrer"
            href={el.url}
            className="flex items-center px-4 -mb-1 border-b-2  border-transparent hover:border-violet-400 hover:text-violet-400 transition-all duration-200 ease-in-out"
          >
            <div
              className="flex flex-col items-center space-y-1 text-gray-500 mt-2 "
              key={i}
            >
              <span className="w-5 h-5">{el.icon}</span>
              <li key={i} className=" list-none inline-block ">
                {el.title}
              </li>
            </div>
          </a>
        ))}
        <a
          rel="noopener noreferrer"
          href={user ? "/account" : "/auth"}
          className="flex items-center px-4 -mb-1 border-b-2  border-transparent hover:border-violet-400 hover:text-violet-400 transition-all duration-200 ease-in-out"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500 mt-2 ">
            <span>
              <FaUserAlt className="w-4 h-4" />
            </span>
            <li className=" list-none inline-block ">
              {user ? "Profile" : "Login"}
            </li>
          </div>
        </a>
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
    <header className="w-screen overflow-auto bg-primary text-white px-4 ">
      <div className="container flex justify-between  items-center h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <h1 className="font-bold tracking-tighter text-2xl">SabStore</h1>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {menu.map((el, i) => (
            <li key={i} className="flex">
              <a
                rel="noopener noreferrer"
                href={el.url}
                className="flex items-center font-semibold tracking-wider text-md xl:text-xl px-4 -mb-1 border-b-2  border-transparent hover:scale-95 hover:text-gray-200 hover:border-gray-300 transition-all duration-200 ease-in-out"
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/cart">
          <div className="relative ">
            <BsCartFill className="h-7 w-7 mr-2" />
            <span class="absolute top-1  right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
              {cartItems}
            </span>
          </div>
        </Link>
        <div className="items-center flex-shrink-0 hidden lg:flex font-semibold tracking-wider text-lg xl:text-xl">
          <button className="self-center px-8 py-3 rounded  hover:scale-95 transition-all duration-200 ease-in-out ">
            Sign in
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded  bg-violet-400  text-gray-900 hover:scale-95 transition-all duration-200 ease-in-out">
            Sign up
          </button>
        </div>
      </div>
      {/* MobileMenu */}
    </header>
  );
}
