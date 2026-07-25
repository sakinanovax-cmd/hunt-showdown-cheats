import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/zadeyo/google-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/zadeyo/google-logo.png",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://zadeyo.com" />
        <link rel="dns-prefetch" href="https://zadeyo.com" />
        <meta name="geo.region" content="US" />
        <meta name="language" content="English" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="ambient-glow" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <noscript>
          <div className="container-dnd py-4 text-center text-sm text-[var(--color-text-secondary)]">
            JavaScript is disabled. You can still{" "}
            <a href={ZADEYO_CHECKOUT_URL} className="text-[var(--color-purple-light)] underline">
              buy Hunt Showdown cheats on Zadeyo
            </a>
            .
          </div>
        </noscript>
      </body>
    </html>
  );
}
