import { Button, Container, Grid2 as Grid } from "@mui/material";

export default function Home() {
	return (
		<main>
			<Container>
				<Grid container gap={3}>
					<Grid size={12} sx={{ textAlign: "center" }}>
						<h1>Welcome to the MUI V6 boilerplate using NextJs</h1>
					</Grid>
					<Grid size={12}>
						<Button variant="contained" color="primary">
							Button Overrides
						</Button>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
