import { React, useState, useEffect } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Foods from "../Food Showcase/FoodItems";

const Home = () => {
  return (
    <div className="">
    <Navbar/>
    <Header/>
    <Foods/>
    </div>
  );
};

export default Home;
