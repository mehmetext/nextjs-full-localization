import { PostItem } from "@/components/post-item";
import { posts, postTranslations } from "@/lib/mock/posts";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();

  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Son Yazılar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={
              postTranslations.find(
                (translation) =>
                  translation.postId === post.id &&
                  translation.locale === locale
              ) as PostTranslation
            }
          />
        ))}
      </div>
    </main>
  );
}
