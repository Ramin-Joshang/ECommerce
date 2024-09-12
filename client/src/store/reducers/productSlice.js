import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/productActions";


const initialState = {
    loading: false,
    products: [],
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllProducts.pending, state => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, { payload }) => {
                state.loading = true;
                state.products = payload;
            })
            .addCase(getAllProducts.rejected, (state, { payload }) => {
                state.loading = true;
                state.error = payload;
            })
})

export default productSlice.reducer;