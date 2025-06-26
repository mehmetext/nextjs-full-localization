import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
