import React, { useEffect } from "react";
import { MdPayment } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import BannerOne from "../../images/banner-105-102007262446.jpg";
import { FiBox } from "react-icons/fi";
import "./home.scss";
import Cards from "./Cards";
import { motion } from "framer-motion";
const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(props);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homePage__wrapper"
    >
      <div className="home__heroSection">
        <div className="bannerOne__Container">
          <img className="banner__OneImage" src={BannerOne} alt="banner__One" />
        </div>
      </div>
      {/* homepage Card Started */}
      <div className="homePage__cardsRow">
        <div className="homePage__cardsRow__cardOne">
          <MdPayment className="pay__logo" color="#5642FF" size="3rem" />
          <span>
            Pay by <strong> x interest-free</strong>
          </span>
        </div>
        <div className="homePage__cardsRow__cardTwo">
          <MdEmail className="pay__logo" color="#5642FF" size="3rem" />
          <span>
            Register your email and receive <strong>exclusive offers</strong>
          </span>
        </div>
        <div className="homePage__cardsRow__cardThree">
          <FiBox className="pay__logo" color="#5642FF" size="3rem" />
          <span>
            <p>
              <strong>Delivery throughout Brazil.</strong>
            </p>
            Thinking of you, Gazin offers delivery throughout Brazil.
          </span>
        </div>
      </div>
      <Cards />
    </motion.div>
  );
};

export default Home;
