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
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import LanguageSwitch from "./components/LanguageSwitch";

const metadata_en = {
  title: "SIA Dental Clinic - Your Trusted Dentist in Serbia",
  authors: [
    {
      name: "SIA Dental Clinic",
    },
  ],
  description:
    "SIA Dental Clinic offers top-notch dental care services in Serbia, including teeth whitening, dental implants, and routine check-ups. Our expert team ensures a comfortable experience for all patients.",
  keywords:
    "dentist, dental clinic, teeth whitening, dental implants, Serbia, dental care",
  openGraph: {
    title: "SIA Dental Clinic - Your Trusted Dentist in Serbia",
    description:
      "SIA Dental Clinic offers top-notch dental care services in Serbia, including teeth whitening, dental implants, and routine check-ups. Our expert team ensures a comfortable experience for all patients.",
    type: "website",
    url: "https://www.siadentalclinic.com",
    authors: ["https://www.siadentalclinic.com/about"],
    tags: [
      "dentist",
      "dental clinic",
      "teeth whitening",
      "dental implants",
      "Serbia",
      "dental care",
    ],
    images: [
      {
        url: "https://www.siadentalclinic.com/images/dental-clinic.jpg",
        width: 1024,
        height: 576,
        alt: "SIA Dental Clinic",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siadentalclinic",
    creator: "@siadentalclinic",
    title: "SIA Dental Clinic - Your Trusted Dentist in Serbia",
    description:
      "SIA Dental Clinic offers top-notch dental care services in Serbia, including teeth whitening, dental implants, and routine check-ups. Our expert team ensures a comfortable experience for all patients.",
    images: [
      {
        url: "https://www.siadentalclinic.com/images/dental-clinic.jpg",
        width: 1024,
        height: 576,
        alt: "SIA Dental Clinic",
      },
    ],
  },
  robots: "index, follow",
  url: "https://www.siadentalclinic.com",
  image: "/images/dental-clinic.jpg",
};

const metadata_sr = {
  title: "SIA Dental Clinic - Vaš pouzdani stomatolog u Srbiji",
  authors: [
    {
      name: "SIA Dental Clinic",
    },
  ],
  description:
    "SIA Dental Clinic pruža vrhunske stomatološke usluge u Srbiji, uključujući izbeljivanje zuba, zubne implantate i redovne preglede. Naš stručni tim garantuje udoban i bezbrižan tretman za sve pacijente.",
  keywords:
    "stomatolog, stomatološka klinika, izbeljivanje zuba, zubni implantati, Srbija, stomatološka nega",
  openGraph: {
    title: "SIA Dental Clinic - Vaš pouzdani stomatolog u Srbiji",
    description:
      "SIA Dental Clinic pruža vrhunske stomatološke usluge u Srbiji, uključujući izbeljivanje zuba, zubne implantate i redovne preglede. Naš stručni tim garantuje udoban i bezbrižan tretman za sve pacijente.",
    type: "website",
    url: "https://www.siadentalclinic.com",
    authors: ["https://www.siadentalclinic.com/about"],
    tags: [
      "stomatolog",
      "stomatološka klinika",
      "izbeljivanje zuba",
      "zubni implantati",
      "Srbija",
      "stomatološka nega",
    ],
    images: [
      {
        url: "https://www.siadentalclinic.com/images/dental-clinic.jpg",
        width: 1024,
        height: 576,
        alt: "SIA Dental Clinic",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siadentalclinic",
    creator: "@siadentalclinic",
    title: "SIA Dental Clinic - Vaš pouzdani stomatolog u Srbiji",
    description:
      "SIA Dental Clinic pruža vrhunske stomatološke usluge u Srbiji, uključujući izbeljivanje zuba, zubne implantate i redovne preglede. Naš stručni tim garantuje udoban i bezbrižan tretman za sve pacijente.",
    images: [
      {
        url: "https://www.siadentalclinic.com/images/dental-clinic.jpg",
        width: 1024,
        height: 576,
        alt: "SIA Dental Clinic",
      },
    ],
  },
  robots: "index, follow",
  url: "https://www.siadentalclinic.com",
  image: "/images/dental-clinic.jpg",
};

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
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const metadata = locale === "en" ? metadata_en : metadata_sr;
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: metadata.openGraph,
    twitter: metadata.twitter,
    robots: metadata.robots,

    alternates: {
      canonical: metadata.url,
      languages: {
        en: "/en",
        sr: "/sr",
      },
    },
  };
}

type Locales = "en" | "sr";
export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;
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
