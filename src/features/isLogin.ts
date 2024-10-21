import { createSlice } from "@reduxjs/toolkit";

export interface IsLogin {
  status: boolean;
}
const initialState: IsLogin = {
  status: false,
};
export const isLogin = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    setTrue: state => {
      state.status = true;
    },
  },
});
export const { setTrue } = isLogin.actions;
export default isLogin.reducer;
