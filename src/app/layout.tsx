import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Tam Yerelleştirilmiş Blog",
  description:
    "Bu proje, next-intl kullanılarak tam yerelleştirilmiş bir blog projesidir.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
