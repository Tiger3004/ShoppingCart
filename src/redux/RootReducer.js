import { combineReducers } from "redux";
import ProductsReducer from "./Reducer";

const RootReducer = combineReducers({
  allItems: ProductsReducer,
});

export default RootReducer;
