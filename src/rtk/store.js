import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  }
});

