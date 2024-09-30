"use client";

import type { IThemeMode } from "@/styles/theme/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IThemeModeState } from "./types";

const getThemeMode = () => {
	let themeMode: IThemeMode = "light";

	if (typeof window !== "undefined") {
		const storedThemeMode = window.localStorage.getItem("themeMode");
		if (storedThemeMode === "dark" || storedThemeMode === "light") {
			themeMode = storedThemeMode;
		}
	}
	return themeMode;
};

const initialState: IThemeModeState = {
	mode: getThemeMode(),
};

const themeModeSlice = createSlice({
	name: "themeMode",
	initialState,
	reducers: {
		toggleThemeMode(state) {
			state.mode = state.mode === "dark" ? "light" : "dark";
			if (typeof window !== "undefined") {
				window.localStorage.setItem("themeMode", state.mode);
			}
		},
	},
});

export const themeModeActions = themeModeSlice.actions;

export default themeModeSlice.reducer;

export const themeModeSelector = (state: RootState) => state.themeMode.mode;
