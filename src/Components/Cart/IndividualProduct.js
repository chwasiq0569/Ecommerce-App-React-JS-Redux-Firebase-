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
const IndividualProduct = (props) => {
  const [actualPrice, setActualPrice] = useState(props.items.price);

  let arr = [...props.cart_Items.cart.cartItems];
  const onIncrement = (data) => {
    arr.filter((item) => {
      if (item.Title === data.Title) {
        item.qty = item.qty + 1;
        item.price = item.qty * actualPrice;
      }
    });
    props.increase_quantity(arr);
  };
  const onDecrement = (data) => {
    if (data.qty > 1) {
      let arr = [...props.cart_Items.cart.cartItems];
      arr.filter((item) => {
        if (item.Title === data.Title) {
          item.qty = item.qty - 1;
          item.price = item.price - actualPrice;
        }
      });
      props.decrease_quantity(arr);
    } else if (data.qty === 1) {
      removeFromCart(props.items);
    }
  };

  const removeFromCart = (data) => {
    console.log("Before Removing Item: ", props.cart_Items.cart.cartItems);
    console.log("Removed From Cart: ", data);
    let newData = props.cart_Items.cart.cartItems.filter(
      (item) => item.Title !== data.Title
    );
    props.remove_From_Cart(newData);
    console.log("After Removing Item: ", props.cart_Items.cart.cartItems);
  };
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
              onClick={() => onIncrement(props.items)}
            >
              +
            </button>
            <p className="qty">{props.items.qty}</p>
            <button
              className="decreaseQty"
              onClick={() => onDecrement(props.items)}
            >
              -
            </button>
          </div>
        </div>
        <div className="price__Info">
          {/* <p className="item_price">Rs: ${props.items.price}</p> */}
          <CurrencyFormat
            decimalScale={2}
            value={props.items.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => <p className="item_price">Rs: {value}</p>}
          />
          <div className="binIcon">
            {/* <button > */}
            <RiDeleteBin6Line
              size="1.8rem"
              onClick={() => removeFromCart(props.items)}
            />
            {/* </button> */}
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
