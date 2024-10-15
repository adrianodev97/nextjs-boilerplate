"use client";

import { Button, Toolbar, alpha, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexShrink: 0,
	borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
	backdropFilter: "blur(24px)",
	border: "1px solid",
	borderColor: theme.palette.divider,
	backgroundColor: alpha(theme.palette.background.default, 0.4),
	boxShadow: theme.shadows[1],
	padding: "8px 12px",
}));

export const StyledNavButton = styled(Button)(({ theme }) => ({
	color: theme.palette.grey[600],
	"&:hover": {
		backgroundColor: theme.palette.grey[100],
	},
	"&:active": {
		backgroundColor: theme.palette.grey[200],
	},
	...theme.applyStyles("dark", {
		color: theme.palette.grey[50],
		"&:hover": {
			backgroundColor: theme.palette.grey[700],
		},
		"&:active": {
			backgroundColor: alpha(theme.palette.grey[700], 0.7),
		},
	}),
}));
