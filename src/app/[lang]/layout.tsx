import type { Metadata } from "next";
import type { ReactNode } from "react";
import { lazy } from "react";
import { getDictionary } from "@/helpers/getDictionary";
import type { IPageDictionary } from "@/helpers/getDictionary/types";
import type { IHomePageProps, IParams, IServerPageProps } from "./types";
import "@/styles/global.css";
import { captalizeRegion } from "@/helpers/languages";

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

export async function generateMetadata({
	params,
}: IServerPageProps): Promise<Metadata> {
	const { lang } = await params;
	const { metatags } = (await getDictionary(lang, "home")) as IPageDictionary;

	return {
		title: metatags.title,
		description: metatags.description,
		keywords: metatags.keywords,
		icons: [{ rel: "icon", url: "/favicon.ico" }],
	};
}

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: IParams;
}) {
	const { lang } = await params;
	const dictionary = (await getDictionary(lang, "home")) as IPageDictionary;
	const {
		// biome-ignore lint/correctness/noEmptyPattern: <explanation>
		content: {},
	} = dictionary as IHomePageProps;

	return (
		<html lang={captalizeRegion(lang)}>
			<body suppressHydrationWarning>
				<ReduxProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
