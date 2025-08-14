import type {
	ComponentsOverrides,
	ComponentsProps,
	ComponentsVariants,
	Theme,
} from "@mui/material";

type MuiContainer = {
	defaultProps?: ComponentsProps["MuiContainer"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiContainer"];
	variants?: ComponentsVariants["MuiContainer"];
};

const styles = (_theme: Theme): MuiContainer => ({
	defaultProps: {},
});

export default styles;
