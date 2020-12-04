import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./card.scss";
import { Link } from "react-router-dom";
import {
  add_to_cart,
  remove_from_cart,
  increase_quantity,
} from "../../../Redux/Actions/cartActions";
import Button from "./Button";
import { notifySuccess, notifyDanger } from "./utils";

const Card = (props) => {
  const [handleBtnCondition, setHandleBtnCondition] = useState(true);

  const addToCart = (data) => {
    notifySuccess("Item is Added to Cart");
    setHandleBtnCondition(false);
    props.add_To_Cart({
      Title: data.Title,
      desc: data.Description,
      price: data.price,
      img: data.img,
      qty: 1,
    });
  };

  const removeFromCart = (data) => {
    notifyDanger("Item is Removed From Cart");
    console.log("Before Removing Item: ", props.cart_Items.cart.cartItems);
    setHandleBtnCondition(true);
    let newData = props.cart_Items.cart.cartItems.filter(
      (item) => item.Title !== data.Title
    );
    props.remove_From_Cart(newData);
    console.log("After Removing Item: ", props.cart_Items.cart.cartItems);
  };

  useEffect(() => {
    props.cart_Items.cart.cartItems.forEach((e) => {
      if (e.Title === props.data?.Title) {
        setHandleBtnCondition(false);
      }
    });
  }, []);

  return (
    <div className="singlecard">
      <Link className="Links" to={`/home/${props.data.Title}`}>
        <div className="productImage">
          <img
            className="card__productImage"
            src={props.data.img}
            alt={props.data.Title}
          />
        </div>
      </Link>
      <div className="productInfo">
        <Link className="Links" to={`/home/${props.data.Title}`}>
          <p className="productTitle">{props.data.Title}</p>
          <p className="productDesc">{props.data.Description}</p>
        </Link>
        <div className="flexPriceAndBtn">
          <p className="productPrice">Price: ${props.data.price}</p>
          {/* // if handleBtnCondition is true render addToCart Btn else render removeFromCart Btn */}
          <Button
            className={"addToCartBtn"}
            text={handleBtnCondition ? "Add To Cart" : "Remove From Cart"}
            func={
              handleBtnCondition
                ? () => addToCart(props.data)
                : () => removeFromCart(props.data)
            }
          />
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
