import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
type MetadataProps = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata.PricingPage",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      type: "website",
      url: t("openGraph.url"),
      images: [
        {
          url: "https://siadental.rs/images/pricing-og.jpg",
          width: 1200,
          height: 630,
          alt: t("openGraph.imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t("twitter.title"),
      description: t("twitter.description"),
    },
    robots: "index, follow",
  };
}
export default function Layout({ children }: Props) {
  return children;
}
