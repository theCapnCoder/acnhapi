import { createSlice } from "@reduxjs/toolkit"
import { getAllFish } from "./actionCreators/getAllFish"
import { AxiosError } from "axios"
import { Fish } from "../../../pages/creature/type"

type InitialState = {
  fish: { [fishName: string]: Fish };
  status: 'idle' | 'loading' | "success" | 'failed',
  error: string | undefined,
}

const initialState: InitialState = {
  fish: {},
  status: 'loading',
  error: undefined 
}

const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllFish.pending, (state) => {
        state.status = 'loading'
        state.error = undefined
      })
      .addCase(getAllFish.fulfilled, (state, action) => {
        state.status = 'success'
        state.fish = action.payload
      })
      .addCase(getAllFish.rejected, (state, action) => {
        state.status = 'failed'
        state.error = (action.payload as AxiosError).message 
      })
  }
})

export default fishSlice.reducer;