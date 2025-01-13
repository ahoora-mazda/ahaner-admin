import axios from "axios";
import Cookie from "js-cookie";
import { User } from "../types/user";
import { toast } from "react-toastify";

export const baseURL = "https://api.ahaner.com";
// export const baseURL = "https://server.ahaner.site";
// export const baseURL = "http://192.168.1.6:9582";

export const API = axios.create({
  // baseURL: "https://server.ahaner.site/api/admin",
  baseURL: baseURL + "/api/admin",
});

API.interceptors.request.use(
  (config) => {
    let _userJson = Cookie.get("user");
    let _user: User = { full_name: "", token: "", mobile: "" };
    if (_userJson) {
      _user = JSON.parse(_userJson);
    }
    if (_user?.token) config.headers.Authorization = `Bearer ${_user?.token}`;
    return config;
  },
  (error) => {
    toast.error("خطایی پیش آمده است لطفا مجددا تلاش نمایید.");

    return Promise.reject(error);
  }
);
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      Cookie.remove("user");
      window.location.replace("/login");
    }
    if (error?.response?.status === 403) {
      window.location.replace("/");
    } else if (error?.response?.status === 422) {
      let _errors = error.response.data.errors;
      Object.keys(_errors).map((ele) => toast.error(_errors[ele][0]));
      toast.error(_errors);
    } else if (
      error?.response?.data?.message &&
      typeof error.response.data.message === "string"
    ) {
      toast.error(error.response.data.message);
    } else if (typeof error?.response?.message === "string") {
      toast.error(error.response.message);
    } else {
      toast.error("خطایی پیش آمده است. لطفا مجددا تلاش نمایید.");
    }
    return Promise.reject(error);
  }
);
