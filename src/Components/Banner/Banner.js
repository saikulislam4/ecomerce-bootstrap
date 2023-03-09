import React from 'react';
import { NavLink } from 'react-bootstrap';
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
        <div className="col-lg-3">
          <div className="cetagrois">
            <ul>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/womensAndFashion">
                  <h6>women's & girls fashion</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/healthandbuty">
                  <h6>health & beauty</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/watchbangandjewellery">
                  <h6>watches, bags, jewellery</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/mensandfashion">
                  <h6>mens's & boys'fashion</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/babystoy">
                  <h6>babies & toys</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/electronicdevies">
                  <h6>electronic devies</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/tvandhomeapplience">
                  <h6>TV & home appliances</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/electronicaccessories">
                  <h6>electronic accessories</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/homelifestyle">
                  <h6>home & lifestyle</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/automotiveandmotobike">
                  <h6>automitive & motorbike</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/sportsoutdoor">
                  <h6>sports & outdoors</h6>
                </NavLink>
              </li>
              <li className=" text-capitalize list-unstyled">
                <NavLink href="/pets">
                  <h6>groceries & pets</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <Slider {...settings}>
            <NavLink href="/womensAndFashion">
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
                    src="https://i.ibb.co/R74x9zN/picture-01.jpg"
                    alt="pets"
                  />
                </div>
                <div className="overly "></div>
              </div>
            </NavLink>
            <NavLink href="/healthandbuty">
              <div className="banner banner_picture text">
                <div className="text text-start text-capitalize">
                  <img src="https://i.ibb.co/kyDJ32P/health-and-beauty.png" alt="health-and-beauty" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/watchbangandjewellery">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/tKf3Gcg/watch-banner.png" alt="watch-banner" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/mensandfashion">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/P99D0vM/mans-fashion.png" alt="mans-fashion" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/babystoy">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/vxvT8kM/baby-toy.png" alt="baby-toy"/>
                </div>
              </div>
            </NavLink>
            <NavLink href="/electronicdevies">
              <div className="banner banner_picture text">
                <div className="text position-relative">
              <img src="https://i.ibb.co/wRfWvtW/picture-002.jpg" alt="picture-002"  />
                </div>
              </div>
            </NavLink>
            <NavLink href="/tvandhomeapplience">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/7JX54PS/Tv-and-home.png" alt="Tv-and-home" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/electronicaccessories">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/8m2RQTM/Electronics.png" alt="Electronics" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/homelifestyle">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/r2HCXFW/single-days.png" alt="single-days" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/automotiveandmotobike">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/SsZ3HK0/automotive-and-motorbike.png" alt="automotive-and-motorbike" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/sportsoutdoor">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/cT4KJD6/sports-and-outdoor.png" alt="sports-and-outdoor" />
                </div>
              </div>
            </NavLink>
            <NavLink href="/pets">
              <div className="banner banner_picture text">
                <div className="text position-relative">
                  <img src="https://i.ibb.co/LNjYVxb/pets.png" alt="pets" />
                </div>
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>
    );
};

export default Banner;