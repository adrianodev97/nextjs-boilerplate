import { type NextRequest, NextResponse } from "next/server";

const locales = ["en-us", "pt-br"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
	// Check the 'Accept-Language' header
	const acceptLanguage = request.headers.get("accept-language");
	console.log(acceptLanguage);

	if (acceptLanguage) {
		const acceptedLanguages = acceptLanguage
			.split(",")
			.map((lang) => lang.split(";")[0].trim().toLowerCase());
		for (const lang of acceptedLanguages) {
			if (locales.includes(lang)) {
				return lang;
			}
		}
	}

	return "en-us";
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	console.log("Middleware called");

	const { pathname } = request.nextUrl;
	const pathnameParts = pathname.split("/").filter(Boolean);
	const pathnameHasLocale =
		pathnameParts.length > 0 && locales.includes(pathnameParts[0]);

	if (pathnameHasLocale) return;

	// Redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /en-us/products
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
