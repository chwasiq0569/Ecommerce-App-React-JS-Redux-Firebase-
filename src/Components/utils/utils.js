import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fire from "../../Firebase/Firebase";
import firebase from "firebase";

toast.configure();

export const notifySuccess = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifyDanger = (text) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const addToCart = (item, props) => {
  notifySuccess("Item is Added To Cart.");

  //dispatching function add_To_Cart to update state
  props.add_To_Cart({
    Id: item.Id,
    Title: item.Title,
    desc: item.Description,
    price: item.price,
    img: item.img,
    qty: 1,
  });
};

export const removeFromCart = (item, props) => {
  notifyDanger("Item is Removed From Cart");
  //on handleBtnCondition === true we will render addToCart Btn
  let newData = props.cart_Items.cart.cartItems.filter(
    (cartItem) => cartItem.Id !== item.Id
  );
  //here function is dispatched to remove Item
  props.remove_From_Cart(newData);
};

export const checkItemsStatus = (props, data, setHandleBtnCondition) => {
  props.cart_Items.cart.cartItems.forEach((e) => {
    //if Id of item in cart is equals to Id of any of (total items)
    //then render removeToCartBtn to that items whom Id is matched
    //if we dont do this then after adding items to cart if we go to another route and when we again jump back to homepage it will not render removeToCart Btn for items that are in the cart
    if (e.Id === data?.Id) {
      setHandleBtnCondition(false);
    }
  });
};

export const check_SignIn = (props, setShowsignInOrOut) => {
  return fire.auth().onAuthStateChanged((user) => {
    if (user) {
      //updated store if user is logged In then save user to store
      props.check_User(user);
      setShowsignInOrOut(false);
      return user;
    } else {
      console.log("User: ", user);
      props.check_User(user);
      setShowsignInOrOut(true);
      return user;
    }
  });
};

export const signOut = (props, setShowsignInOrOut) => {
  fire.auth().signOut();
  //updated store if user does not exist or logout then save null to store
  props.check_User(null);
  setShowsignInOrOut(true);
  notifyDanger("LogOut Successfull.");
};

export const onIncrement = (data, props, actualPrice) => {
  //stored cartItems in temporary array
  let arr = [...props.cart_Items.cart.cartItems];
  console.log("actualPrice: ", actualPrice);
  arr.filter((item) => {
    if (item.Id === data.Id) {
      item.qty = item.qty + 1;
      item.price = item.qty * parseInt(actualPrice);
    }
  });
  //updated state
  props.increase_quantity(arr);
};

export const onDecrement = (data, props, actualPrice) => {
  if (data.qty > 1) {
    let arr = [...props.cart_Items.cart.cartItems];
    arr.filter((item) => {
      if (item.Id === data.Id) {
        item.qty = item.qty - 1;
        item.price = parseInt(item.price) - parseInt(actualPrice);
      }
    });
    props.decrease_quantity(arr);
  } else if (data.qty === 1) {
    //if item has only 1 quantity
    removeFromCart(data, props);
  }
};

////

export const signInWithGoogle = (props) => {
  const base_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(base_provider)
    .then(function (result) {
      if (props.cart_Items.cart.cartItems.length !== 0) {
        props.history.push("/cart");
      } else {
        props.history.push("/home");
      }
      notifySuccess("LogIn Sucessfully!");
    })
    .catch(function (error) {
      notifyDanger("Unfortunatly an Error Occured!");
    });
};

export const login = (props, email, password, setFireErrors) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      if (props.cart_Items.cart.cartItems.length !== 0) {
        props.history.push("/cart");
      } else {
        props.history.push("/home");
      }
      notifySuccess("LogIn Sucessfully!");
    })
    .catch((error) => {
      setFireErrors(error.message);
      notifyDanger("Unfortunatly an Error Occured!");
    });
};

export const signUp = (props, email, password, setFireErrors) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      if (props.cart_Items.cart.cartItems.length !== 0) {
        props.history.push("/cart");
      } else {
        props.history.push("/home");
      }
      notifySuccess("SignUp Sucessfully!");
    })
    .catch(function (error) {
      setFireErrors(error.message);
      notifyDanger("Unfortunatly an Error Occured!");
    });
};
