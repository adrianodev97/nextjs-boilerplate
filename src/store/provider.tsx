"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "./store"; // Adjust the import path as necessary

interface ReduxProviderProps {
	children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
