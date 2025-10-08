import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { NextAuthProvider } from "./providers";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "ECE USC",
	description: "UCSDs ECE Undergraduate Student Council",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
                <ThemeProvider theme = {theme}>
                    <NextAuthProvider>{children}</NextAuthProvider>
                </ThemeProvider>
			</body>
		</html>
	);
}
