import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/authActions";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(register.rejected, state => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(login.pending, state => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload)
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, state => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;