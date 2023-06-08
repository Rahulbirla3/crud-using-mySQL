import axios from "axios";

const token = localStorage.getItem("token");

export const FETCH_WRAPPER = axios.create({
  baseURL: "http://localhost:8000/v2/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    Authorization: token,
  },
});
