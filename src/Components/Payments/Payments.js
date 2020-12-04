import React, { useState, useEffect } from "react";
import "./payments.scss";
import cardsImg from "../../images/cards.png";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import DelieveryDetailsForm from "./DelieveryDetailsForm";
const Payments = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [enableBtn, setEnableBtn] = useState(true);
  const [approved, setApproved] = useState(false);

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
      {!approved ? (
        <div className="innerWrapper">
          <DelieveryDetailsForm
            address={address}
            setAddress={setAddress}
            setCardNumber={setCardNumber}
            cardName={cardName}
            setCardName={setCardName}
            cardNumber={cardNumber}
            setEnableBtn={setEnableBtn}
            enableBtn={enableBtn}
            handleDone={handleDone}
            props={props}
          />
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
