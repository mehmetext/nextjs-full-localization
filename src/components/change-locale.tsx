"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { postTranslations } from "@/lib/mock/posts";
import { cn } from "@/lib/utils";
import { CheckIcon, GlobeIcon } from "lucide-react";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const locales: {
  code: (typeof routing.locales)[number];
  name: string;
}[] = [
  { code: "tr", name: "🇹🇷 | TR" },
  { code: "en", name: "🇺🇸 | EN" },
];

export default function ChangeLocale() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const currentLocale = useLocale();

  const handlePostSlugChange = (locale: string) => {
    const nextLocale = locale as Locale;

    const postId = postTranslations.find(
      (post) => post.slug === params.slug
    )?.postId;

    const localePost = postTranslations.find(
      (post) => post.postId === postId && post.locale === nextLocale
    );

    router.replace(
      { pathname, params: { ...params, slug: localePost?.slug as string } },
      { locale: nextLocale }
    );
  };

  const handleChangeLocale = (locale: string) => {
    if (pathname === "/post/[slug]") {
      handlePostSlugChange(locale);
      return;
    }

    const nextLocale = locale as Locale;

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GlobeIcon />
          {locales.find((locale) => locale.code === currentLocale)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        alignOffset={0}
        className="min-w-0"
      >
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleChangeLocale(locale.code)}
            className={cn({
              "flex-row-reverse": true,
            })}
          >
            <CheckIcon
              className={cn("opacity-0", {
                "opacity-100": locale.code === currentLocale,
              })}
            />
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
