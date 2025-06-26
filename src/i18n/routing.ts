import { defineRouting } from "next-intl/routing";

export const locales: {
  code: (typeof routing.locales)[number];
  name: string;
}[] = [
  { code: "tr", name: "🇹🇷 | TR" },
  { code: "en", name: "🇺🇸 | EN" },
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "tr",
  // localePrefix: "as-needed",

  pathnames: {
    "/": "/",
    "/about": {
      tr: "/hakkinda",
    },
    "/post/[slug]": {
      tr: "/gonderi/[slug]",
    },
  },
});
