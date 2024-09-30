"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
	themeModeActions,
	themeModeSelector,
} from "@/store/themeModeReducers/slice";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { type ReactNode, useEffect } from "react";
import { ThemeSelector, theme } from "./theme";
import type { IThemeMode } from "./types";

export const ThemeProviderWithMode = ({
	children,
}: { children: ReactNode }) => {
	const dispatch = useAppDispatch();

	const themeMode = useAppSelector(themeModeSelector);

	useEffect(() => {
		const localThemeMode = window.localStorage.getItem(
			"themeMode",
		) as IThemeMode;
		if (localThemeMode) {
			dispatch(themeModeActions.toggleThemeMode({ mode: localThemeMode }));
		}
	}, [dispatch]);

	return (
		<MUIThemeProvider theme={ThemeSelector(themeMode)}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	);
};

export const ThemeProviderWithoutMode = ({
	children,
}: { children: ReactNode }) => {
	return (
		<MUIThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	);
};
