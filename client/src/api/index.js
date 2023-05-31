import axios from "axios";

export const FETCH_WRAPPER = axios.create({
  baseURL: "http://localhost:8000/v2/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});
