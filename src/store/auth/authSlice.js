import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoading: false,
isAuthenticaded: false,
user: null,
date : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticaded = true;
      state.date = new Date();
    }
  },
  logout: (state) =>{
    state.user = null;
    state.isAuthenticaded = false;
    state.date = null;
    state.isLoading = false;
  }
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer