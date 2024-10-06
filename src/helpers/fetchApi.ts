import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(new Error(error.message || "Response error"));
	},
);

export default api;