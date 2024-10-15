"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();
	const lang = pathname?.split("/")[1]; // Assuming the locale is the first part of the path

	return (
		<div>
			<h1>404 - Page Not Found</h1>
			<p>Locale: {lang}</p>
		</div>
	);
}
