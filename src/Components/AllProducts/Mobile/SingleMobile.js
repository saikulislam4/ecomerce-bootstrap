import React from 'react';
import { Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {FaStar, FaStarHalf} from "react-icons/fa"


const SingleMobile = ({ mobile }) => {
  const {  img, name, price,  } = mobile;
  return (
    <div className="col-lg-3  single_cart" >
      <div className="main_cart container">
      <Link to='/'>
      <div className="imgs mobile_imge style={{ width: '18rem' }}">
        <img src= {img} alt="" />
      </div>
      </Link>


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
        <Link to="/about">
          <Button className=" mb-lg-4 common_button mt-lg-3 "> Add to Cart </Button>
        </Link>
        </div>
      </div>


    </div>
  );
};

export default SingleMobile;