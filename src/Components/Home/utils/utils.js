import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
