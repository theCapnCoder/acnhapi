import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllFossils = createAsyncThunk(
  'fossils/getFossils',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://acnhapi.com/v1/villagers`)
      const data = await response.json()

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

