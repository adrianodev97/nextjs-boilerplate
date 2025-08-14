import "server-only";
import type { ILocale } from "../languages";
import type { IDictionaries } from "./types";

const dictionaries: IDictionaries = {
	"en-us": {
		home: () =>
			import("@diflux/dictionaries/en-us/home.json").then(
				(module) => module.default,
			),
	},

	"pt-br": {
		home: () =>
			import("@diflux/dictionaries/pt-br/home.json").then(
				(module) => module.default,
			),
	},
};

export const getDictionary = async (locale: ILocale, content: string) => {
	const dictionary = dictionaries[locale];
	if (!dictionary) {
		throw new Error(`Locale ${locale} not found`);
	}

	const pageLoader = dictionary[content];
	if (!pageLoader) {
		throw new Error(`Content ${content} not found for locale ${locale}`);
	}

	return pageLoader();
};
