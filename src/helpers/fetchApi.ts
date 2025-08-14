// src/helpers/fetchApi.ts

const getApiUrl = (path: string): string => {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
	return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

interface MethodSpecificFetchOptions
	extends Omit<RequestInit, "method" | "body"> {}

const baseRequest = async <T = unknown>(
	endpoint: string,
	options: RequestInit = {},
): Promise<T> => {
	const url = getApiUrl(endpoint);

	const defaultHeaders: HeadersInit = {
		"Content-Type": "application/json",
		...options.headers,
	};

	const config: RequestInit = {
		...options,
		headers: defaultHeaders,
	};

	try {
		const response = await fetch(url, config);

		if (!response.ok) {
			let errorData: { message: string } | undefined;
			try {
				errorData = await response.json();
			} catch (e) {
				errorData = { message: response.statusText };
			}
			throw errorData;
		}

		const contentType = response.headers.get("content-type");
		if (
			response.status === 204 ||
			response.headers.get("Content-Length") === "0"
		) {
			return undefined as T;
		}

		if (contentType?.includes("application/json")) {
			return response.json() as Promise<T>;
		}

		console.warn(
			`Response from ${url} was not JSON and not a 204 No Content. Returning as text.`,
		);
		return response.text() as unknown as Promise<T>;
	} catch (error: unknown) {
		console.log(error);
		throw error;
	}
};

const fetchApi = {
	get: <T = unknown>(
		endpoint: string,
		options?: MethodSpecificFetchOptions,
	): Promise<T> => {
		return baseRequest<T>(endpoint, { ...options, method: "GET" });
	},

	post: <T = unknown>(
		endpoint: string,
		body?: unknown,
		options?: MethodSpecificFetchOptions,
	): Promise<T> => {
		const requestOptions: RequestInit = { ...options, method: "POST" };
		if (body !== undefined) {
			const headers = new Headers(options?.headers);
			if (
				typeof body === "object" &&
				!(body instanceof FormData) &&
				!(body instanceof Blob) &&
				!(body instanceof URLSearchParams) &&
				(!headers.has("Content-Type") ||
					headers.get("Content-Type")?.includes("application/json"))
			) {
				requestOptions.body = JSON.stringify(body);
			} else {
				requestOptions.body = body as BodyInit;
			}
		}
		return baseRequest<T>(endpoint, requestOptions);
	},

	put: <T = unknown>(
		endpoint: string,
		body?: unknown,
		options?: MethodSpecificFetchOptions,
	): Promise<T> => {
		const requestOptions: RequestInit = { ...options, method: "PUT" };
		if (body !== undefined) {
			const headers = new Headers(options?.headers);
			if (
				typeof body === "object" &&
				!(body instanceof FormData) &&
				!(body instanceof Blob) &&
				!(body instanceof URLSearchParams) &&
				(!headers.has("Content-Type") ||
					headers.get("Content-Type")?.includes("application/json"))
			) {
				requestOptions.body = JSON.stringify(body);
			} else {
				requestOptions.body = body as BodyInit;
			}
		}
		return baseRequest<T>(endpoint, requestOptions);
	},

	delete: <T = unknown>(
		endpoint: string,
		options?: MethodSpecificFetchOptions,
	): Promise<T> => {
		return baseRequest<T>(endpoint, { ...options, method: "DELETE" });
	},

	patch: <T = unknown>(
		endpoint: string,
		body?: unknown,
		options?: MethodSpecificFetchOptions,
	): Promise<T> => {
		const requestOptions: RequestInit = { ...options, method: "PATCH" };
		if (body !== undefined) {
			const headers = new Headers(options?.headers);
			if (
				typeof body === "object" &&
				!(body instanceof FormData) &&
				!(body instanceof Blob) &&
				!(body instanceof URLSearchParams) &&
				(!headers.has("Content-Type") ||
					headers.get("Content-Type")?.includes("application/json"))
			) {
				requestOptions.body = JSON.stringify(body);
			} else {
				requestOptions.body = body as BodyInit;
			}
		}
		return baseRequest<T>(endpoint, requestOptions);
	},
};

export default fetchApi;
