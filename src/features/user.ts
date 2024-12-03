import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export interface User {
  token: string;
  fullName: string;
  permissions: string[];
  avatar: string;
}
const initialState: User = {
  token: "",
  fullName: "",
  permissions: [],
  avatar: "",
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, userData) => {
      const _data = {
        token: userData.payload.token,
      };
      state.token = _data.token;
      Cookie.set("user", JSON.stringify(_data), {
        expires: Number(process.env.REACT_APP_COOKIE_EXPIRE_IN_DAYS) || 365,
      });
    },
    initial: (state) => {
      const user = Cookie.get("user");
      if (user) {
        state.token = JSON.parse(user).token;
      }
    },
    logout: (state) => {
      state = {
        token: "",
        fullName: "",
        permissions: [""],
        avatar: "",
      };
      Cookie.remove("user");
      window.location.replace("/");
    },
    setProfile: (state, userData) => {
      state.fullName = userData.payload.fullName;
      state.permissions = userData.payload.permissions;
    },
  },
});
export const { initial, login, logout, setProfile } = user.actions;
export default user.reducer;
