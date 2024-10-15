"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

import {
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	MenuItem,
} from "@mui/material";
import { useState } from "react";

const MenuMobile = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<Box sx={{ display: { sm: "flex", md: "none" } }}>
			<IconButton
				aria-label="Menu button"
				onClick={toggleDrawer(true)}
				color="primary"
			>
				<MenuIcon />
			</IconButton>
			<Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
				<Box sx={{ p: 2, backgroundColor: "background.default" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<IconButton onClick={toggleDrawer(false)} color="primary">
							<CloseRoundedIcon />
						</IconButton>
					</Box>
					<Divider sx={{ my: 3 }} />
					<MenuItem>Features</MenuItem>
					<MenuItem>Testimonials</MenuItem>
					<MenuItem>Highlights</MenuItem>
					<MenuItem>Pricing</MenuItem>
					<MenuItem>FAQ</MenuItem>
					<MenuItem>Blog</MenuItem>
					<MenuItem>
						<Button color="primary" variant="contained" fullWidth>
							Sign up
						</Button>
					</MenuItem>
					<MenuItem>
						<Button color="primary" variant="outlined" fullWidth>
							Sign in
						</Button>
					</MenuItem>
				</Box>
			</Drawer>
		</Box>
	);
};

export default MenuMobile;
