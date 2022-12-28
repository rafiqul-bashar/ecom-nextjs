import React, { useState } from "react";

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
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="p-4  bg-gray-800  text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          L\
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
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded  bg-violet-400  text-gray-900">
            Sign up
          </button>
        </div>

        {menuOpen && (
          <div className="h-screen bg-gray-600 w-[80vw] absolute top-0 right-0  z-10 ease-linear duration-200 transition-all">
            <button
              onClick={handleMobileMenu}
              className="p-4 lg:hidden top-4 right-4 absolute"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6  text-gray-100"
                viewBox="0 0 320 512"
                fill="white"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
            <div className=" flex flex-col gap-12  mt-20">
              <ul className="items-stretch  space-y-8">
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
            </div>
          </div>
        )}
        <button onClick={handleMobileMenu} className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6  text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
