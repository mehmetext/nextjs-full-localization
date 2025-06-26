"use client";

export function PostPageClient({ post }: { post: PostTranslation }) {
  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.content}</p>
    </main>
  );
}
