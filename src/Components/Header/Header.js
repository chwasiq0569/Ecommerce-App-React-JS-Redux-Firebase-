import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../images/logoFinal.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.scss";
import { check_User } from "../../Redux/Actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { check_SignIn, signOut } from "../utils/utils";
import SearchBar from "./SearchBar";

toast.configure();
const Header = (props) => {
  //if showsignInOrOut false it will show signOut Btn and otherwise it will render singIn Btn
  const [showsignInOrOut, setShowsignInOrOut] = useState(false);

  useEffect(() => {
    const unsubscribe = check_SignIn(props, setShowsignInOrOut);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="header__body">
      <nav className="header__navbar">
        <div className="header__nav__logo">
          <Link to="/">
            <img className="logo__png" src={Logo} alt="brand__logo" />
          </Link>
        </div>
        <SearchBar />
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
                <span
                  onClick={() => signOut(props, setShowsignInOrOut)}
                  className="authSpans"
                >
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
              {/* length of cartItems array */}
              <span className="cartItems">
                {props.cart_Items.cart.cartItems.length}
              </span>
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
