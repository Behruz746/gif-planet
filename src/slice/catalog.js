import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogToggle: false,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    catalogToggleHandler: (state, action) => {
      if (action.payload.icon) state.catalogToggle = action.payload.toggle;
    },
    catalogActive: (state, action) => {
      state.catalogToggle = action.payload;
    },
  },
});

export const { catalogToggleHandler, catalogActive } = catalogSlice.actions;
export default catalogSlice.reducer;
