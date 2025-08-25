import type { Components, Theme } from "@mui/material";
import MuiAccordion from "./MuiAccordion";
import MuiButton from "./MuiButton";
import MuiContainer from "./MuiContainer";
import MuiCssBaseline from "./MuiCssBaseline";
import MuiTextField from "./MuiTextField";
import MuiToolbar from "./MuiToolbar";

const components = (theme: Theme): Components<Theme> => ({
	MuiButton: MuiButton(theme),
	MuiContainer: MuiContainer(theme),
	MuiTextField: MuiTextField(theme),
	MuiToolbar: MuiToolbar(theme),
	MuiCssBaseline: MuiCssBaseline(theme),
	MuiAccordion: MuiAccordion(theme),
});

export default components;
