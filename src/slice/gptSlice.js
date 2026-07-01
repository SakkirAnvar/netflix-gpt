import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    addToggleViewSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});

export const { addToggleViewSearch } = gptSlice.actions;

export default gptSlice.reducer;
