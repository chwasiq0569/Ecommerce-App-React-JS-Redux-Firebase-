import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import {
  add_to_cart,
  remove_from_cart,
  increase_quantity,
  decrease_quantity,
} from "../../Redux/Actions/cartActions";
import { removeFromCart, onIncrement, onDecrement } from "../utils/utils";

const IndividualProduct = (props) => {
  //props.items.price contains price of individual item
  const [actualPrice, setActualPrice] = useState(props.items.price);

  return (
    <div className="individualItem">
      <div className="individualItem__Img">
        <img src={props.items.img} alt="img" />
      </div>
      <div className="individualItem__Info">
        <div className="other__Info">
          <div className="title__Container">
            <p className="item__title">{props.items.Title}</p>
          </div>
          <p className="inStock">In Stock</p>
          <div className="qtyController">
            <button
              className="increaseQty"
              onClick={() => onIncrement(props.items, props, actualPrice)}
            >
              +
            </button>
            <p className="qty">{props.items.qty}</p>
            <button
              className="decreaseQty"
              onClick={() => onDecrement(props.items, props, actualPrice)}
            >
              -
            </button>
          </div>
        </div>
        <div className="price__Info">
          <CurrencyFormat
            decimalScale={2}
            value={props.items.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => <p className="item_price">Rs: {value}</p>}
          />
          <div className="binIcon">
            <RiDeleteBin6Line
              size="1.8rem"
              onClick={() => removeFromCart(props.items, props, actualPrice)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart_Items: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add_To_Cart: (item) => dispatch(add_to_cart(item)),
    remove_From_Cart: (item) => dispatch(remove_from_cart(item)),
    increase_quantity: (qty) => dispatch(increase_quantity(qty)),
    decrease_quantity: (qty) => dispatch(decrease_quantity(qty)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);
