import type { PaletteOptions } from "@mui/material/styles";
import type { IThemeMode } from "./types";

export const lightPalette: PaletteOptions = {
	primary: {
		main: "#7928ca",
	},
	secondary: {
		main: "#ff0080",
	},
	error: {
		main: "#EF4444",
	},
	warning: {
		main: "#F59E0B",
	},
	info: {
		main: "#2196F3",
	},
	success: {
		main: "#4CAF50",
	},
	grey: {
		"50": "#fafafa",
		"100": "#eeeeee",
		"200": "#e0e0e0",
		"300": "#C8C8CA",
		"400": "#8C8A97",
		"500": "#7A7786",
		"600": "#5F5C6B",
		"700": "#4E4B59",
		"800": "#34323E",
		"900": "#212121",
	},
	background: {
		default: "#F9FAFB",
		paper: "#E5E7EB",
		secondary: "#D1D5DB",
	},
	text: {
		primary: "#333333",
		secondary: "#666666",
	},
};

export const darkPalette: PaletteOptions = {
	primary: {
		main: "#6E05EE",
	},
	secondary: {
		main: "#ff0080",
	},
	error: {
		main: "#EF4444",
	},
	warning: {
		main: "#F59E0B",
	},
	info: {
		main: "#2196F3",
	},
	success: {
		main: "#4CAF50",
	},
	grey: {
		"50": "#fafafa",
		"100": "#eeeeee",
		"200": "#e0e0e0",
		"300": "#C8C8CA",
		"400": "#8C8A97",
		"500": "#7A7786",
		"600": "#5F5C6B",
		"700": "#4E4B59",
		"800": "#34323E",
		"900": "#212121",
	},
	background: {
		default: "#161616",
		paper: "#2A2A2A",
		secondary: "#1A1A24",
	},
	text: {
		primary: "#FFFFFF",
		secondary: "#969799",
	},
	divider: "#E5E7EB",
};

const palette = (mode: IThemeMode) =>
	mode === "dark" ? darkPalette : lightPalette;

export default palette;
