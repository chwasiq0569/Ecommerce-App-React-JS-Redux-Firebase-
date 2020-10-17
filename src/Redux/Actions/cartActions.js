import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./ActionTypes";
export const add_to_cart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const remove_from_cart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
export const increase_quantity = (item) => {
  console.log("qty: ", item);
  return {
    type: INCREASE_QUANTITY,
    payload: item,
  };
};
export const decrease_quantity = (item) => {
  console.log("qty: ", item);
  return {
    type: DECREASE_QUANTITY,
    payload: item,
  };
};
