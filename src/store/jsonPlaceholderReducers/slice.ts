"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getPostByIdRequest } from "./thunk";
import type { IJsonPlaceholderState } from "./types";

const initialState: IJsonPlaceholderState = {
	title: "",
	body: "",
	status: "idle",
};

const jsonPlaceholderSlice = createSlice({
	name: "jsonPlaceholder",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPostByIdRequest.pending, (state) => {
				state.status = "pending";
			})
			.addCase(
				getPostByIdRequest.fulfilled,
				(state, { payload: { title, body } }) => {
					state.title = title;
					state.body = body;
					state.status = "fulfilled";
				},
			)
			.addCase(getPostByIdRequest.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export const jsonPlaceholderActions = jsonPlaceholderSlice.actions;

export default jsonPlaceholderSlice.reducer;

export const jsonPlaceholderSelector = (state: RootState) =>
	state.jsonPlaceholder;
