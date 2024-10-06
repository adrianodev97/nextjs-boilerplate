import "server-only";

const dictionaries = {
	"en-us": () => import("./en.json").then((module) => module.default),
	"pt-br": () => import("./pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-us" | "pt-br") =>
	dictionaries[locale]();
