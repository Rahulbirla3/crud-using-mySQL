import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";

export default configureStore({
  reducer: {
    carts: cardReducer,
  },
  devTools: true,
});
