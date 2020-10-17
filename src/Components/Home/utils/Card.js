import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./card.scss";
import { Link } from "react-router-dom";
import {
  add_to_cart,
  remove_from_cart,
  increase_quantity,
} from "../../../Redux/Actions/cartActions";
toast.configure();
const Card = (props) => {


  const [handleBtnCondition, setHandleBtnCondition] = useState(true); 
  const [showToast, setShowtoast] = useState(false);

  const notifyAdded = () => {
    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyRemoved = () => {
    toast.warn("Item Removed from Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
 
  };

  const addToCart = (data) => {
    notifyAdded();
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
    notifyRemoved();
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
          {handleBtnCondition ? (
            <button
              className="addToCartBtn"
              onClick={() => addToCart(props.data)}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="addToCartBtn"
              onClick={() => removeFromCart(props.data)}
            >
              Remove From Cart
            </button>
          )}
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
