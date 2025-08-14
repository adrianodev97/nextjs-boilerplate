"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
	themeModeActions,
	themeModeSelector,
} from "@/store/themeModeReducers/slice";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeSelector } from "./theme";
import type { IThemeMode } from "./types";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();

	const [isLoading, setLoading] = useState(true);
	const themeMode = useAppSelector(themeModeSelector);

	useEffect(() => {
		const userPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		const localThemeMode = window.localStorage.getItem(
			"themeMode",
		) as IThemeMode;

		if (localThemeMode) {
			dispatch(themeModeActions.toggleThemeMode({ mode: localThemeMode }));
		} else {
			const newTheme = userPrefersDark ? "dark" : "light";
			dispatch(themeModeActions.toggleThemeMode({ mode: newTheme }));
		}

		setLoading(false);
	}, [dispatch]);

	const themeObject = useMemo(
		() => ThemeSelector(themeMode as IThemeMode),
		[themeMode],
	);

	if (isLoading) {
		return null;
	}

	return (
		<MUIThemeProvider theme={themeObject}>
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
