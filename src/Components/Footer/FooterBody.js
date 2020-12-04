import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const FooterBody = () => {
  const data = [
    {
      className: "footer__secondColumn",
      elem1: "Institutional",
      elem2: "The Company",
      elem3: "Our Stores",
      elem4: "Work with Us",
      elem5: "Contact",
    },
    {
      className: "footer__thirdColumn",
      elem1: "Doubts",
      elem2: "Track Order",
      elem3: "How To buy",
      elem4: "Delivery Policy",
      elem5: "Payment Methods",
    },
    {
      className: "footer__fourthColumn",
      elem1: "Privacy and Security",
      elem2: "Billet reprint",
      elem3: "Exchange and return",
      elem4: "Pay your installment to the Store",
      elem5: "",
    },
  ];
  return (
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
      {data.map((d) => (
        <div className={d.className}>
          <div className="makeRows">
            <span>
              <strong>{d.elem1}</strong>
            </span>
            <span>{d.elem2}</span>
            <span>{d.elem3}</span>
            <span>{d.elem4}</span>
            <span>{d.elem5}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterBody;
