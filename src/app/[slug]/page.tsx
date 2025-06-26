export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">PostPage {params.slug}</h1>
    </main>
  );
}
