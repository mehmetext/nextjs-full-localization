import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t py-6 mt-10 bg-background/80 text-center text-muted-foreground text-sm">
      {t("Copyright", { year: new Date().getFullYear() })}
    </footer>
  );
}
