import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllFish = createAsyncThunk(
  'fish/getAllFish',
  async (creatureType: string, thunkAPI) => {
    try {
      const response = await fetch(`https://acnhapi.com/v1/${creatureType}`)
      const data = await response.json()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)