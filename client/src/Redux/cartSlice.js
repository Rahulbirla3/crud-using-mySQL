import { createSlice } from "@reduxjs/toolkit";

const initialState = { cardProductsArr: [], cardNumber: 0 };

const cardSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    cartProducts: (state, action) => {
      console.log("hello", action.payload);
      state.cardProductsArr = [...action.payload];
      state.cardNumber = state.cardProductsArr.length;
    },
    cardLength: (state, payload) => {
      state.cardNumber = state.cardProductsArr.length;
    },
  },
});

export const { cartProducts , cardLength } = cardSlice.actions;

export default cardSlice.reducer;
