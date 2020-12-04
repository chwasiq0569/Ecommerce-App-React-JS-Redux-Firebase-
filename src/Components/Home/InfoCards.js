import React from "react";
import { MdPayment } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FiBox } from "react-icons/fi";
const InfoCards = () => {
  const cardItems = [
    {
      className: "homePage__cardsRow__cardOne",
      head: "Pay by x interest-free",
      detail: "",
    },
    {
      className: "homePage__cardsRow__cardTwo",
      head: "Register your email and receive exclusive offers",
      detail: "",
    },
    {
      className: "homePage__cardsRow__cardThree",
      head: "Delivery throughout Brazil.",
      detail: "Thinking of you, Gazin offers delivery throughout Brazil.",
    },
  ];
  return (
    <div className="homePage__cardsRow">
      {cardItems.map((card) => (
        <div className={card.className} key={card.head}>
          <MdPayment className="pay__logo" color="#5642FF" size="3rem" />
          <strong>{card.head}</strong>
          <span>{card.detail}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
