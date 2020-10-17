import React from "react";
import emptyCartImg from "../../images/bag-cart.4a6f58a3.svg";
import "./cart.scss";
const EmptyCart = () => {
  return (
    <div className="emptyCart__Wrapper">
      <div className="main__Container">
        <h1>No Items in Cart</h1>
      </div>
    </div>
  );
};

export default EmptyCart;
