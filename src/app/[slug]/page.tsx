export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="container py-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">PostPage {slug}</h1>
    </main>
  );
}
