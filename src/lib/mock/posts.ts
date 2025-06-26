const posts: Post[] = [
  {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const postTranslations: PostTranslation[] = [
  {
    id: "1",
    postId: "1",
    locale: "en",
    slug: "post-1",
    title: "Post 1",
    content: "Content 1",
  },
  {
    id: "2",
    postId: "1",
    locale: "tr",
    slug: "gonderi-1",
    title: "Gönderi 1",
    content: "İçerik 1",
  },
  {
    id: "3",
    postId: "2",
    locale: "en",
    slug: "post-2",
    title: "Post 2",
    content: "Content 2",
  },
  {
    id: "4",
    postId: "2",
    locale: "tr",
    slug: "gonderi-2",
    title: "Gönderi 2",
    content: "İçerik 2",
  },
];

export { posts, postTranslations };
