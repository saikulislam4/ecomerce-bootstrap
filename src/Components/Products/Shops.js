import React from 'react';
import Banner from '../Banner/Banner';
import Mobile from '../AllProducts/Mobile/Mobile';
import WelcomeSection from '../Banner/WelcomeSection/WelcomeSection';
import OurServiceSection from '../Banner/OurServiceSection/OurServiceSection';
import TrustedSection from '../Banner/TrustedSection/TrustedSection';


const Shops = () => {
  const data = {
    name: "welcome practice bazar",
  };
    return (
      <div className="text-lg-center">
        <div className="container">
        <WelcomeSection myData={data} ></WelcomeSection>
        <Banner></Banner>
        <OurServiceSection></OurServiceSection>
        </div>
        <TrustedSection></TrustedSection>
        <div className="container">
        <Mobile></Mobile>

        </div>
      </div>
    );           
};

export default Shops;