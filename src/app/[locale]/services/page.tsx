import { Box } from "@mui/material";
import React from "react";
import HoverCard from "../components/HoverCard";
import { servicesKeys } from "../lib/data";
import SectionTitle from "../components/SectionTitle";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("services.title"),
    description: t("services.description"),
    keywords: t("services.keywords"),
    openGraph: {
      title: t("services.openGraph.title"),
      description: t("services.openGraph.description"),
      type: "website",
      url: t("services.openGraph.url"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t("services.twitter.title"),
      description: t("services.twitter.description"),
    },
    robots: "index, follow",
  };
}

const Page = () => {
  return (
    <>
      <SectionTitle title={"Services"} sx={{ mt: 4 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "90%",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {servicesKeys.map((service, idx) => (
          <HoverCard key={idx} id={idx} serviceKey={service} />
        ))}
      </Box>
    </>
  );
};

export default Page;
