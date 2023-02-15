import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex py-5 px-8">
    <Navbar/>
    <Header/>
    </div>
  );
};

export default Home;
