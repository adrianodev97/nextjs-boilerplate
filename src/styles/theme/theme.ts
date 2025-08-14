import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";
import type { IThemeMode } from "./types";
import typography from "./typography";

export const ThemeSelector = (mode: IThemeMode) => {
	const baseTheme = createTheme({
		palette: palette(mode),
		typography,
		breakpoints,
	});

	const theme = createTheme({
		palette: palette(mode),
		typography,
		breakpoints,
		components: components(baseTheme),
	});

	return theme;
};
