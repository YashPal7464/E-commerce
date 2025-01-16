import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
