import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "../components/ContactInfo";
import { useTranslations } from "next-intl";
import MapPaper from "../components/MapPaper";
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
    title: t("ContactPage.title"),
    description: t("ContactPage.description"),
    keywords: t("ContactPage.keywords"),
    openGraph: {
      title: t("ContactPage.openGraph.title"),
      description: t("ContactPage.openGraph.description"),
      type: "website",
      url: t("ContactPage.openGraph.url"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t("ContactPage.twitter.title"),
      description: t("ContactPage.twitter.description"),
    },
    robots: "index, follow",
  };
}
const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <>
      <SectionTitle title={t("title")} sx={{ mt: 4 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          width: "90%",
          gap: 8,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            background: "background.paper",
            width: "100%",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "column",
              p: 2,
              gap: 4,
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: "300",
              }}
            >
              {t("appointmentTitle")}
            </Typography>

            <ContactInfo
              title="Working hours"
              subtitle={[t("workHours"), t("emergencyWorkHours")]}
            />
            <ContactInfo title={t("phoneTitle")} subtitle={t("phoneNumber")} />
            <ContactInfo title={t("addressTitle")} subtitle={t("address")} />
            <ContactInfo title={t("emailTitle")} subtitle={t("email")} />
          </Box>
        </Paper>

        <MapPaper
          sx={{
            flex: { md: 1 },
            height: "620px",
          }}
        />
      </Box>
    </>
  );
};

export default Contact;
