import React from "react";
import paymentMethodList from "../../images/paymentMethod.png";
import LogoPaymentTwo from "../../images/comparasegura.svg";
import iconThree from "../../images/reclame-aqui.f3fee737.png";
import ratingImg from "../../images/no_rating.png";
import eCode from "../../images/e-code.7a301409.svg";

const PaymentBanner = () => {
  const paymentImgsData = [
    {
      className: "leftListImg",
      Img: paymentMethodList,
      altText: "Payment__Methods__Img",
    },
    {
      className: "LogoPaymentTwo",
      Img: LogoPaymentTwo,
      altText: "LogoPaymentTwo Img",
    },
    {
      className: "LogoPaymentThree",
      Img: iconThree,
      altText: "iconThree Img",
    },
    {
      className: "ratingImg",
      Img: ratingImg,
      altText: "ratingImg",
    },
    {
      className: "eCodeImg",
      Img: eCode,
      altText: "eCode",
    },
  ];

  return (
    <div className="lower__Payment__Banner">
      {paymentImgsData.map((pd) => (
        <div className={pd.className}>
          <img src={pd.Img} alt={pd.altText} />
        </div>
      ))}
    </div>
  );
};

export default PaymentBanner;
