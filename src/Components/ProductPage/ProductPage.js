import React, { useState, useEffect } from "react";
import "./productPage.scss";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import Products from "../../products.json";
import { add_to_cart, remove_from_cart } from "../../Redux/Actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { notifyDanger, notifySuccess } from "./../Home/utils/utils";

toast.configure();
const ProductPage = (props) => {
  const [item, setItem] = useState(null);

  // console.log("item?.I: ", item?.I);
  console.log("props.match: ", props.match);
  let data = Products.arrayOfProducts.find(
    //extract item whom title is equals to clicked items Title
    (item) => item.Id === props.match.params.Id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setItem(data);
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
      Id: data.Id,
      Title: data.Title,
      desc: data.Description,
      price: data.price,
      img: data.img,
      qty: 1,
    });
    notifySuccess("Item Added To Cart.");
  };
  const removeFromCart = (data) => {
    setHandleBtnCondition(true);
    let newData = props.cart_Items.cart.cartItems.filter(
      (item) => item.Id !== data.Id
    );
    props.remove_From_Cart(newData);
    notifyDanger("Item Removed From Cart.");
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
