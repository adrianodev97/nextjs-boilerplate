import type { Components, Theme } from "@mui/material";
import MuiButton from "./MuiButton";

const components = (theme: Theme): Components<Theme> => ({
	MuiButton: MuiButton(theme),
});

export default components;
