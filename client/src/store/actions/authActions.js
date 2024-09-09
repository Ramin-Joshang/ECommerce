import { postUserData, setCookie, setTokenToAxios } from "@/helper";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/auth/register", formData);
            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const login = createAsyncThunk("auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/auth/login", formData);
            setCookie("jwt", data.token, 1);
            postUserData(data.data);
            setTokenToAxios();
            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)