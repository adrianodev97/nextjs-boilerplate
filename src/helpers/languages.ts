export type ILocale = "en-us" | "pt-br";

type IDefaultLocale = {
	locale: ILocale;
};

export const locales: ILocale[] = ["en-us", "pt-br"];

export const defaultLocale: IDefaultLocale = {
	locale: "en-us",
};

export const captalizeRegion = (locale: ILocale) => {
	const language = locale.split("-")[0];
	const region = locale.split("-")[1];
	return `${language}-${region.toUpperCase()}`;
};
