import React from "react";
import "./footer.scss";
import UpperBand from "./UpperBand";
import FooterBody from "./FooterBody";
import PaymentBanner from "./PaymentBanner";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="footer__Wrapper">
      <UpperBand />
      <FooterBody />
      <PaymentBanner />
      <FooterBottom />
      <p
        onClick={() =>
          window.open(
            "https://github.com/chwasiq0569/Ecommerce-App-React-JS-Redux-Firebase-.git",
            "_blank"
          )
        }
        className="githubRepo"
      >
        Click to See Github Repo
      </p>
    </div>
  );
};

export default Footer;
