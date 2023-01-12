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
    icon: <AiFillHome className="w-5 h-5 md:h-6 md:w-6" />,
  },
  {
    title: "Categories",
    url: "/products",
    icon: <MdCategory className="w-5 h-5 md:h-6 md:w-6" />,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: <BsCartFill className="w-5 h-5 md:h-6 md:w-6" />,
  },
];

export const MobileMenu = ({ user = false }) => {
  return (
    <div className="md:hidden  w-screen h-[10vh] bg-white shadow-md  z-10 fixed bottom-0">
      <div className="flex justify-center items-center space-x-2">
        {menu.map((el, i) => (
          <Link
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
          </Link>
        ))}
        <Link
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
        </Link>
      </div>
    </div>
  );
};

export default function Header() {
  const cartItems = useSelector(cartQuantity);
  return (
    <header className="overflow-auto bg-primary text-white px-4 ">
      <div className="container flex justify-between  items-center h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <h1 className="font-bold tracking-tighter text-2xl">SabStore</h1>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {menu.map((el, i) => (
            <li
              key={i}
              className="flex items-center hover:scale-95 hover:text-gray-200 transition-all duration-200 ease-in-out"
            >
              <span>{el.icon}</span>
              <Link
                rel="noopener noreferrer"
                href={el.url}
                className="flex items-center font-semibold tracking-wider text-base xl:text-lg px-4 "
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/cart">
          <div className="relative hover:scale-95 hover:text-gray-200 transition-all duration-200 ease-in-out ">
            <BsCartFill className="h-6 w-6 mr-2" />
            <span class="absolute top-1  right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 transform translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-full">
              {cartItems}
            </span>
          </div>
        </Link>
        <Link href="/auth">
          <div className="items-center flex-shrink-0 hidden lg:flex font-semibold tracking-wider text-lg xl:text-xl hover:scale-95 transition-all duration-200 ease-in-out hover:opacity-90">
            <FaUserAlt className="w-4 h-4" />
            <button className="self-center px-2 py-3 rounded  ">Login</button>
          </div>
        </Link>
      </div>
      {/* MobileMenu */}
    </header>
  );
}
