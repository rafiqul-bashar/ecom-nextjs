import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    user: authSlice,
    cart: cartSlice,
  },
});
