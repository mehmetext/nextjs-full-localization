"use client";

import getPostFromAnotherLocale from "@/actions/get-post-from-another-locale";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
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

export default function ChangeLocale() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const currentLocale = useLocale();

  const handlePostSlugChange = async (locale: string) => {
    const nextLocale = locale as Locale;

    const postTranslation = await getPostFromAnotherLocale(
      params.slug as string,
      currentLocale,
      nextLocale
    );

    if (!postTranslation) {
      router.replace({ pathname: "/" }, { locale: nextLocale });
      return;
    }

    router.replace(
      {
        pathname,
        params: { ...params, slug: postTranslation?.slug as string },
      },
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
