import React from "react";
import { FiBox } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import paymentMethodList from "../../images/paymentMethod.png";
import LogoPaymentTwo from "../../images/comparasegura.svg";
import iconThree from "../../images/reclame-aqui.f3fee737.png";
import ratingImg from "../../images/no_rating.png";
import eCode from "../../images/e-code.7a301409.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer__Wrapper">
      <div className="upperbanner">
        <div className="iconContainer">
          <FiBox color="#5642ff" size="2rem" />
        </div>
        <p>
          The <strong>Ganzin Group</strong> offers <strong>fast</strong> and{" "}
          <strong> safe delivery </strong>
          throughout Brazil for you.
        </p>
      </div>
      {/* banner Ended */}
      {/* Footer Started */}
      <div className="footer__body">
        <div className="footer__firstColumn">
          <div className="phoneIcon__Section">
            <FiPhoneCall className="phoneIcon" color="#5642ff" size="2rem" />
          </div>
          <div className="makeRows">
            <span>Talk to Ganzin</span>
            <span>
              <strong>(44) 1234-5678</strong>
            </span>
            <span>Monday to Friday from 8 am to 6 pm</span>
          </div>
        </div>
        <div className="footer__secondColumn">
          <div className="makeRows">
            <span>
              <strong>Institutional</strong>
            </span>
            <span>The Company</span>
            <span>Our Stores</span>
            <span>Work with Us</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="footer__thirdColumn">
          <div className="makeRows">
            <span>
              <strong>Doubts</strong>
            </span>
            <span>Track Order</span>
            <span>How To buy</span>
            <span>Delivery Policy</span>
            <span>Payment Methods</span>
          </div>
        </div>
        <div className="footer__fourthColumn">
          <div className="makeRows">
            <span>
              <strong>Privacy and Security</strong>
            </span>
            <span>Billet reprint</span>
            <span>Exchange and return</span>
            <span>Pay your installment to the Store</span>
          </div>
        </div>
      </div>
      {/* Footer Ended */}
      {/* Payment Method Started */}
      <div className="lower__Payment__Banner">
        <div className="leftListImg">
          <img src={paymentMethodList} alt="Payment__Methods__Img" />
        </div>
        <div className="LogoPaymentTwo">
          <img src={LogoPaymentTwo} alt="LogoPaymentTwo" />
        </div>
        <div className="LogoPaymentThree">
          <img src={iconThree} alt="iconThree" />
        </div>
        <div className="ratingImg">
          <img src={ratingImg} alt="ratingImg" />
        </div>
        <div className="eCodeImg">
          <img src={eCode} alt="eCode" />
        </div>
      </div>
      {/* Payment Method Ended */}
      <div className="footer__Bottom">
        <span>
          Exclusive prices and payment terms for Internet purchases. Sales
          subject to review and confirmation of data. The company is guaranteed
          the eventual rectification of offers and typos that may have been
          transmitted, and the purchase may be reversed. 77.941.490 / 0225-58 -
          Gazin Industria e Comercio De Móveis e Eletrodomesticos LTDA - ROD PR
          082 SN - Centro - CEP: 87485000 - Douradina-PR
        </span>
      </div>
    </div>
  );
};

export default Footer;
