"use server";

import prisma from "@/lib/prisma";
import { Locale } from "@prisma/client";

export default async function getPostFromAnotherLocale(
  slug: string,
  currentLocale: string,
  nextLocale: string
) {
  const postTranslation = await prisma.postTranslation.findFirst({
    select: { slug: true },
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

  return postTranslation;
}
