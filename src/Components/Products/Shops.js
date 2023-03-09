import React from 'react';
import Banner from '../Banner/Banner';
import Mobile from '../AllProducts/Mobile/Mobile';
import WelcomeSection from '../Banner/WelcomeSection/WelcomeSection';


const Shops = () => {
  const data = {
    name: "welcome practice bazar",
  };
    return (
      <div className="container text-lg-center">
        <Banner></Banner>
        <WelcomeSection myData={data} ></WelcomeSection>
        <Mobile></Mobile>
      </div>
    );           
};

export default Shops;