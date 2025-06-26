import { getTranslations } from "next-intl/server";
import "./globals.css";

export const generateMetadata = async () => {
  const t = await getTranslations("Metadata");

  return {
    title: t("Root.Title"),
    description: t("Root.Description"),
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
