import React, { useState, useEffect } from "react";
import "./productPage.scss";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import Products from "../../products.json";
import { add_to_cart, remove_from_cart } from "../../Redux/Actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

toast.configure();
const ProductPage = (props) => {
  const [item, setItem] = useState(null);
  let data = Products.arrayOfProducts.find(
    (item) => item.Title === props.match.params.productTitle
  );
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
    setItem(data);
    console.log(
      "props.cart_Items.cart.cartItems: ",
      props.cart_Items.cart.cartItems
    );
  }, []);
  useEffect(() => {
    console.log("item: ", item);
    props.cart_Items.cart.cartItems.forEach((e) => {
      if (e.Title === item?.Title) {
        setHandleBtnCondition(false);
      }
    });
  }, [item]);
  // console.log("item: ", item);

  const [handleBtnCondition, setHandleBtnCondition] = useState(true); //when we will  render add to Cat Btn

  const addToCart = (data) => {
    setHandleBtnCondition(false);
    props.add_To_Cart({
      Title: data.Title,
      desc: data.Description,
      price: data.price,
      img: data.img,
      qty: 1,
    });
    toast.success("Item Added To Cart.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const removeFromCart = (data) => {
    console.log("Before Removing Item: ", props.cart_Items.cart.cartItems);
    setHandleBtnCondition(true);
    let newData = props.cart_Items.cart.cartItems.filter(
      (item) => item.Title !== data.Title
    );
    props.remove_From_Cart(newData);
    console.log("After Removing Item: ", props.cart_Items.cart.cartItems);
    toast.warn("Item Removed From Cart.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="productPage__Wrapper"
    >
      <div className="wrapper">
        <div className="leftSide">
          <img src={item?.img} alt={item?.img} />
        </div>
        <div className="rightSide">
          <h1 className="product__Title">{item?.Title}</h1>
          <p className="product__description">{item?.Description}</p>
          {/* <p className="product__Price">Price ${item?.price}</p> */}
          <CurrencyFormat
            decimalScale={2}
            value={item?.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <p className="product__Price">Price: {value}</p>
            )}
          />
          {handleBtnCondition ? (
            <button className="addToCart" onClick={() => addToCart(item)}>
              ADD TO CART
            </button>
          ) : (
            <button className="addToCart" onClick={() => removeFromCart(item)}>
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
