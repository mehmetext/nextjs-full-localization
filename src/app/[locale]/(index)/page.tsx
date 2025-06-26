import { PostItem } from "@/components/post-item";
import prisma from "@/lib/prisma";
import { Locale } from "@prisma/client";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("Home");

  const posts = await prisma.post.findMany({
    include: {
      postTranslations: {
        where: {
          locale: locale.toUpperCase() as Locale,
        },
      },
    },
    where: {
      postTranslations: {
        some: {
          locale: locale.toUpperCase() as Locale,
        },
      },
    },
  });

  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{t("Title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            postTranslation={post.postTranslations[0]}
          />
        ))}
      </div>
    </main>
  );
}
