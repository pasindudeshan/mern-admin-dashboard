import { createSlice } from "@reduxjs/toolkit";

//initial state of the app set to dark
const intialState = {
    mode: "dark";
};

//function to change the state of the app(theme)
export const globalSlice = createSlice({
    name: "global",
    intialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;