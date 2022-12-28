import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      //   Save in user
    },
    logOutUser: () => {
      //   logout
    },
  },
});

export const { logOutUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
