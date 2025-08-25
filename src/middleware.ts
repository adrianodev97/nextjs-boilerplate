import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, type ILocale, locales } from "@/helpers/languages";

function getLocale(request: NextRequest): ILocale {
	const localeCookie = request.cookies.get("locale");
	if (localeCookie?.value && locales.includes(localeCookie.value as ILocale)) {
		return localeCookie.value as ILocale;
	}

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

		const response = NextResponse.next();
		response.cookies.set("locale", locale, {
			path: "/",
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 24 * 60 * 60,
		});
		return response;
	}

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	const response = NextResponse.redirect(request.nextUrl);

	response.cookies.set("locale", locale, {
		path: "/",
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 24 * 60 * 60,
	});

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)"],
};
