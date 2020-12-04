import React from "react";
const DelieveryDetailsForm = ({
  address,
  setAddress,
  setCardNumber,
  cardName,
  setCardName,
  cardNumber,
  setEnableBtn,
  enableBtn,
  handleDone,
  props,
}) => {
  return (
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
              if (props.user !== null && address && cardName && cardNumber)
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
              if (props.user !== null && address && cardName && cardNumber)
                setEnableBtn(false);
            }}
          />
          <button disabled={enableBtn} onClick={handleDone}>
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelieveryDetailsForm;
