import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="row banner_section">
        <div className="col-lg-2 offset-lg-1">
          <div className="cetagrois">
            <ul>
              <li className=" text-capitalize list-unstyled">
                <Link to="/womensAndFashion">
                  <h6>women's & girls fashion</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/healthandbuty">
                  <h6>health & beauty</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/watchbangandjewellery">
                  <h6>watches, bags, jewellery</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/mensandfashion">
                  <h6>mens's & boys'fashion</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/babystoy">
                  <h6>babies & toys</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/electronicdevies">
                  <h6>electronic devies</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/tvandhomeapplience">
                  <h6>TV & home appliances</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/electronicaccessories">
                  <h6>electronic accessories</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/homelifestyle">
                  <h6>home & lifestyle</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/automotiveandmotobike">
                  <h6>automitive & motorbike</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/sportsoutdoor">
                  <h6>sports & outdoors</h6>
                </Link>
              </li>
              <li className=" text-capitalize list-unstyled">
                <Link to="/pets">
                  <h6>groceries & pets</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 ">
          <Slider {...settings}>
            <Link to="/womensAndFashion">
              <div className="banner banner_picture">
                <div className="text text-capitalize">
                  <h1 className=" ">
                    shop on your <span className=" d-block">budget</span>
                  </h1>
                  <h4 className="text-start">Glow Up challenge </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam, accusantium!
                  </p>
                </div>
                <div className="image">
                  <img
                    src="https://i.ibb.co/R74x9zN/picture-01.jpg"alt="pets."
                  />
                </div>
                <div className="overly "></div>
              </div>
            </Link>
            <Link to="/healthandbuty">
              <div className="banner banner_picture">
                <div className="text text-start text-capitalize">
                  <img
                    src="https://i.ibb.co/kyDJ32P/health-and-beauty.png."
                    alt="health-and-beauty."
                  />
                </div>
              </div>
            </Link>
            <Link to="/watchbangandjewellery">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/tKf3Gcg/watch-banner.png."
                    alt="watch-banner."
                  />
                </div>
              </div>
            </Link>
            <Link to="/mensandfashion">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/P99D0vM/mans-fashion.png."
                    alt="mans-fashion."
                  />
                </div>
              </div>
            </Link>
            <Link to="/babystoy">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/vxvT8kM/baby-toy.png."
                    alt="baby-toy."
                  />
                </div>
              </div>
            </Link>
            <Link to="/electronicdevies">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/wRfWvtW/picture-002.jpg."alt="picture-002."/>
                </div>
              </div>
            </Link>
            <Link to="/tvandhomeapplience">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/7JX54PS/Tv-and-home.png"
                    alt="Tv-and-home."
                  />
                </div>
              </div>
            </Link>
            <Link to="/electronicaccessories">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/8m2RQTM/Electronics.png"
                    alt="Electronic."
                  />
                </div>
              </div>
            </Link>
            <Link to="/homelifestyle">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/r2HCXFW/single-days.png"
                    alt="single-day."
                  />
                </div>
              </div>
            </Link>
            <Link to="/automotiveandmotobike">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/SsZ3HK0/automotive-and-motorbike.png"
                    alt="automotive-and-motorbike,"
                  />
                </div>
              </div>
            </Link>
            <Link to="/sportsoutdoor">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img
                    src="https://i.ibb.co/cT4KJD6/sports-and-outdoor.png."
                    alt="sports-and-outdoor."
                  />
                </div>
              </div>
            </Link>
            <Link to="/pets">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/LNjYVxb/pets.png" alt="pets." />
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    );
};

export default Banner;