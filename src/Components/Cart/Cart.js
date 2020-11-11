import React, { useState, useEffect } from "react";
import "./cart.scss";
import IndividualProduct from "./IndividualProduct";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = (props) => {

  const [freight, setFreight] = useState(108);
  console.log("props.cart_Items.cartItems: ", props.cart_Items.cartItems);
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

  const findSubTotal = (data) => {
    let subTotal = 0;
    data.filter((e) => (subTotal += e.price));
    return subTotal;
  };

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
          {props.cart_Items.cartItems.length > 0
            ? props.cart_Items.cartItems.map((items) => (
                <IndividualProduct items={items} key={items.Title} />
              ))
            : null}
        </div>
        <div className={hideStatus ? "hideStatus" : "Receipt"}>
          <p className="orderSumry">Order Summary</p>
          <div className="orderInfo">
            <p>Sub Total</p>
            <CurrencyFormat
              decimalScale={2}
              value={findSubTotal(props.cart_Items.cartItems)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value) => <p className="price">Price: {value}</p>}
            />
          </div>
          <p className="freight">Freight</p>
          <div className="totalDiv">
            <p>Total</p>
            <CurrencyFormat
              decimalScale={2}
              value={findSubTotal(props.cart_Items.cartItems)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value) => <p className="amount">Price: {value}</p>}
            />
          </div>
          <CurrencyFormat
            decimalScale={2}
            value={findSubTotal(props.cart_Items.cartItems)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <p className="inCash">Rs {value} in cash at the ticket</p>
            )}
          />
          {props.user.user === null ? (
            <Link to="/auth">
              <button>CONTINUE</button>
            </Link>
          ) : (
            <Link to="/payments">
              <button>CONTINUE</button>
            </Link>
          )}
        </div>
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
