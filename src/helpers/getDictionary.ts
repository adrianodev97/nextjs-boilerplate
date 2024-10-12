import "server-only";

const dictionaries = {
	"en-us": () =>
		import("@/dictionaries/en.json").then((module) => module.default),
	"pt-br": () =>
		import("@/dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-us" | "pt-br") =>
	dictionaries[locale]();
