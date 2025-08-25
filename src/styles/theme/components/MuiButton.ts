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

const styles = ({ spacing, breakpoints }: Theme): MuiButton => ({
	styleOverrides: {
		root: {
			padding: spacing(2, 3),
			borderRadius: spacing(1),
			whiteSpace: "nowrap",
			textTransform: "capitalize",
			[breakpoints.only("xs")]: {
				width: "100%",
			},
		},
		outlined: {
			maxHeight: "52px",
		},
	},
});

export default styles;
