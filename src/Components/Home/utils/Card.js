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
  //if handleBtnCondition is true render addToCart Btn
  // console.log("props: ", props.cart_Items);
  useEffect(() => {
    //loop thru the items in the cart
    props.cart_Items.cart.cartItems.forEach((e) => {
      //if title of item in cart is equals to title of any of (total items)
      //then render removeToCartBtn to that items whom title is matched
      //if we dont do this then after adding items to cart if we go to another route and when we again jump back to homepage it will not render removeToCart Btn for items that are in the cart
      if (e.Id === props.data?.Id) {
        setHandleBtnCondition(false);
      }
    });
  }, []);

  const addToCart = (item) => {
    notifySuccess("Item is Added to Cart");
    setHandleBtnCondition(false);
    //dispatching function add_To_Cart to update state
    props.add_To_Cart({
      Id: item.Id,
      Title: item.Title,
      desc: item.Description,
      price: item.price,
      img: item.img,
      qty: 1,
    });
  };

  const removeFromCart = (item) => {
    notifyDanger("Item is Removed From Cart");
    //on handleBtnCondition === true we will render addToCart Btn
    setHandleBtnCondition(true);
    let newData = props.cart_Items.cart.cartItems.filter(
      (cartItem) => cartItem.Id !== item.Id
    );
    //here function is dispatched to remove Item
    props.remove_From_Cart(newData);
  };

  return (
    <div className="singlecard">
      <Link className="Links" to={`/home/${props.data.Id}`}>
        <div className="productImage">
          <img
            className="card__productImage"
            src={props.data.img}
            alt={props.data.Title}
          />
        </div>
      </Link>
      <div className="productInfo">
        <Link className="Links" to={`/home/${props.data.Id}`}>
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
