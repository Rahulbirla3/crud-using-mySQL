import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: "Rahul" }

export const printSlice = createSlice({
    name: 'print',
    initialState,
    reducers: {
        changeName: (state, actions) => {
            state.name = "birla"
        }
    }
});

// this is for dispatch
export const { changeName } = printSlice.actions;

// this is for configureStore
export default printSlice.reducer;