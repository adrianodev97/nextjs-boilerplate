import type { PaletteOptions } from "@mui/material/styles";
import type { IThemeMode } from "./types";

export const lightPalette: PaletteOptions = {
	primary: {
		main: "#11F8D6",
		light: "#46FDE2",
		dark: "#04D3B4",
	},
	secondary: {
		main: "#BFD4ED",
		light: "#DBECFF",
		dark: "#AEC6E1",
	},
	error: {
		main: "#F64F77",
		light: "#FC6F91",
		dark: "#DE3961",
	},
	warning: {
		main: "#F8AE3F",
		light: "#FFD569",
		dark: "#F49F1F",
	},
	info: {
		main: "#0288D1",
		light: "#03A9F4",
		dark: "#01579B",
	},
	success: {
		main: "#4BB543",
		light: "#93EE8D",
		dark: "#22801C",
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
		default: "#ffffff",
		paper: "#f5f5f5",
	},
	text: {
		primary: "#212121",
		secondary: "#5F5C6B",
	},
};

export const darkPalette: PaletteOptions = {
	primary: {
		main: "#BB86FC",
		light: "#D0A1FF",
		dark: "#9A67EA",
	},
	secondary: {
		main: "#03DAC6",
		light: "#66FFF9",
		dark: "#00B3A6",
	},
	error: {
		main: "#CF6679",
		light: "#FF8A9E",
		dark: "#B00020",
	},
	warning: {
		main: "#FBC02D",
		light: "#FFF263",
		dark: "#C49000",
	},
	info: {
		main: "#2196F3",
		light: "#6EC6FF",
		dark: "#0069C0",
	},
	success: {
		main: "#4CAF50",
		light: "#80E27E",
		dark: "#087F23",
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
		default: "#121212",
		paper: "#1E1E1E",
	},
	text: {
		primary: "#E0E0E0",
		secondary: "#B0B0B0",
	},
};

const palette = (mode: IThemeMode) =>
	mode === "dark" ? darkPalette : lightPalette;

export default palette;
