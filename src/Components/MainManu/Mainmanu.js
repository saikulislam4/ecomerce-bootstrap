import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../LayOut/Footer/Footer";
import Nab from "../LayOut/Navbar/Nab"
import SearchBar from "../LayOut/SearchBar/SearchBar";

const Mainmanu = () => {
  return (
    <div>
      <Nab></Nab>
      <SearchBar></SearchBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainmanu;
