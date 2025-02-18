import Image from "next/image";
import { Box, Typography } from "@mui/material";
import React, { use } from "react";
import { useTranslations } from "next-intl";
import { employeeInfo } from "../../lib/data";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type MetadataProps = {
  params: { locale: string; id: string };
};
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, id } = params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata.DoctorInfoPage.staff",
  });

  return {
    title: t(`${id}.title`),
    description: t(`${id}.description`),
    keywords: t(`${id}.keywords`),
    openGraph: {
      title: t(`${id}.title`),
      description: t(`${id}.description`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@siadentalclinic",
      creator: "@siadentalclinic",
      title: t(`${id}.title`),
      description: t(`${id}.description`),
    },
    robots: "index, follow",
  };
}
export function generateStaticParams() {
  return employeeInfo.map((employee) => ({ id: employee.id }));
}
type Props = { params: Promise<{ id: string }> };
const Page = ({ params }: Props) => {
  const param = use(params);
  const id = param["id"];
  const t = useTranslations("DoctorInfoPage");

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
          {t(`staff.${id}.name`)}
        </Typography>

        <Typography
          sx={{
            px: 4,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t(`staff.${id}.bio`)}
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
          src={"/" + t(`staff.${id}.image`)}
          alt={t(`staff.${id}.name`)}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default Page;
