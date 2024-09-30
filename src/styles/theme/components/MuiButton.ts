import type {
	ComponentsOverrides,
	ComponentsProps,
	ComponentsVariants,
	Theme,
} from "@mui/material";

type MuiButton = {
	defaultProps?: ComponentsProps["MuiButton"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
	variants?: ComponentsVariants["MuiButton"];
};

const styles = ({ palette }: Theme): MuiButton => ({
	styleOverrides: {
		contained: {
			color: palette.common.white,
			backgroundColor: palette.primary.main,
			"&:hover": {
				backgroundColor: palette.primary.dark,
			},
		},

		outlined: {
			color: palette.text.primary,
			border: "1px solid rgba(0, 0, 0, 0.23)",
			"&:hover": {
				backgroundColor: palette.background.default,
				border: "1px solid rgba(0, 0, 0, 0.23)",
			},
		},
	},
});

export default styles;
