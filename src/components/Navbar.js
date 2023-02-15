import { React, useState, useEffect } from "react";
import logo from "../asset/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white px-5 sm:px-4 py-6 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center ml-5">
            <img src={logo} className="h-8 mr-5 sm:h-16" alt="Main Logo" />
          </div>
          <div className="flex md:order-2 mr-6">
            <button
              type="button"
              className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Menu
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
