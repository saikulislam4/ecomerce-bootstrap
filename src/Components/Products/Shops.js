import React from 'react';
import Banner from '../Banner/Banner';
import Mobile from '../AllProducts/Mobile/Mobile';
import { Button, NavLink } from 'react-bootstrap';

const Shops = () => {
    return (
      <div className="container text-lg-center">
        <Banner></Banner>
        <div className="row welcome_section ">
          <div className="col-lg-12">
            <div className=" main position-relative">
              <figure>
                <img
                  src="https://i.ibb.co/g4bfQVg/welcome-store.png"
                  alt="welcome pictre"
                />
              </figure>
              <div className="text position-absolute text-capitalize text-white">
                <h1>welcome practice bazar </h1>
                <p className=" m-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi iusto.
                </p>
                    <NavLink href='/about'>
                        <Button>Shop Now</Button>
                    </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Mobile></Mobile>
      </div>
    );           
};

export default Shops;