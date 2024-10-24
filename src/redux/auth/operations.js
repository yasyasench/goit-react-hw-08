import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instanse = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = token => {
  instanse.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Clear the auth header
const clearAuthHeader = () => {
  delete instanse.defaults.headers.common.Authorization;
}

// REGISTRATION
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// LOGOUT
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await instanse.post("/users/logout");
      clearAuthHeader(); // Clear the authorization header
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
