import React from "react";
const Button = ({ className, text, func, type }) => {
  return (
    <button type={type} className={className} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
