import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import HubPageLinks from "@/components/layout/HubPageLinks";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BlogCard from "@/components/ui/BlogCard";
import JsonLd from "@/components/seo/JsonLd";
import { getAllArticles } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/metadata";
import { getBlogListSchema, getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.blogIndex,
  description: META_DESCRIPTIONS.blogIndex,
  path: "/blog/",
  imageAlt: "Hunt Showdown cheats blog and guides",
});

export default function BlogPage() {
  const articles = getAllArticles();
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Hunt Showdown Cheats", url: getCanonicalUrl("/") },
    { name: "Cheat Guides", url: getCanonicalUrl("/blog/") },
  ]);

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.blogIndex,
            description: META_DESCRIPTIONS.blogIndex,
            path: "/blog/",
          }),
          getBlogListSchema(),
          breadcrumbs,
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Cheat Guides" },
            ]}
          />
          <HubPageLinks current="blog" />
          <SectionHeading
            as="h1"
            eyebrow="Guides"
            heading="Hunt Showdown Cheats Guides"
            description="Everything about Hunt Showdown cheats — ESP, aimbot, wallhack, radar, Cloud DMA, anti-cheat, and setup for Zadeyo."
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
