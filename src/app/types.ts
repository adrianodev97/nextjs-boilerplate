import type { ILocale } from "@/helpers/languages";

export interface IServerPageProps {
	params: IParams;
}

export type IParams = Promise<{ lang: ILocale }>;
