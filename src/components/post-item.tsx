import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function PostItem() {
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
              {new Date().toISOString()}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2 text-lg">
          <Link href="/falan-filan" className="hover:underline">
            Next.js ile Tam Yerelleştirilmiş Blog
          </Link>
        </CardTitle>
        <CardDescription className="mb-3">
          Bu yazıda, Next.js ve next-intl ile tam yerelleştirilmiş bir blog
          uygulamasının nasıl geliştirileceğini anlatıyorum.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
