import {
	type ComponentsOverrides,
	type ComponentsProps,
	type ComponentsVariants,
	type Theme,
	alpha,
} from "@mui/material";

type MuiToolbar = {
	defaultProps?: ComponentsProps["MuiToolbar"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiToolbar"];
	variants?: ComponentsVariants["MuiToolbar"];
};

const styles = ({ palette, shape }: Theme): MuiToolbar => ({
	styleOverrides: {
		root: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			flexShrink: 0,
			borderRadius: `calc(${shape.borderRadius}px + 4px)`,
			backdropFilter: "blur(20px)",
			backgroundColor: alpha(palette.common.black, 0.2),
			padding: "8px 12px",
		},
	},
});

export default styles;
