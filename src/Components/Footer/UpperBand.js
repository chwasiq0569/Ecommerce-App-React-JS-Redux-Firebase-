import React from "react";
import { FiBox } from "react-icons/fi";

const UpperBand = () => {
  return (
    <div className="upperbanner">
      <div className="iconContainer">
        <FiBox color="#5642ff" size="2rem" />
      </div>
      <p>
        The <strong>Ganzin Group</strong> offers <strong>fast</strong> and{" "}
        <strong> safe delivery </strong>
        throughout Brazil for you.
      </p>
    </div>
  );
};

export default UpperBand;
