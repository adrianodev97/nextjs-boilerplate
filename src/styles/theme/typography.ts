import type { TypographyVariantsOptions } from "@mui/material";
import { Inter, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700"],
});

export const typography: TypographyVariantsOptions = {
	// fontFamily: `${inter.variable}, sans-serif`,
	fontFamily: `${spaceGrotesk.variable}, sans-serif`,
	h1: {
		fontSize: "clamp(2.6rem, 5vw, 4rem)",
		fontWeight: 700,
		lineHeight: 1,
	},
	h2: {
		fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
		fontWeight: 700,
		lineHeight: 1,
	},
	h3: {
		fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
		fontWeight: 700,
		lineHeight: 1,
	},
	h4: {
		fontSize: "clamp(2rem, 3vw, 2.6rem)",
		fontWeight: 600,
		lineHeight: 1.1,
	},
	h5: {
		fontSize: "1.8rem",
		fontWeight: 600,
		lineHeight: 1.2,
	},
	h6: {
		fontSize: "1.6rem",
		fontWeight: 600,
		lineHeight: 1.3,
	},
	subtitle1: {
		fontSize: "1rem",
		fontWeight: 400,
		lineHeight: 1.75,
	},
	subtitle2: {
		fontSize: "0.875rem",
		fontWeight: 500,
		lineHeight: 1.57,
	},
	body1: {
		fontSize: "1.25rem",
		fontWeight: 400,
		lineHeight: 1.5,
	},
	body2: {
		fontSize: "1rem",
		fontWeight: 400,
		lineHeight: 1.43,
	},
	button: {
		fontSize: "1rem",
		fontWeight: 400,
		lineHeight: 1.25,
	},
	caption: {
		fontSize: "0.75rem",
		fontWeight: 400,
		lineHeight: 1.66,
	},
	overline: {
		fontSize: "0.75rem",
		fontWeight: 400,
		lineHeight: 2.66,
		textTransform: "uppercase",
	},
};

export default typography;
