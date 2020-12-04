import { createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
//composeWithDevTools is devtools for redux we can use it via chrome extension
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(rootReducer, composeWithDevTools());
