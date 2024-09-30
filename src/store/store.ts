import { configureStore } from "@reduxjs/toolkit";
import jsonPlaceholder from "./jsonPlaceholderReducers/slice";
import themeMode from "./themeModeReducers/slice";

export const reducers = {
	jsonPlaceholder,
	themeMode,
};

const store = configureStore({ reducer: reducers });

export function getStoreWithState(preloadedState?: RootState) {
	return configureStore({ reducer: reducers, preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
