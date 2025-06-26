import { postTranslations } from "@/lib/mock/posts";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

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

  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.content}</p>
    </main>
  );
}
