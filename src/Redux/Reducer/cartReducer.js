import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
} from "../Actions/ActionTypes";
import { INCREASE_QUANTITY } from "./../Actions/ActionTypes";
const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  let newArr = state.cartItems;
  console.log(newArr);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [...action.payload],
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    default:
      return { ...state };
  }
};
