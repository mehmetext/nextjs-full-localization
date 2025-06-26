import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { Menu, Search, User } from "lucide-react";
import { useTranslations } from "next-intl";
import ChangeLocale from "./change-locale";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
] as const;

export function Header() {
  const t = useTranslations("Header.Menu");

  return (
    <header className="w-full border-b h-16 bg-background/95 sticky top-0 z-50">
      <div className="container flex items-center justify-between gap-4 h-full">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Next.js Blog
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} className="px-4 py-2 hover:underline">
                    {t(item.label)}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="w-5 h-5" />
            <span className="sr-only">Ara</span>
          </Button>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <div className="hidden md:block">
            <ChangeLocale />
          </div>
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Menüyü Aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle className="sr-only" />
                <div className="flex items-center px-4 h-16 border-b">
                  <Link href="/" className="font-bold text-xl tracking-tight">
                    Next.js Blog
                  </Link>
                </div>
                <nav className="flex flex-col px-3 gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/">Anasayfa</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/about">Hakkında</Link>
                  </Button>
                </nav>
                <div className="flex items-center gap-3 px-4 pb-4 mt-auto">
                  <ModeToggle />
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
