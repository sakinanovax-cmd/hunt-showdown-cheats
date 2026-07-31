import type { Metadata } from "next";
import { VIDEO_POSTER } from "./assets";
import { trimMetaDescription } from "./seo-descriptions";
import { DEFAULT_LAYOUT_TITLE } from "./seo-titles";
import { SEO_KEYWORDS } from "./seo";
import {
  SITE_BRAND,
  SITE_SEO_DESCRIPTION,
  SITE_URL,
  getAbsoluteAssetUrl,
  getCanonicalUrl,
} from "./site";

const DEFAULT_OG_IMAGE = VIDEO_POSTER;
const OG_IMAGE_WIDTH = 1920;
const OG_IMAGE_HEIGHT = 1080;

function resolveOgImageUrl(imagePath?: string): string {
  const path = imagePath ?? DEFAULT_OG_IMAGE;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return getAbsoluteAssetUrl(path);
}

const sharedOgImage = (imagePath: string | undefined, alt: string) => {
  const url = resolveOgImageUrl(imagePath);
  return [
    {
      url,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt,
      type: url.endsWith(".png") ? "image/png" : url.endsWith(".jpg") || url.endsWith(".jpeg") ? "image/jpeg" : undefined,
    },
  ];
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: DEFAULT_LAYOUT_TITLE,
    template: "%s",
  },
  description: SITE_SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_BRAND, url: getCanonicalUrl("/") }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
  category: "gaming",
  applicationName: SITE_BRAND,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getCanonicalUrl("/"),
    siteName: SITE_BRAND,
    title: DEFAULT_LAYOUT_TITLE,
    description: SITE_SEO_DESCRIPTION,
    images: sharedOgImage(DEFAULT_OG_IMAGE, "Hunt Showdown cheats — ESP wallhack gameplay screenshot"),
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_LAYOUT_TITLE,
    description: SITE_SEO_DESCRIPTION,
    images: [resolveOgImageUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getCanonicalUrl("/"),
    languages: {
      en: getCanonicalUrl("/"),
      "x-default": getCanonicalUrl("/"),
    },
    types: {
      "application/rss+xml": getAbsoluteAssetUrl("/rss.xml"),
    },
  },
  other: {
    "theme-color": "#0a0614",
  },
};

export { getCanonicalUrl };

export function buildPageMetadata({
  title,
  description,
  path,
  imageAlt,
  imagePath,
  type = "website",
  publishedTime,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  imagePath?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
}): Metadata {
  const canonical = getCanonicalUrl(path);
  const alt = imageAlt ?? title;
  const ogImageUrl = resolveOgImageUrl(imagePath);
  const images = sharedOgImage(imagePath, alt);
  const metaDescription = trimMetaDescription(description);

  return {
    title,
    description: metaDescription,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url: canonical,
      siteName: SITE_BRAND,
      title,
      description: metaDescription,
      images,
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: publishedTime, authors: [SITE_BRAND] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
