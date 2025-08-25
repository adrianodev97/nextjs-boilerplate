import { Container } from "@mui/material";
import ClientComponent from "@/components/ClientComponent";
import { getDictionary } from "@/helpers/getDictionary";
import type { IPageDictionary } from "@/helpers/getDictionary/types";
import type { IHomePageProps, IServerPageProps } from "./types";

export default async function Home({ params }: IServerPageProps) {
	const { lang } = await params;
	const dictionary = (await getDictionary(lang, "home")) as IPageDictionary;
	const {
		// biome-ignore lint/correctness/noEmptyPattern: false positive
		content: {},
	} = dictionary as IHomePageProps;

	return (
		<main>
			<Container>
				<ClientComponent />
			</Container>
		</main>
	);
}
