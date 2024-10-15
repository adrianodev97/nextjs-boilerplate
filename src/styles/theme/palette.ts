import { type PaletteOptions, alpha } from "@mui/material/styles";
import type { IThemeMode } from "./types";

export const lightPalette: PaletteOptions = {
	primary: {
		main: "#027AF2",
		light: "#99CCFF",
		dark: "#0059B3",
		contrastText: "#E5F2FF",
	},
	secondary: {
		main: "#DBECFF",
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
		main: "#4DA6FF",
		light: "#D6EBFF",
		dark: "#1C8CFD",
		contrastText: "#F5F6FA",
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
	divider: alpha("#C2C9D6", 0.4),
	text: {
		primary: "#212121",
		secondary: "#5F5C6B",
	},
	action: {
		hover: alpha("#DADEE7", 0.2),
		selected: `${alpha("#DADEE7", 0.3)}`,
	},
};

export const darkPalette: PaletteOptions = {
	primary: {
		main: "#027AF2",
		light: "#4DA6FF",
		dark: "#0059B3",
		contrastText: "#E5F2FF",
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
		main: "#0059B3",
		light: "#026BD4",
		dark: "#00366B",
		contrastText: "#4DA6FF",
	},
	success: {
		main: "#4CAF50",
		light: "#80E27E",
		dark: "#087F23",
	},
	grey: {
		"50": "#F5F6FA",
		"100": "#EBEEF4",
		"200": "#DADEE7",
		"300": "#C2C9D6",
		"400": "#94A0B8",
		"500": "#566481",
		"600": "#47536B",
		"700": "#333B4D",
		"800": "#0B0E14",
		"900": "#05070A",
	},
	background: {
		default: "#05070A",
		paper: "#0C1017",
	},
	divider: alpha("#333B4D", 0.6),
	text: {
		primary: "#E0E0E0",
		secondary: "#B0B0B0",
	},
	action: {
		hover: alpha("#47536B", 0.2),
		selected: `${alpha("#47536B", 0.3)}`,
	},
};

const palette = (mode: IThemeMode) =>
	mode === "dark" ? darkPalette : lightPalette;

export default palette;
