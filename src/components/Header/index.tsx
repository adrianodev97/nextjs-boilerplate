import { AppBar, Box, Button, Container, Typography } from "@mui/material";

import MenuMobile from "./components/MenuMobile";
import { StyledNavButton, StyledToolbar } from "./styles";

export default function Header() {
	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					boxShadow: 0,
					bgcolor: "transparent",
					backgroundImage: "none",
					mt: 3,
				}}
			>
				<Container maxWidth="lg">
					<StyledToolbar variant="dense" disableGutters>
						<Typography variant="h6" component="div" color="primary">
							Logo
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center", px: 0 }}>
							<Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
								<StyledNavButton variant="text" color="info" size="small">
									Features
								</StyledNavButton>
								<StyledNavButton variant="text" color="info" size="small">
									Testimonials
								</StyledNavButton>
								<StyledNavButton variant="text" color="info" size="small">
									Highlights
								</StyledNavButton>
								<StyledNavButton variant="text" color="info" size="small">
									Pricing
								</StyledNavButton>
								<StyledNavButton
									variant="text"
									color="info"
									size="small"
									sx={{ minWidth: 0 }}
								>
									FAQ
								</StyledNavButton>
								<StyledNavButton
									variant="text"
									color="info"
									size="small"
									sx={{ minWidth: 0 }}
								>
									Blog
								</StyledNavButton>
							</Box>
						</Box>
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
								gap: 1,
								alignItems: "center",
							}}
						>
							<Button color="primary" variant="text" size="small">
								Sign in
							</Button>
							<Button color="primary" variant="contained" size="small">
								Sign up
							</Button>
						</Box>
						<MenuMobile />
					</StyledToolbar>
				</Container>
			</AppBar>
			<Box sx={{ height: "128px" }} />
		</>
	);
}
