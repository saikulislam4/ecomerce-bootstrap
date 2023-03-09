import React from 'react';
import { Button } from 'react-bootstrap';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiHandHeartLine, RiSecurePaymentLine } from "react-icons/ri";

const OurServiceSection = () => {
  return (
    <div className=" container ourservice_section common_top">
      <h1 className="we_have"> </h1>
      <div className="inner d-flex justify-content-between">
        <div className="item">
          <div className="squer mb-lg-5">
            <div className="icon">
              <div className="icons">
                {" "}
                <TbTruckDelivery />
              </div>
            </div>
          </div>
          <div className="text">
            <h5>Super fast and free delivery</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              delectus unde cupiditate maiores temporibus magni!
            </p>
            <Button className="common_button">See more</Button>
          </div>
        </div>
        <div className="item">
          <div className="squer mb-lg-5">
            <div className="icon">
              <div className="icons">
                <MdSecurity />
              </div>
            </div>
          </div>
          <div className="text">
            <h5>non-contact shipping </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              delectus unde cupiditate maiores temporibus magni!
            </p>
            <Button className="common_button">See more</Button>
          </div>
        </div>
        <div className="item">
          <div className="squer mb-lg-5">
            <div className="icon">
              <div className="icons">
                <RiHandHeartLine />
              </div>
            </div>
          </div>
          <div className="text">
            <h5>money-back Guranteed</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              delectus unde cupiditate maiores temporibus magni!
            </p>
            <Button className="common_button">See more</Button>
          </div>
        </div>
        <div className="item">
          <div className="squer mb-lg-5">
            <div className="icon">
              <div className="icons">
                <RiSecurePaymentLine />
              </div>
            </div>
          </div>
          <div className="text">
            <h5>super secure payment system</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              delectus unde cupiditate maiores temporibus magni!
            </p>
            <Button className="common_button">See more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServiceSection