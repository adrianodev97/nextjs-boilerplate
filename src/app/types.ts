import type { ILocale } from "@/helpers/languages";

export interface IServerPageProps {
	params: IParams;
}

export interface IParams {
	lang: ILocale;
}
