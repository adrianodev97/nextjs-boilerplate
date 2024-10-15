import { getDictionary } from "@/helpers/getDictionary";
import type { IPageDictionary } from "@/helpers/getDictionary/types";
import Home from "@/pages/HomePage";
import type { IHomePageProps } from "@/pages/HomePage/types";
import type { IServerPageProps } from "../types";

export default async function Page({
	params: { lang },
}: Readonly<IServerPageProps>) {
	const dictionary = (await getDictionary(lang, "home")) as IPageDictionary;
	const { content } = dictionary as IHomePageProps;

	return <Home content={content} />;
}
