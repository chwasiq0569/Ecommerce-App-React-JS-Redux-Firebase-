import React, { useState, useEffect } from "react";
import "./productPage.scss";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import Products from "../../products.json";
import { add_to_cart, remove_from_cart } from "../../Redux/Actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  notifyDanger,
  notifySuccess,
  addToCart,
  removeFromCart,
  checkItemsStatus,
} from "../utils/utils";
import Button from "../utils/Button";

toast.configure();
const ProductPage = (props) => {
  const [item, setItem] = useState(null);
  const [handleBtnCondition, setHandleBtnCondition] = useState(true); //handleBtnCondition true we will  render add to Cart Btn

  let data = Products.arrayOfProducts.find(
    //extract item whom title is equals to clicked items Title
    (item) => item.Id === props.match.params.Id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setItem(data);
  }, []);

  useEffect(() => {
    checkItemsStatus(props, item, setHandleBtnCondition);
  }, [item]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="productPage__Wrapper"
    >
      <div className="wrapper">
        <div className="leftSide">
          <img src={item?.img} alt={item?.Title} />
        </div>
        <div className="rightSide">
          <h1 className="product__Title">{item?.Title}</h1>
          <p className="product__description">{item?.Description}</p>
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
          <Button
            className={"addToCart"}
            text={handleBtnCondition ? "Add To Cart" : "Remove From Cart"}
            func={
              handleBtnCondition
                ? () => {
                    setHandleBtnCondition(false);
                    addToCart(item, props);
                  }
                : () => {
                    setHandleBtnCondition(true);
                    removeFromCart(item, props);
                  }
            }
          />
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
