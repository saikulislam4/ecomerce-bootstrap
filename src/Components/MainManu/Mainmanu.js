import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../LayOut/Footer/Footer";
import LayOut from "../LayOut/Navbar/Nab";
import SearchBar from "../LayOut/SearchBar/SearchBar";

const Mainmanu = () => {
  return (
    <div>
      <LayOut></LayOut>
      <SearchBar></SearchBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainmanu;
