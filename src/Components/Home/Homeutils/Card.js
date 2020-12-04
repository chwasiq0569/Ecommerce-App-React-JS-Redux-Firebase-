import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./card.scss";
import { Link } from "react-router-dom";
import {
  add_to_cart,
  remove_from_cart,
  increase_quantity,
} from "../../../Redux/Actions/cartActions";
import Button from "../../utils/Button";
import {
  notifySuccess,
  notifyDanger,
  addToCart,
  removeFromCart,
  checkItemsStatus,
} from "../../utils/utils";

const Card = (props) => {
  const { data } = props;
  const [handleBtnCondition, setHandleBtnCondition] = useState(true);
  //if handleBtnCondition is true render addToCart Btn else render removeFromCart Btn

  useEffect(() => {
    //loop thru the items in the cart
    checkItemsStatus(props, data, setHandleBtnCondition);
  }, []);

  return (
    <div className="singlecard">
      <Link className="Links" to={`/home/${data.Id}`}>
        <div className="productImage">
          <img className="card__productImage" src={data.img} alt={data.Title} />
        </div>
      </Link>
      <div className="productInfo">
        <Link className="Links" to={`/home/${data.Id}`}>
          <p className="productTitle">{data.Title}</p>
          <p className="productDesc">{data.Description}</p>
        </Link>
        <div className="flexPriceAndBtn">
          <p className="productPrice">Price: ${data.price}</p>
          {/* // if handleBtnCondition is true render addToCart Btn else render removeFromCart Btn */}
          <Button
            type=""
            className={"addToCartBtn"}
            text={handleBtnCondition ? "Add To Cart" : "Remove From Cart"}
            func={
              handleBtnCondition
                ? () => {
                    setHandleBtnCondition(false);
                    addToCart(data, props);
                  }
                : () => {
                    setHandleBtnCondition(true);
                    removeFromCart(data, props);
                  }
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
