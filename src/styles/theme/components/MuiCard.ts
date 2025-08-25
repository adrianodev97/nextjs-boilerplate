import type {
	ComponentsOverrides,
	ComponentsProps,
	ComponentsVariants,
	Theme,
} from "@mui/material";

type MuiCard = {
	defaultProps?: ComponentsProps["MuiCard"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiCard"];
	variants?: ComponentsVariants["MuiCard"];
};

const styles = (_theme: Theme): MuiCard => ({
	defaultProps: {},
});

export default styles;
