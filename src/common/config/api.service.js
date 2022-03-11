import axios from "axios";
import Cookies from "js-cookie";
import Cookie from "js-cookie";

const token = Cookie.get("yeketak_token");

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  //   baseURL: "https://yeketak.com.tm/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = token ? `Bearer ${token}` : null;

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      Cookies.remove("yeketak_token");
    }
  }
);

export default api;
