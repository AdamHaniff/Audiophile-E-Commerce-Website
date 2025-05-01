import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from "./slices/overlaySlice";

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
  },
});
