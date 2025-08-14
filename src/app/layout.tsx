import type { Metadata } from "next";
import { lazy } from "react";
import "@/styles/global.css";

const ReduxProvider = lazy(async () => {
	const myModule = await import("@/store/provider");
	return { default: myModule.default };
});

const ThemeProvider = lazy(async () => {
	const myModule = await import("@/styles/theme");
	return { default: myModule.ThemeProvider };
});

const ThemeProviderWithMode = lazy(async () => {
	const myModule = await import("@/styles/theme");
	return { default: myModule.ThemeProviderWithMode };
});

export const metadata: Metadata = {
	title: "NextJS Boilerplate",
	description: "Boilerplate for NextJS using MUI V6 and Redux",
	// icons: [{ rel: "icon", url: "/favicon.ico" }],
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
