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
		default: "#2D2E31",
		paper: "#000000",
	},
	text: {
		primary: "#CBCBCB",
		secondary: "#8C8A97",
	},
};

export const darkPalette: PaletteOptions = {
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
		default: "#2D2E31",
		paper: "#000000",
	},
	text: {
		primary: "#CBCBCB",
		secondary: "#8C8A97",
	},
};

const palette = (mode: IThemeMode) =>
	mode === "dark" ? darkPalette : lightPalette;

export default palette;
