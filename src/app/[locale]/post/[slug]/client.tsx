"use client";

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
      <p className="text-sm text-gray-500">{post.createdAt.toISOString()}</p>
      <h1 className="text-4xl font-bold">{postTranslation.title}</h1>
      <p className="text-sm text-gray-500">{postTranslation.content}</p>
    </main>
  );
}
