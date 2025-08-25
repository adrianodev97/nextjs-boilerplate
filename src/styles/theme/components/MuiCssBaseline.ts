import type {
	ComponentsOverrides,
	ComponentsProps,
	ComponentsVariants,
	Theme,
} from "@mui/material";

type MuiCssBaseline = {
	defaultProps?: ComponentsProps["MuiCssBaseline"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiCssBaseline"];
	variants?: ComponentsVariants["MuiCssBaseline"];
};

const styles = (_theme: Theme): MuiCssBaseline => ({
	styleOverrides: {
		html: {
			scrollBehavior: "smooth",
			scrollPaddingTop: "100px",
		},
	},
});

export default styles;
