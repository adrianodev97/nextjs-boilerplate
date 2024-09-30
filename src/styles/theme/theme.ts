import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import palette, { lightPalette } from "./palette";
import type { IThemeMode } from "./types";
import typography from "./typography";

export const ThemeSelector = (mode: IThemeMode) => {
	const theme = createTheme({
		palette: palette(mode),
		typography,
		breakpoints,
	});

	return theme;
};

export const theme = createTheme({
	palette: lightPalette,
	typography,
	breakpoints,
});
