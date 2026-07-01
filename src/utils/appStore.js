import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import moviesReducer from "../slice/movieSlice";
import gptReducer from "../slice/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
