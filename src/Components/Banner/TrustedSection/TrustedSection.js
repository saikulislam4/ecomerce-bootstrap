import React from 'react'
import Slider from "react-slick";

const TrustedSection = () => {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: false,
      prevArrow: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="trusted_section common_top">
      <div className="inner container ">
        <h1>Trusted by 1100+ companies</h1>
        <div>
        </div>
        <Slider {...settings}>
          <div className="item">
            <img src="/Companies picture/companies logo  (1).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (2).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (3).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (4).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (5).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (6).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (7).png" alt="" />
          </div>
          <div className="item">
            <img src="/Companies picture/companies logo  (8).png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TrustedSection;