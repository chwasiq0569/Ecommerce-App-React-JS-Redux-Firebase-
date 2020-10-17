import React, { useState,useEffect } from "react";
import "./payments.scss";
import cardsImg from "../../images/cards.png";
import { motion } from "framer-motion";
import { connect } from "react-redux";
const Payments = (props) => {

  useEffect(() => {
  window.scrollTo(0,0);
},[])
  // 
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [enableBtn, setEnableBtn] = useState(true);
  const [approved, setApproved] = useState(true);
  const handleDone = () => {
    console.log("handleDone");
    setApproved(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="paymentsPage__Wrapper"
    >
      
      {approved ? (
        <div className="innerWrapper">
          <div className="leftSide">
            <div className="enterAddress">
              <span>Address</span>
              <input
                type="text"
                value={address}
                placeholder="Enter Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                  if (props.user !== null && address && cardName && cardNumber)
                    setEnableBtn(false);
                }}
              />
            </div>
            <div className="paymentInfo">
              <span className="addDCorCC">Add Credit or Debit Card</span>
              <div className="cardNumber">
                <span>Add Card Number: </span>
                <input
                  type="text"
                  placeholder="#### #### #### ####"
                  value={cardNumber}
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                    if (
                      props.user !== null &&
                      address &&
                      cardName &&
                      cardNumber
                    )
                      setEnableBtn(false);
                  }}
                />
              </div>
              <div className="cardName">
                <span>Add Card Name: </span>
                <input
                  type="text"
                  placeholder="Card Name"
                  value={cardName}
                  onChange={(e) => {
                    setCardName(e.target.value);
                    if (
                      props.user !== null &&
                      address &&
                      cardName &&
                      cardNumber
                    )
                      setEnableBtn(false);
                  }}
                />
                <button
                  disabled={enableBtn}
                  onClick={handleDone}
                  className="domeBtn"
                >
                  DONE
                </button>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <p>Amazon accepts all major credit and debit cards:</p>
            <img src={cardsImg} alt="cardsImg" />
          </div>
        </div>
      ) : (
        <div className="innerWrapper">
          <p className="textFinal">
            Your Request has been approved.Check your Email for furthur Details.
          </p>
        </div>
      )}
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart_Items: state.cart,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Payments);
