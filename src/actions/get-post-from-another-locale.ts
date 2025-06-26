"use server";

import prisma from "@/lib/prisma";
import { Locale } from "@prisma/client";

export default async function getPostFromAnotherLocale(
  slug: string,
  currentLocale: string,
  nextLocale: string
) {
  const post = await prisma.postTranslation.findFirst({
    where: {
      post: {
        postTranslations: {
          some: {
            slug,
            locale: currentLocale.toUpperCase() as Locale,
          },
        },
      },
      locale: nextLocale.toUpperCase() as Locale,
    },
  });

  return post;
}
