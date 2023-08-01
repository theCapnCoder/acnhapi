import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Fossil } from "./type";
import { getAllFossils } from "./actionCreators/getAllFossils";

type InitialState = {
  fossils: { [fossilName: string]: Fossil };
  status: 'loading' | "success" | 'failed',
  error: string | undefined,
}

const initialState: InitialState = {
  fossils: {},
  status: 'loading',
  error: undefined
}

const fossilsSlice = createSlice({
  name: "fossils",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllFossils.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllFossils.fulfilled, (state, action) => {
        state.status = 'success'
        state.fossils = action.payload
      })
      .addCase(getAllFossils.rejected, (state, action) => {
        state.status = 'failed'
        state.error = (action.payload as AxiosError).message
      })
  }

})

export default fossilsSlice.reducer;