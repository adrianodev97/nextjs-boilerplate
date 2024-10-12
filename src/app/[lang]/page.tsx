import { getDictionary } from "@/helpers/getDictionary";
import Home from "@/pages/HomePage";
import type { IServerPageProps } from "../types";

export default async function Page({
	params: { lang },
}: Readonly<IServerPageProps>) {
	const { content } = await getDictionary(lang);

	return <Home content={content} />;
}
