import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../images/logoFinal.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import fire from "../../Firebase/Firebase";
import "./header.scss";
import { check_User } from "../../Redux/Actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Header = (props) => {
  let items = props.cart_Items.cart.cartItems;
  const [showsignInOrOut, setShowsignInOrOut] = useState(false);
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("loggedIn");
        props.check_User(user);
        setShowsignInOrOut(false); //if false to ShowSignOut
      } else {
        props.check_User(user);
        console.log("loggedOut");
        setShowsignInOrOut(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signOut = () => {
    fire.auth().signOut();
    props.check_User(null);
    setShowsignInOrOut(true);
    toast.warn("LogOut Successfull.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  console.log(props.user);

  return (
    <div className="header__body">
      <nav className="header__navbar">
        <div className="header__nav__logo">
          <Link to="/">
            <img className="logo__png" src={Logo} alt="brand__logo" />
          </Link>
        </div>
        <div className="header__nav__search">
          <input className="searchBar" type="search" placeholder="Search" />
          <button className="searchBar__Btn">
            <FiSearch color="white" size="1.3rem" />
          </button>
        </div>
        <div className="header__nav__lastCol">
          <div className="lastCol__User">
            <AiOutlineUser color="white" size="2rem" />
            {showsignInOrOut ? (
              <Link to="/auth" className="links">
                <span className="authSpans">Sign In</span>
              </Link>
            ) : (
              <div className="siginIn__Div">
                <span>{props.user?.user?.email}</span>
                <span onClick={signOut} className="authSpans">
                  Sign Out
                </span>
              </div>
            )}
          </div>
          <Link
            to="/cart"
            className="cartLink"
            style={{ textDecoration: "none" }}
          >
            <div className="lastCol__Cart">
              <MdShoppingCart
                className="shoppingCart__Icon"
                color="white"
                size="1.7rem"
              />
              <span className="cartItems">{items.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
