import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./lib/theme";
import NavBar from "./components/NavBar";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
