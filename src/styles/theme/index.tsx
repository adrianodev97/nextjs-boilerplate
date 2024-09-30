"use client";

import { useAppSelector } from "@/store/hooks";
import { themeModeSelector } from "@/store/themeModeReducers/slice";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import { ThemeSelector, theme } from "./theme";

export const ThemeProviderWithMode = ({
	children,
}: { children: ReactNode }) => {
	const themeMode = useAppSelector(themeModeSelector);

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
