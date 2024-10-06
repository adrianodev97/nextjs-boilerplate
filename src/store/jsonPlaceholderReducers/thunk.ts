"use client";

import api from "@/helpers/fetchApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostByIdRequest = createAsyncThunk(
	"jsonPlaceholder/getPostByIdRequest",
	async ({ id }: { id: number }) => {
		try {
			const { data } = await api.get(`/posts/${id}`);

			return data;
		} catch (error) {
			console.error(error);
		}
	},
);
