import { createSlice } from "@reduxjs/toolkit";
import { FETCH_WRAPPER } from "../api";

const initialState = { taskApiData: [] };

const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addApiData: (state, action) => {
      state.taskApiData = action.payload;
    },
  },
});

const token = localStorage.getItem("token");



export const { addApiData } = taskSlice.actions;

export default taskSlice.reducer;
