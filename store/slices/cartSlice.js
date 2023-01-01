import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload };
        state.cartItems.push(tempProductItem);
        state.cartTotalQuantity = state.cartTotalQuantity + 1;
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartTotalQuantity--;
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id == action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id != cartItem.id
          );
          state.cartItems = nextCartItems;
          state.cartTotalQuantity = state.cartTotalQuantity - 1;
        }

        return state;
      });
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
    },
    getTotals(state, action) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price.toFixed(2) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total.toFixed(2);
    },
  },
});

export const { getTotals, addToCart, decreaseCart, removeFromCart, clearCart } =
  cartSlice.actions;
export const cartQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.cartTotalAmount;

export default cartSlice.reducer;
