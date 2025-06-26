import { PostItem } from "@/components/post-item";

export default function Home() {
  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Son Yazılar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  );
}
