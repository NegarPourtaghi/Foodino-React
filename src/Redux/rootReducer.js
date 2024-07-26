import { combineReducers } from "redux";
import cartReducer from "./Cart/OrderReducer";

const rootReducer = combineReducers({
  CartState: cartReducer,
});

export default rootReducer;
