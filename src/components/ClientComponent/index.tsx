"use client";

import { Box, Button, Grid, Skeleton, Switch, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { jsonPlaceholderSelector } from "@/store/jsonPlaceholderReducers/slice";
import { getPostByIdRequest } from "@/store/jsonPlaceholderReducers/thunk";
import {
	themeModeActions,
	themeModeSelector,
} from "@/store/themeModeReducers/slice";

const index = () => {
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
		<Grid container gap={3}>
			<Grid size={12} sx={{ textAlign: "center" }}>
				<h1>Welcome to the MUI V6 boilerplate using NextJs</h1>
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
			<Grid size={12}>
				<Link href="/pt-br">PT</Link>
				<Link href="/en-us">En</Link>
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
						Button Overrides
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default index;
