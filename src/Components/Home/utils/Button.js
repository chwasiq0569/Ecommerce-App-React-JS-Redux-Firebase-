import React from "react";
const Button = ({ className, text, func }) => {
  return (
    <button className={className} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
