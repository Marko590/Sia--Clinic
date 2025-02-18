import { Grid2 } from "@mui/material";
import React from "react";
import EmployeeInfo from "../components/EmployeeInfo";
import { useTranslations } from "next-intl";
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
    title: t("About.title"),
    description: t("About.description"),
    keywords: t("About.keywords"),
    openGraph: {
      title: t("About.openGraph.title"),
      description: t("About.openGraph.description"),
      type: "website",
      url: t("About.openGraph.url"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t("About.twitter.title"),
      description: t("About.twitter.description"),
    },
    robots: "index, follow",
  };
}
const Page = () => {
  const t = useTranslations("About");
  const staffIds = ["stefan-raicevic", "andrija-banovic"];
  return (
    <>
      <SectionTitle title={t("staffTitle")} sx={{ mt: 4 }} />

      <Grid2
        container
        spacing={8}
        sx={{ alignItems: "stretch", width: "100%", px: { xs: 2, md: 8 } }}
      >
        {staffIds.map((id) => (
          <Grid2 key={id} size={{ xs: 12, lg: 6 }}>
            <EmployeeInfo
              id={id}
              name={t(`staff.${id}.name`)}
              shortBio={t(`staff.${id}.shortBio`)}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default Page;
