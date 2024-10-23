import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instanse = axios.create({
    baseURL: "https://connections-api.goit.global",
});


//RESTRATION
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("/users/signup", credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

//LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await instanse.post("/users/login", credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);