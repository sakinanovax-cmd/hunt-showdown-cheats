import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import VideoShowcase from "@/components/sections/VideoShowcase";
import EnemyVisuals from "@/components/sections/EnemyVisuals";
import WorldVisuals from "@/components/sections/WorldVisuals";
import BlogPreview from "@/components/sections/BlogPreview";
import CheatsHub from "@/components/sections/CheatsHub";
import FAQ from "@/components/sections/FAQ";
import { buildPageMetadata } from "@/lib/metadata";
import { META_TITLES } from "@/lib/seo-titles";
import { SITE_PRIMARY_KEYWORD, SITE_SEO_DESCRIPTION, getCanonicalUrl } from "@/lib/site";
import SeoIntro from "@/components/sections/SeoIntro";
import {
  getBlogListSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getProductSchema,
  getWebPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.home,
  description: SITE_SEO_DESCRIPTION,
  path: "/",
  imageAlt: "Hunt Showdown cheats — ESP wallhack gameplay screenshot",
  imagePath: "/images/hunt/esp-overlay.webp",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: `${SITE_PRIMARY_KEYWORD}: Best Hunt Showdown Cheats 2026`,
            description: SITE_SEO_DESCRIPTION,
            path: "/",
          }),
          getBreadcrumbSchema([{ name: SITE_PRIMARY_KEYWORD, url: getCanonicalUrl("/") }]),
          getProductSchema(),
          getFAQSchema(),
          getBlogListSchema(),
        ]}
      />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <SeoIntro />
        <div className="cv-auto">
          <WhyChoose />
        </div>
        <div className="cv-auto">
          <EnemyVisuals />
        </div>
        <div className="cv-auto">
          <WorldVisuals />
        </div>
        <div className="cv-auto">
          <CheatsHub />
        </div>
        <div className="cv-auto">
          <VideoShowcase />
        </div>
        <div className="cv-auto">
          <BlogPreview />
        </div>
        <div className="cv-auto">
          <FAQ showFullPageLink />
        </div>
      </main>
      <Footer />
    </>
  );
}
