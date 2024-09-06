import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    // user: null
}

export const register = createAsyncThunk("/auth/register", async formData => {
    const response = await axios.post("http://localhost:8000/api/auth/register", formData)
    return response.data;
})

export const login = createAsyncThunk("/auth/login", async formData => {
    const response = await axios.post("http://localhost:8000/api/auth/login", formData)
    return response.data;
})

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
                // state.user = null;
                // state.isAuthenticated = false;
            })
            .addCase(register.rejected, state => {
                state.isLoading = false;
                // state.user = null;
                // state.isAuthenticated = false;
            })
            .addCase(login.pending, state => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.user = action.payload;
                // state.isAuthenticated = true;
            })
            .addCase(login.rejected, state => {
                state.isLoading = false;
                // state.user = null;
                // state.isAuthenticated = false;
            })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;