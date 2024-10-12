"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { jsonPlaceholderSelector } from "@/store/jsonPlaceholderReducers/slice";
import { getPostByIdRequest } from "@/store/jsonPlaceholderReducers/thunk";
import {
	themeModeActions,
	themeModeSelector,
} from "@/store/themeModeReducers/slice";
import {
	Box,
	Button,
	Container,
	Grid2 as Grid,
	Skeleton,
	Switch,
	Typography,
} from "@mui/material";
import { useEffect } from "react";
import type { IHomePageProps } from "./types";

export default function Home({ content }: Readonly<IHomePageProps>) {
	const dispatch = useAppDispatch();

	const mode = useAppSelector(themeModeSelector);
	const { title, body, status } = useAppSelector(jsonPlaceholderSelector);

	const loading = status === "pending" || status === "idle";

	const handleThemeChange = () => {
		dispatch(themeModeActions.toggleThemeMode({}));
	};

	useEffect(() => {
		dispatch(getPostByIdRequest({ id: 1 }));
	}, [dispatch]);

	return (
		<main>
			<Container sx={{ minHeight: "200vh" }}>
				<Grid container gap={3}>
					<Grid size={12} sx={{ textAlign: "center" }}>
						<h1>{content.title}</h1>
					</Grid>
					<Grid size={12} sx={{ textAlign: "center" }}>
						<Switch
							checked={mode === "dark"}
							onChange={handleThemeChange}
							color="primary"
						/>
						<Typography variant="body1">
							{mode === "light" ? "Light Mode" : "Dark Mode"}
						</Typography>
					</Grid>
					<Grid
						size={12}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						gap={2}
						textAlign={"center"}
					>
						<Typography variant="h4" component="h1" gutterBottom>
							{loading ? <Skeleton animation={"wave"} /> : title}
						</Typography>

						<Typography variant="body1">
							{loading ? <Skeleton animation={"wave"} /> : body}
						</Typography>
						<Box marginX={"auto"}>
							<Button variant="contained" color="primary">
								{content.button}
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
