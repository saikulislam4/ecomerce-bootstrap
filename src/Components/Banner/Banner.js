import React from 'react';
import { NavLink } from 'react-bootstrap';
import Slider from "react-slick";

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
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
              <div className="banner banner_picture1 text">
                <div className="text text-start text-capitalize position-relative">
                  <h1 className=" ">
                    shop on <span className=" d-block">your budget</span>
                  </h1>
                  <h4 className="text-start">Glow Up challenge </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam, accusantium!
                  </p>
                </div>
                <div className="overly "></div>
              </div>
            </NavLink>
            <NavLink href="/healthandbuty">
              <div className="banner banner_picture2 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/watchbangandjewellery">
              <div className="banner banner_picture3 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/mensandfashion">
              <div className="banner banner_picture4 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/babystoy">
              <div className="banner banner_picture5 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/electronicdevies">
              <div className="banner banner_picture6 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/tvandhomeapplience">
              <div className="banner banner_picture7 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/electronicaccessories">
              <div className="banner banner_picture8 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/homelifestyle">
              <div className="banner banner_picture9 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/automotiveandmotobike">
              <div className="banner banner_picture10 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/sportsoutdoor">
              <div className="banner banner_picture11 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
            <NavLink href="/pets">
              <div className="banner banner_picture12 text">
                <div className="text text-start text-capitalize position-relative"></div>
              </div>
            </NavLink>
          </Slider>
        </div>
      </div>
    );
};

export default Banner;