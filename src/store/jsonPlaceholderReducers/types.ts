export interface IJsonPlaceholderState {
	title: string;
	body: string;
	status: "idle" | "pending" | "fulfilled" | "rejected";
}
