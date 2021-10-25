import { createSlice } from "@reduxjs/toolkit";
import authOperations from "../auth/auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isreFreshCurrentPage: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.reFreshCurrentPage.pending](state) {
      state.isreFreshCurrentPage = true;
    },
    [authOperations.reFreshCurrentPage.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isreFreshCurrentPage = false;
    },
    [authOperations.reFreshCurrentPage.rejected](state) {
      state.isreFreshCurrentPage = false;
    },
  },
});

export default authSlice.reducer;
