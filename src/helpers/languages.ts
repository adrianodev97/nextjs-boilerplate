export type ILocale = "en-us" | "pt-br";
export type ILocaleFormat = "en-US" | "pt-BR";

type IDefaultLocale = {
	locale: ILocale;
	format: ILocaleFormat;
};

export const locales: ILocale[] = ["en-us", "pt-br"];

export const defaultLocale: IDefaultLocale = {
	locale: "en-us",
	format: "en-US",
};
