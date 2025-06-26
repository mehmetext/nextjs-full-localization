interface Post {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostTranslation {
  id: string;
  postId: string;
  locale: string;
  slug: string;
  title: string;
  content: string;
}
