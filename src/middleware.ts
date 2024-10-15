import { type NextRequest, NextResponse } from "next/server";
import { type ILocale, defaultLocale, locales } from "./helpers/languages";

function getLocale(request: NextRequest): ILocale {
	const acceptLanguage = request.headers.get("accept-language");

	if (acceptLanguage) {
		const acceptedLanguages = acceptLanguage
			.split(",")
			.map((lang) => lang.split(";")[0].trim().toLowerCase());
		for (const lang of acceptedLanguages) {
			if (locales.includes(lang as ILocale)) {
				return lang as ILocale;
			}
		}
	}

	return defaultLocale.locale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameParts = pathname.split("/").filter(Boolean);
	const pathnameHasLocale =
		pathnameParts.length > 0 &&
		locales.includes(pathnameParts[0].toLowerCase() as ILocale);

	if (pathnameHasLocale) {
		const locale = pathnameParts[0].toLowerCase();
		const normalizedPathname = `/${locale}${pathname.substring(locale.length + 1)}`;
		if (pathname !== normalizedPathname) {
			request.nextUrl.pathname = normalizedPathname;
			return NextResponse.redirect(request.nextUrl);
		}
		return;
	}

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next).*)"],
};
