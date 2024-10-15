import Header from "@/components/Header";
import { getDictionary } from "@/helpers/getDictionary";
import type { IPageDictionary } from "@/helpers/getDictionary/types";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { IParams } from "../types";

export async function generateMetadata({
	params: { lang },
}: { params: IParams }): Promise<Metadata> {
	const { metatags } = (await getDictionary(lang, "home")) as IPageDictionary;

	return {
		title: metatags.title,
		description: metatags.description,
		keywords: metatags.keywords,
	};
}

interface LayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: Readonly<LayoutProps>) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
