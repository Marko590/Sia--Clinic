import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { use } from "react";
import { servicesKeys } from "../../lib/data";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type MetadataProps = {
  params: { locale: string; "service-id": string };
};
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = params;
  const id = params["service-id"];
  const t = await getTranslations({
    locale,
    namespace: "Metadata.servicesCards",
  });

  return {
    title: t(`${id}.title`),
    description: t(`${id}.description`),
    keywords: t(`${id}.keywords`),
    openGraph: {
      title: t(`${id}.openGraph.title`),
      description: t(`${id}.openGraph.description`),
      type: "website",
      url: t(`${id}.openGraph.url`),
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t(`${id}.twitter.title`),
      description: t(`${id}.twitter.description`),
    },
    robots: "index, follow",
  };
}
export function generateStaticParams() {
  return servicesKeys.map((serviceKey) => ({ "service-id": serviceKey }));
}
type Props = { params: Promise<{ "service-id": string }> };
const Page = ({ params }: Props) => {
  const param = use(params);
  const serviceId = param["service-id"];
  const t = useTranslations("ServiceGrid");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: { xs: "100%", md: "80%" },
        height: "100%",
        p: { xs: 2, md: 8 },
        gap: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: 2,
          flex: 4,
          p: 2,
          pt: 0,
        }}
      >
        <Typography
          color="secondary"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.75rem", md: "3rem" },
            fontWeight: "600",
          }}
        >
          {t(`services.${serviceId}.title`)}
        </Typography>

        <Typography
          sx={{
            px: 4,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t(`services.${serviceId}.description`)}
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: { xs: "400px", md: "auto" },
          flex: 3,
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <Image
          src={t(`services.${serviceId}.pictureUrl`)}
          alt={t(`services.${serviceId}.title`)}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default Page;
