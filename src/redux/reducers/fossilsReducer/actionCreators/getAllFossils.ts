import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { Fossils } from "../type";

export const getAllFossils = createAsyncThunk(
  'fossils/getFossils',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://acnhapi.com/v1/fossils`)
      const data = await response.json()

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

