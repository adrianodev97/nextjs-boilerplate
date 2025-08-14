import type { Metadata } from "next";
import { lazy } from "react";
import "@/styles/global.css";

// Used to control the global state of the application
const ReduxProvider = lazy(async () => {
	const myModule = await import("@/store/provider");
	return { default: myModule.default };
});

// Theme with mode (light/dark)
const ThemeProvider = lazy(async () => {
	const myModule = await import("@/styles/theme");
	return { default: myModule.ThemeProvider };
});

// Theme without mode - could be used for pages that don't need a theme
const ThemeProviderWithMode = lazy(async () => {
	const myModule = await import("@/styles/theme");
	return { default: myModule.ThemeProviderWithoutMode };
});

export const metadata: Metadata = {
	title: "NextJS Boilerplate",
	description: "Boilerplate for NextJS using MUI V6 and Redux",
	icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body suppressHydrationWarning>
				<ReduxProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
