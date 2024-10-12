import { defaultLocale } from "@/helpers/languages";
import ReduxProvider from "@/store/provider";
import { ThemeProviderWithMode } from "@/styles/theme";
import localFont from "next/font/local";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={defaultLocale.format}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ReduxProvider>
					<ThemeProviderWithMode>{children}</ThemeProviderWithMode>
				</ReduxProvider>
			</body>
		</html>
	);
}
