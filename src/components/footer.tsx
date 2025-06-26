export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10 bg-background/80 text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} Next.js Blog. Tüm hakları saklıdır.
    </footer>
  );
}
