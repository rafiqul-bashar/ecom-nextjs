import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveProductToRedux(state, action) {
      state.products = action.payload;
    },
  },
});

export const { saveProductToRedux } = productSlice.actions;
export const loadedProducts = (state) => state.products.products;

export default productSlice.reducer;
