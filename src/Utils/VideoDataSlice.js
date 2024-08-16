import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "videoData",
  initialState: {
    videoData: [],
  },
  reducers: {
    addData: (state, action) => {
      state.videoData = action.payload;
    },
    removeData: (state) => {
      state.videoData = [];
    },
  },
});

export const { addData, removeData } = videoDataSlice.actions;
export default videoDataSlice.reducer;
