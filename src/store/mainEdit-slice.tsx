import { createSlice } from "@reduxjs/toolkit";

const mainEditSlice = createSlice({
  name: "mainEdit",
  initialState: { item: [], mainEditState: false },
  reducers: {
    toggle(state) {
      state.mainEditState = !state.mainEditState;
    },
  },
});

export const mainEditActions = mainEditSlice.actions;
export default mainEditSlice;
