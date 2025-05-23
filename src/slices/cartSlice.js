import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // Accumulate quantity
        const newQuantity = (existingItem.quantity += action.payload.quantity);
        existingItem.quantity = newQuantity > 10 ? 10 : newQuantity;
      } else {
        // Add new item
        state.push(action.payload);
      }
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addItemToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
