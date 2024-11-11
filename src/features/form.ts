import { createSlice } from "@reduxjs/toolkit";

export interface Form {
  depend: boolean;
}

const initialState: Form = {
  depend: false,
};

export const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggle: (state) => {
      state.depend = !state.depend;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = form.actions;

export default form.reducer;
