import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LayOut from "../LayOut/LayOut";

const Mainmanu = () => {
  return (
    <div>
      <LayOut></LayOut>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainmanu;
