import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import VideoDataSlice from "./VideoDataSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    vidData: VideoDataSlice,
  },
});

export default store;
