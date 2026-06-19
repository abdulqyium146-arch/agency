import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@sbmp.com" },
    update: {},
    create: { email: "admin@sbmp.com", name: "Admin", password, role: "ADMIN" },
  });

  const services = [
    { name: "SEO", slug: "seo", description: "Local & national search engine optimisation", duration: 60, price: 499 },
    { name: "Social Media Marketing", slug: "social-media", description: "Strategic social media management", duration: 60, price: 299 },
    { name: "Google Ads", slug: "google-ads", description: "PPC campaign management", duration: 60, price: 399 },
    { name: "Website Development", slug: "web-development", description: "Custom website design & development", duration: 90, price: 1499 },
    { name: "Content Writing", slug: "content-writing", description: "SEO-optimised blog & web copy", duration: 60, price: 199 },
    { name: "Email Marketing", slug: "email-marketing", description: "Email campaigns & automation", duration: 60, price: 249 },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  console.log("Seed complete. Admin: admin@sbmp.com / admin123");
}

main().catch(console.error).finally(() => prisma.$disconnect());
