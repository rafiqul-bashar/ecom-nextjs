import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    user: authSlice,
    cart: cartSlice,
    products: productSlice,
  },
});
