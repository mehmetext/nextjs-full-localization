import prisma from "@/lib/prisma";
import { Locale } from "@prisma/client";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { PostPageClient } from "./client";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("Metadata.Post");

  const post = await prisma.postTranslation.findFirst({
    where: {
      slug,
      locale: locale.toUpperCase() as Locale,
    },
  });

  if (!post) {
    notFound();
  }

  return {
    title: t("Title", { title: post.title }),
  };
};

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
