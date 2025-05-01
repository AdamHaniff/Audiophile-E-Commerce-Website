import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    type: null,
  },
  reducers: {
    showOverlay: (state, action) => {
      state.type = action.payload;
    },

    hideOverlay: (state) => {
      state.type = null;
    },
  },
});

export const { showOverlay, hideOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
