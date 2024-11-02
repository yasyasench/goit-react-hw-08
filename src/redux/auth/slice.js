import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const initialState = {
    user: {
        name: "",
        email: "",
    },
    token: "",
    isLoggedIn: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled, () => initialState)
            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refresh.rejected, (state) => {
                state.isRefreshing = false;
            });
        
    }

});

export const authSlice = slice.reducer;
