import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "settings",
  initialState: {
    loader: "d-none"
  },
  reducers: {
    displayLoader: (state) => {
      state.loader = 'd-block'

    },
    hideLoader: (state) => {
      state.loader = 'd-none'

    },
  }
})
export const { displayLoader, hideLoader } = settingSlice.actions
export default settingSlice.reducer