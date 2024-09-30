"use client";

import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import { ThemeSelector, theme } from "./theme";
import type { IThemeMode } from "./types";

export const ThemeProviderWithMode = ({
	children,
	themeMode,
}: { children: ReactNode; themeMode: IThemeMode }) => {
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
