import { postTranslations } from "@/lib/mock/posts";
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
  const post = postTranslations.find(
    (translation) => translation.slug === slug && translation.locale === locale
  );

  if (!post) {
    notFound();
  }

  return <PostPageClient post={post} />;
}
