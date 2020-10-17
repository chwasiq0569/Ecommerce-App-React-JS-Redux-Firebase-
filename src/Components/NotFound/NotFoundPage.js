import React from "react";
import "./notFoundpage.scss";
import notFoundImg from "../../images/notFoundImg.svg";
const NotFoundPage = (props) => {
  console.log(props.history);
  const jumpToHome = () => {
    console.log(props);
    props.history.replace("/home");
  };
  return (
    <div className="notFound__Page__Wrapper">
      <div className="InnerWrapper">
        <div className="leftSide">
          <h1>Page not found</h1>
          <p>
            We could not find the page you are looking for on our servers, try
            again later
          </p>
          <button className="backToHomeBtn" onClick={jumpToHome}>
            Back To Home
          </button>
        </div>
        <div className="rightSide">
          <img src={notFoundImg} alt="notFoundImg" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
