import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    click: true,
  },
  reducers: {
    addClick: (state, action) => {
      state.click = !state.click;
    },
  },
});

export const { addClick } = appSlice.actions;
export default appSlice.reducer;
