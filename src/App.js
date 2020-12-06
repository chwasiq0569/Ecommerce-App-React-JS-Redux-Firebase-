import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import NotFoundPage from "./Components/NotFound/NotFoundPage";
import AuthPage from "./Components/AuthPage/AuthPage";
import Payments from "./Components/Payments/Payments";
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Switch>
          <Route path="/home/:Id" component={ProductPage} />
          <Route exact path="/auth" component={AuthPage} />

          <Route exact path="/payments" component={Payments} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect exact from="/" to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart_Items: state,
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
