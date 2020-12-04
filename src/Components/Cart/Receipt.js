import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

const Receipt = (props) => {
  const { hideStatus } = props;

  const findSubTotal = (data) => {
    let subTotal = 0;
    data.filter((e) => (subTotal += e.price));
    return subTotal;
  };

  return (
    // {/* if cart is empty then hide receipt otherwise show receipt */}
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
      {/* if user is login then redirect to checkout otherwise ask user to login first */}
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
  );
};

export default Receipt;
