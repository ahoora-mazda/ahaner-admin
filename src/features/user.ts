import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export interface User {
  token: string;
  fullName: string;
  role: string[];
  active_fiscal_year: any;
  active_fiscal_year_item: any;
  firstname: string;
  lastname: string;
  mobile: string;
  nationalcode: string;
  status_employee: string;
  created_at: string;
  avatar: string;
  roleOne: "admin" | "subscriber";
  username: string;
  password: string;
  id: string | number;
  amount_membership_fee: string | number;
  roleName: string;
}
const initialState: User = {
  token: "",
  fullName: "",
  firstname: "",
  lastname: "",
  mobile: "",
  nationalcode: "",
  status_employee: "",
  created_at: "",
  avatar: "",
  active_fiscal_year: {},
  role: [""],
  active_fiscal_year_item: {},
  roleOne: "admin",
  username: "",
  password: "",
  id: 0,
  amount_membership_fee: 0,
  roleName: "",
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, userData) => {
      const _data = {
        token: userData.payload.token,
        roleOne: userData.payload.roleOne,
      };
      state.token = _data.token;
      state.roleOne = _data.roleOne;
      Cookie.set("user", JSON.stringify(_data), {
        expires: Number(process.env.REACT_APP_COOKIE_EXPIRE_IN_DAYS) || 365,
      });
    },
    initial: state => {
      const user = Cookie.get("user");
      if (user) {
        state.token = JSON.parse(user).token;
        state.roleOne = JSON.parse(user).roleOne;
      }
    },
    logout: state => {
      state = {
        token: "",
        fullName: "",
        role: [""],
        active_fiscal_year: {},
        active_fiscal_year_item: {},
        firstname: "",
        lastname: "",
        mobile: "",
        nationalcode: "",
        status_employee: "",
        created_at: "",
        avatar: "",
        roleOne: "admin",
        username: "",
        password: "",
        amount_membership_fee: 0,
        id: 0,
        roleName: "",
      };
      Cookie.remove("user");
      window.location.replace("/");
    },
    setProfile: (state, userData) => {
      state.fullName = userData.payload.fullName;
      state.role = userData.payload.role;
      state.active_fiscal_year = userData.payload.active_fiscal_year;
      state.active_fiscal_year_item = userData.payload.active_fiscal_year_item;

      state.firstname = userData.payload.firstname;
      state.lastname = userData.payload.lastname;
      state.mobile = userData.payload.mobile;
      state.status_employee = userData.payload.status_employee;
      state.nationalcode = userData.payload.nationalcode;
      state.created_at = userData.payload.created_at;
      state.avatar = userData.payload.avatar;
      state.id = userData.payload.id;
      state.roleName = userData.payload.roleName;
    },
    setYear: (state, data) => {
      state.active_fiscal_year = data.payload.active_fiscal_year;
      state.active_fiscal_year_item = data.payload.active_fiscal_year_item;
    },
    setPayment: (state, data) => {
      state.username = data.payload.username;
      state.password = data.payload.password;
      state.id = data.payload.id;
      state.amount_membership_fee = data.payload.amount_membership_fee;
    },
  },
});
export const { initial, login, logout, setProfile, setYear, setPayment } =
  user.actions;
export default user.reducer;
