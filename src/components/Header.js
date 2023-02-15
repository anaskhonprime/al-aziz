import { React, useState, useEffect } from "react";

const Header = () => {
  return (
    <section className="header-banner h-96 w-full bg-yellow-50 mt-20">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-center text-3xl md:text-6xl lg:text-5xl poppins font-bold text-green-700">
          Al-Aziz
        </p>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-normal text-gray-700 mt-3">
          Asian Cuisine
        </p>
      </div>
    </section>
  );
};

export default Header;
