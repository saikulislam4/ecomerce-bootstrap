import React, { useEffect, useState} from 'react';
import SingleMobile from './SingleMobile';
import Slider from "react-slick";




const Mobile = () => {
  
    const [mobile , setMobile] = useState([])
    useEffect(()=>{
        fetch(`Mobile.json`)
          .then((Response) => Response.json())
          .then((data) => setMobile(data));

    })
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    
    return (
      <div>
        <h1 className='mobile_title'>All Mobile Phone</h1>
        <div className="row container">
          <Slider {...settings}>
          {mobile.map((mobile) => (
            <SingleMobile mobile={mobile}></SingleMobile>
          ))}
          </Slider>
        </div>
      </div>
    );
};

export default Mobile;