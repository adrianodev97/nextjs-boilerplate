import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
	params: { lang },
}: { params: { lang: "en-us" | "pt-br" } }): Promise<Metadata> {
	const { metatags } = await getDictionary(lang);

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
	return <section>{children}</section>;
}
