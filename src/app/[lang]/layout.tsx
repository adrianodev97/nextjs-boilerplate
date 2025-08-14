import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "@/helpers/getDictionary";
import type { IPageDictionary } from "@/helpers/getDictionary/types";
import type { IParams, IServerPageProps } from "../types";
import type { IHomePageProps } from "./types";

export async function generateMetadata({
	params,
}: IServerPageProps): Promise<Metadata> {
	const { lang } = await params;
	const { metatags } = (await getDictionary(lang, "home")) as IPageDictionary;

	return {
		title: metatags.title,
		description: metatags.description,
		keywords: metatags.keywords,
	};
}

export default async function DashboardLayout({
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

	return <>{children}</>;
}
