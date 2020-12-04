import React, { useEffect } from "react";
import BannerOne from "../../images/banner-105-102007262446.jpg";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home__heroSection">
      <div className="bannerOne__Container">
        <img className="banner__OneImage" src={BannerOne} alt="banner__One" />
      </div>
    </div>
  );
};

export default Hero;
