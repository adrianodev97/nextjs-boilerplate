"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IThemeModeState } from "./types";

const initialState: IThemeModeState = {
	mode: localStorage.getItem("themeMode") === "dark" ? "dark" : "light",
};

const themeModeSlice = createSlice({
	name: "themeMode",
	initialState,
	reducers: {
		toggleThemeMode(state) {
			state.mode = state.mode === "dark" ? "light" : "dark";
			localStorage.setItem("themeMode", state.mode);
		},
	},
});

export const themeModeActions = themeModeSlice.actions;

export default themeModeSlice.reducer;

export const themeModeSelector = (state: RootState) => state.themeMode.mode;
