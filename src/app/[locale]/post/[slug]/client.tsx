"use client";

import ClientSideDate from "@/components/client-side-date";
import { Post, PostTranslation } from "@prisma/client";

export function PostPageClient({
  post,
  postTranslation,
}: {
  post: Post;
  postTranslation: PostTranslation;
}) {
  return (
    <main className="container py-10 flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        <ClientSideDate
          date={post.createdAt}
          options={{
            dateStyle: "long",
            timeStyle: "short",
          }}
        />
      </p>
      <h1 className="text-4xl font-bold">{postTranslation.title}</h1>
      <p className="text-sm text-muted-foreground">{postTranslation.content}</p>
    </main>
  );
}
