import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import {FaStar, FaStarHalf} from "react-icons/fa"

const SingleMobile = ({ mobile }) => {
  const { id, img, name, username, email, color, camera, price,  } = mobile;
  return (
    <div className="col-lg-3  single_cart" >
      <div className="main_cart container">
      <NavLink href='/'>
      <div className="imgs mobile_imge style={{ width: '18rem' }}">
        <img src= {img} alt="" />
      </div>
      </NavLink>


      <div className="div text ">
      <h4 className=' text-lg-start mb-lg-2'> {name} </h4>
      <div className="text-lg-start align-content-lg-start">
          <div className="name_price d-flex justify-content-lg-between">
          <h5> {price} </h5>
          <div className="color d-flex">
            <h5>Color : </h5>
           <select name="" id="">
            <option value=""> Blue </option>
            <option value=""> White </option>
            <option value=""> Gray </option>
            </select>
           </div>
          </div>
          <div className="star">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStarHalf></FaStarHalf>
          </div>
        </div>
    
      </div>
      <div className="singlemobile_cart">
        <NavLink href="/about">
          <Button className=" mb-lg-4 common_button mt-lg-3 "> Add to Cart </Button>
        </NavLink>
        </div>
      </div>


    </div>
  );
};

export default SingleMobile;