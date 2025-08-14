export interface IPageDictionary {
	metatags: {
		title: string;
		description: string;
		keywords: string[];
	};
	content: unknown;
}

interface IUnknownDictionary {
	[key: string]: unknown;
}

type IDictionary = {
	[key: string]: () => Promise<IPageDictionary | IUnknownDictionary>;
};

export type IDictionaries = {
	[locale: string]: IDictionary;
};
