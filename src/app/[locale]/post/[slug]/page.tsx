import prisma from "@/lib/prisma";
import { Locale } from "@prisma/client";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PostPageClient } from "./client";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = await prisma.postTranslation.findFirst({
    where: {
      slug,
      locale: locale.toUpperCase() as Locale,
    },
  });

  if (!post) {
    notFound();
  }

  return <PostPageClient post={post} postTranslation={post} />;
}
