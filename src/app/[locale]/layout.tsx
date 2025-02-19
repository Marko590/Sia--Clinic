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
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import LanguageSwitch from "./components/LanguageSwitch";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    keywords: t("home.keywords"),
    openGraph: {
      title: t("home.openGraph.title"),
      description: t("home.openGraph.description"),
      type: "website",
      url: t("home.openGraph.url"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t("home.twitter.title"),
      description: t("home.twitter.description"),
    },
    robots: "index, follow",
  };
}

type Locales = "en" | "sr";
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="__1DEFTbFe9WA6aqkPBWA0zbUr99X7m8Z1evG4LpIeM"
        />
      </head>
      <body className={`${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <PageWrapper>{children}</PageWrapper>
            <Footer />

            <LanguageSwitch />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
