import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
import taskSlice from "./taskSlice";

export default configureStore({
  reducer: {
    carts: cardReducer,
    tasks: taskSlice,
  },
  devTools: true,
});
