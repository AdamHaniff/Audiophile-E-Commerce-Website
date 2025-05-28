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

    incrementQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity < 10) {
        item.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
