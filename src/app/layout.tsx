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
    <html lang="en" className="h-full">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html,body{background:#0a0614;color:#f0ecff;margin:0}body{font-family:Arial,Helvetica,sans-serif}.ref-hero-title{font-family:Arial Narrow,Arial,sans-serif;font-weight:800;line-height:0.95;letter-spacing:-0.02em;font-size:clamp(2.75rem,12vw,4.75rem);margin:0}",
          }}
        />
        <link rel="preconnect" href="https://zadeyo.com" />
        <link rel="dns-prefetch" href="https://zadeyo.com" />
        <meta name="geo.region" content="US" />
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function loadFonts(){if(document.getElementById("site-fonts-css"))return;var l=document.createElement("link");l.id="site-fonts-css";l.rel="stylesheet";l.href="/fonts.css";document.head.appendChild(l);document.documentElement.classList.add("fonts-ready")}if("requestIdleCallback"in window){requestIdleCallback(loadFonts,{timeout:2500})}else{window.addEventListener("load",function(){setTimeout(loadFonts,1)})}})();`,
          }}
        />
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
