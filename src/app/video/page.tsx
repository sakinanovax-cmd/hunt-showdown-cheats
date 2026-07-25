import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ClickableVideoPlayer from "@/components/ui/ClickableVideoPlayer";
import SectionHeading from "@/components/ui/SectionHeading";
import RelatedRoutes from "@/components/sections/RelatedRoutes";
import HubPageLinks from "@/components/layout/HubPageLinks";
import { PurchaseButton } from "@/components/ui/Button";
import { HUNT_SHOWDOWN_DEMO_VIDEO, VIDEO_POSTER, ZADEYO_ASSETS } from "@/lib/assets";
import { buildPageMetadata } from "@/lib/metadata";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getVideoSchema, getWebPageSchema } from "@/lib/seo";
import { getCanonicalUrl, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.video,
  description: META_DESCRIPTIONS.video,
  path: "/video/",
  imageAlt: "Hunt Showdown cheats video — ESP and aimbot gameplay demo",
  imagePath: ZADEYO_ASSETS.screenshotBanner,
  keywords: [
    "Hunt Showdown cheats video",
    "Hunt Showdown ESP demo",
    "Hunt Showdown aimbot gameplay",
    "Hunt Showdown cheat demo",
  ],
});

const VIDEO_FEATURE_BEATS = [
  {
    title: "Player ESP & wallhack",
    body: "Watch hunter boxes, distance tags, and through-wall outlines during compound pushes and foggy rotations — the same awareness stack covered on our ESP and wallhack pages.",
  },
  {
    title: "Aimbot & combat assists",
    body: "See targeting behavior in real bayou gunfights. Smoothness and FOV settings are adjustable after you buy — pair with triggerbot or recoil control from the full suite.",
  },
  {
    title: "Radar & extract awareness",
    body: "Map-level tracking helps during boss banish and extract camps. Use the demo to decide whether radar + ESP is the stack you want before checkout.",
  },
] as const;

export default function VideoPage() {
  const homeUrl = getCanonicalUrl("/");
  const videoUrl = getCanonicalUrl("/video/");

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.video,
            description: META_DESCRIPTIONS.video,
            path: "/video/",
          }),
          getVideoSchema(),
          getBreadcrumbSchema([
            { name: "Hunt Showdown Cheats", url: homeUrl },
            { name: "Cheat Demo Video", url: videoUrl },
          ]),
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Cheat Demo Video" },
            ]}
          />

          <HubPageLinks current="video" />

          <SectionHeading
            as="h1"
            eyebrow="Gameplay"
            heading="Hunt Showdown Cheats — Video Demo"
            description="Full gameplay footage — player ESP, wallhack overlays, aimbot, and bayou PvP. Watch the Zadeyo cheat suite in action, then buy from $35/mo or $150 lifetime."
            align="left"
          />

          <div className="mx-auto max-w-5xl">
            <ClickableVideoPlayer
              videoSrc={HUNT_SHOWDOWN_DEMO_VIDEO}
              posterSrc={VIDEO_POSTER}
              posterAlt="Hunt Showdown cheats video poster — bayou hunt with ESP overlay"
              title="Hunt Showdown Cheats — ESP, Aimbot & Wallhack Demo"
              description="Click play for the full Hunt: Showdown cheat gameplay recording. Features shown may vary by loader version."
            />
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center gap-4 sm:flex-row">
            <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
            <Link
              href="/cheats/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border-subtle)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
            >
              All cheat features
            </Link>
            <Link
              href="/buy/"
              className="text-sm font-medium text-[var(--color-purple-light)] underline-offset-2 hover:underline"
            >
              Price &amp; plans →
            </Link>
          </div>

          <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="video-what-you-see">
            <h2 id="video-what-you-see" className="display-heading mb-4 text-2xl text-[var(--color-text)]">
              What this Hunt Showdown cheats video shows
            </h2>
            <p className="prose-body mb-8 max-w-3xl text-[var(--color-text-secondary)]">
              This demo is for hunters researching ESP, aimbot, wallhack, and radar before purchase.
              Footage is illustrative — loader menus and overlay colors can change after Crytek patches.
              Zadeyo is not affiliated with Crytek or Hunt: Showdown; all cheat software carries ban risk.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {VIDEO_FEATURE_BEATS.map((beat) => (
                <article key={beat.title}>
                  <h3 className="ref-card-title mb-2 text-[var(--color-text)]">{beat.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{beat.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-14 max-w-5xl" aria-labelledby="video-next-steps">
            <h2 id="video-next-steps" className="display-heading mb-4 text-2xl text-[var(--color-text)]">
              Next steps after watching
            </h2>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li>
                Compare features and providers on the{" "}
                <Link href="/compare/" className="text-[var(--color-purple-light)] hover:underline">
                  Hunt Showdown cheat comparison
                </Link>{" "}
                page.
              </li>
              <li>
                Check monthly vs lifetime pricing on the{" "}
                <Link href="/buy/" className="text-[var(--color-purple-light)] hover:underline">
                  buy page
                </Link>{" "}
                ($35/mo or $150 lifetime).
              </li>
              <li>
                Read setup answers in the{" "}
                <Link href="/faq/" className="text-[var(--color-purple-light)] hover:underline">
                  FAQ
                </Link>{" "}
                or open{" "}
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-[var(--color-purple-light)] hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Zadeyo checkout
                </a>{" "}
                for instant delivery.
              </li>
            </ul>
          </section>

          <RelatedRoutes />
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
