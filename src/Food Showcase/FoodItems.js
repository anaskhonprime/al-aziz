import React, { useState, useEffect } from "react";

import foodData from "../asset/data/food.js";

const Foods = () => {
  return (
    <div className="bg-[#f4f4f4] rounded-t-3xl -mt-5 px-6 py-3 ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {foodData.map(key => (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={key.url}
              alt="big ben and sunset"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{key.name}</div>
              <p className="text-gray-700 text-base">{key.price} Won</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {key.price}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
