import { createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(rootReducer, composeWithDevTools());
