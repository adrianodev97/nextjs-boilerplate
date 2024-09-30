"use client";

import type { IThemeMode } from "@/styles/theme/types";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IThemeModeState } from "./types";

const initialState: IThemeModeState = {
	mode: "light",
};

const themeModeSlice = createSlice({
	name: "themeMode",
	initialState,
	reducers: {
		toggleThemeMode(state, payload: PayloadAction<{ mode?: IThemeMode }>) {
			if (payload.payload?.mode) {
				state.mode = payload.payload.mode;
			} else {
				state.mode = state.mode === "dark" ? "light" : "dark";
			}
			if (typeof window !== "undefined") {
				window.localStorage.setItem("themeMode", state.mode);
			}
		},
	},
});

export const themeModeActions = themeModeSlice.actions;

export default themeModeSlice.reducer;

export const themeModeSelector = (state: RootState) => state.themeMode.mode;
