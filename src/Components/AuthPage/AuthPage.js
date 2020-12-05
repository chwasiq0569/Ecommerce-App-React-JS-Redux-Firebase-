import React, { useState, useEffect } from "react";
import fire from "../../Firebase/Firebase";
import newCustomerIcon from "../../images/icon-user-checkout.5fb1bf73.svg";
import "./authPage.scss";
import { connect } from "react-redux";
import { check_User } from "./../../Redux/Actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { signInWithGoogle } from "./../utils/utils";
import Button from "../utils/Button";
import Form from "./Form";

toast.configure();
const AuthPage = (props) => {
  const [email, setEmail] = useState("dummyUser@gmail.com");
  const [password, setPassword] = useState("dummyUser@gmail.com");
  const [fireErrors, setFireErrors] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [user, setUser] = useState(null);
  const onRegisterClick = (e) => {
    e.preventDefault();
    setShowBtn(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({ user });
        props.check_User(user);
      } else {
        setUser({ user: null });
        props.check_User(user);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="authPage__Wrapper"
    >
      <div className="wrapper">
        <div className="newCustomer">
          <img src={newCustomerIcon} alt="newCustomerIcon" />
          <span>New customer?</span>
        </div>
        <span className="regiter__InfoSpan">
          Register to follow the purchase process. It's easy and fast.
        </span>
        <Button
          className="registerBtn"
          type=""
          func={onRegisterClick}
          text="REGISTER"
        />
        <span className="alreadyRegistered">Already registered? Login</span>
        <Button
          className=""
          type="submit"
          text="SIGN IN WITH GOOGLE"
          func={(e) => {
            e.preventDefault();
            signInWithGoogle(props);
          }}
        />
        <Form
          setEmail={setEmail}
          email={email}
          setPassword={setPassword}
          password={password}
          showBtn={showBtn}
          setFireErrors={setFireErrors}
          fireErrors={fireErrors}
          props={props}
        />
      </div>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart_Items: state,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    check_User: (user) => dispatch(check_User(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
