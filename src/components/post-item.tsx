import { Link } from "@/i18n/navigation";
import { Post, PostTranslation } from "@prisma/client";
import ClientSideDate from "./client-side-date";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function PostItem({
  post,
  postTranslation,
}: {
  post: Post;
  postTranslation: PostTranslation;
}) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Mehmet Konukçu"
            />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">Mehmet Konukçu</div>
            <div className="text-xs text-muted-foreground">
              <ClientSideDate
                date={post.createdAt}
                options={{
                  dateStyle: "long",
                  timeStyle: "short",
                }}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2 text-lg">
          <Link
            href={{
              pathname: "/post/[slug]",
              params: { slug: postTranslation.slug },
            }}
            className="hover:underline"
          >
            {postTranslation.title}
          </Link>
        </CardTitle>
        <CardDescription className="mb-3">
          {postTranslation.content}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
