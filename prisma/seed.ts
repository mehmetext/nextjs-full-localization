import { Locale, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Mevcut verileri temizle
  await prisma.postTranslation.deleteMany();
  await prisma.post.deleteMany();

  // Örnek blog yazıları oluştur
  const posts = [
    {
      translations: [
        {
          locale: Locale.EN,
          title: "Getting Started with Next.js",
          content:
            "Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. In this post, we'll explore the basics of Next.js and how to get started with your first project.",
        },
        {
          locale: Locale.TR,
          title: "Next.js ile Başlangıç",
          content:
            "Next.js, tam yığın web uygulamaları oluşturmayı basit ve verimli hale getiren güçlü bir React framework'üdür. Bu yazıda Next.js'in temellerini ve ilk projenizle nasıl başlayacağınızı keşfedeceğiz.",
        },
      ],
    },
    {
      translations: [
        {
          locale: Locale.EN,
          title: "Internationalization in Next.js",
          content:
            "Learn how to implement internationalization (i18n) in your Next.js application. We'll cover routing, message formatting, and best practices for creating multilingual applications.",
        },
        {
          locale: Locale.TR,
          title: "Next.js'te Uluslararasılaştırma",
          content:
            "Next.js uygulamanızda uluslararasılaştırma (i18n) nasıl uygulanacağını öğrenin. Yönlendirme, mesaj formatlaması ve çok dilli uygulamalar oluşturma için en iyi uygulamaları ele alacağız.",
        },
      ],
    },
    {
      translations: [
        {
          locale: Locale.EN,
          title: "Prisma with PostgreSQL",
          content:
            "Discover how to use Prisma ORM with PostgreSQL for efficient database management. We'll cover schema design, migrations, and advanced querying techniques.",
        },
        {
          locale: Locale.TR,
          title: "PostgreSQL ile Prisma",
          content:
            "Verimli veritabanı yönetimi için Prisma ORM'yi PostgreSQL ile nasıl kullanacağınızı keşfedin. Şema tasarımı, migrasyonlar ve gelişmiş sorgulama tekniklerini ele alacağız.",
        },
      ],
    },
    {
      translations: [
        {
          locale: Locale.EN,
          title: "Building Modern UIs with Tailwind CSS",
          content:
            "Explore how to create beautiful and responsive user interfaces using Tailwind CSS. Learn about utility-first CSS, component design, and responsive design principles.",
        },
        {
          locale: Locale.TR,
          title: "Tailwind CSS ile Modern Arayüzler Oluşturma",
          content:
            "Tailwind CSS kullanarak güzel ve duyarlı kullanıcı arayüzleri oluşturmayı keşfedin. Utility-first CSS, bileşen tasarımı ve duyarlı tasarım prensiplerini öğrenin.",
        },
      ],
    },
    {
      translations: [
        {
          locale: Locale.EN,
          title: "TypeScript Best Practices",
          content:
            "Master TypeScript best practices for building robust and maintainable applications. We'll cover type safety, interfaces, generics, and advanced TypeScript features.",
        },
        {
          locale: Locale.TR,
          title: "TypeScript En İyi Uygulamaları",
          content:
            "Sağlam ve sürdürülebilir uygulamalar oluşturmak için TypeScript en iyi uygulamalarında uzmanlaşın. Tip güvenliği, arayüzler, jenerikler ve gelişmiş TypeScript özelliklerini ele alacağız.",
        },
      ],
    },
  ];

  // Her post için veritabanına kaydet
  for (const postData of posts) {
    const post = await prisma.post.create({
      data: {
        postTranslations: {
          create: postData.translations,
        },
      },
    });

    console.log(`✅ Created post: ${post.id}`);
  }

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
