import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from "./slices/overlaySlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    cart: cartReducer,
  },
});
