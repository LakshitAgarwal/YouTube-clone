import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    click: true,
    isVideoPlaying: false,
  },
  reducers: {
    addClick: (state) => {
      state.click = !state.click;
    },
    setClickFalse: (state) => {
      state.click = false;
    },
  },
  setIsVideoPlayingTrue: (state) => {
    state.isVideoPlaying = true;
  },
});

export const { addClick, setClickFalse, setIsVideoPlayingTrue } =
  appSlice.actions;
export default appSlice.reducer;
