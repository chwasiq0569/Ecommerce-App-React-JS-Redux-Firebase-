import React, { useState, useEffect } from "react";
import firebase from "firebase";
import fire from "../../Firebase/Firebase";
import newCustomerIcon from "../../images/icon-user-checkout.5fb1bf73.svg";
import "./authPage.scss";
import { connect } from "react-redux";
import { check_User } from "./../../Redux/Actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

toast.configure();
const AuthPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fireErrors, setFireErrors] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [user, setUser] = useState(null);

  const onRegisterClick = (e) => {
    e.preventDefault();
    setShowBtn(true);
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    const base_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(base_provider)
      .then(function (result) {
        console.log("result: ", result);
        props.history.push("/payments");
        toast.success("LogIn Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully Logged In");
        props.history.push("/payments");
        toast.success("LogIn Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setFireErrors(error.message);
        console.log(fireErrors);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("New User Created Successfully");
        props.history.push("/payments");
        toast.success("Sign Up Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        setFireErrors(error.message);
        console.log(fireErrors);
      });
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
        <button className="registerBtn" onClick={onRegisterClick}>
          REGISTER
        </button>
        <span className="alreadyRegistered">Already registered? Login</span>
        <button type="submit" onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </button>
        <div className="signIn__form">
          {fireErrors ? <p className="fireErrors">{fireErrors}</p> : null}
          <form>
            <label name="email">Email*</label>
            <input
              type="email"
              className="emailInput"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label name="password">Password*</label>
            <input
              type="password"
              className="passwordInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            {showBtn ? (
              <button type="submit" onClick={signUp}>
                SIGN UP
              </button>
            ) : (
              <button type="submit" onClick={login}>
                CONTINUE
              </button>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    check_User: (user) => dispatch(check_User(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
