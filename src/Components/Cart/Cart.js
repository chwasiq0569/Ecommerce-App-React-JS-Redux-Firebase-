import React, { useState, useEffect } from "react";
import "./cart.scss";
import IndividualProduct from "./IndividualProduct";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import Receipt from "./Receipt";

const Cart = (props) => {
  //if hideStatus is true it will render simple text as No items in cart otherwise it will render Cart text
  //hideStatus check wether cart is empty or not
  const [hideStatus, setHideStatus] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const func = () => {
      if (props.cart_Items.cartItems.length === 0) {
        setHideStatus(true);
      } else {
        setHideStatus(false);
      }
    };
    func();
  }, [props.cart_Items.cartItems]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cartPage__Wrapper"
    >
      {hideStatus ? (
        <h1 className="emptyCartText">No Items in Cart</h1>
      ) : (
        <h1 className="cartText">Cart</h1>
      )}
      <div className="innerContainer">
        <div className="cart__Wrapper">
          {/* if cart is not empty it will render cartItems other will it will return null */}
          {!hideStatus
            ? props.cart_Items.cartItems.map((items) => (
                <IndividualProduct items={items} key={items.Id} />
              ))
            : null}
        </div>
        <Receipt {...props} hideStatus={hideStatus} />
      </div>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart_Items: state.cart,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Cart);
