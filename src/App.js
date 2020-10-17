import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import NotFoundPage from "./Components/NotFound/NotFoundPage";
import AuthPage from "./Components/AuthPage/AuthPage";
import Payments from "./Components/Payments/Payments";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <AnimatePresence>
          <Switch>
            <Route path="/home/:productTitle" component={ProductPage} />
            <Route exact path="/payments" component={Payments} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </AnimatePresence>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
