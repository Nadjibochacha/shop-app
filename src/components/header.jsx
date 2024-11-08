import React, { useEffect, useState } from "react";
import logo_main from "../assets/shop-logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./darkMode";
import { Link } from "react-router-dom";

const Header = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const items = [
      { id: 1, name: "Home", url: "/" },
      { id: 2, name: "About", url: "/about" },
      { id: 3, name: "Contact", url: "/contact" },
      { id: 4, name: "Men", url: "/men" },
      { id: 5, name: "Women", url: "/women" },
      { id: 6, name: "Children", url: "/children" },
    ];
    setNavItems(items);
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40">
      {/* upper nav */}
      <div className="bg-primary/40">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <a href="/">
            <img src={logo_main} alt="Shop Logo" className="w-28" />
          </a>
          {/* search bar and order button */}
          <div className="flex items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300
                rounded-full border border-gray-300 px-2 py-1
                focus:outline-none focus:border focus:border-orange-400"
              />
              <IoMdSearch
                aria-hidden="true"
                className="absolute text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            <button
              onClick={() => alert("Ordering not available!")}
              className="bg-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
              aria-label="Order"
            >
              <span className="hidden group-hover:inline transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-white drop-shadow-sm text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* items navbar */}
      <div className="bg-white dark:bg-gray-800 py-2">
        <ul className="container mx-auto flex justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.id} className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">
              <Link to={item.url} className="capitalize">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
