import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import HubPageLinks from "@/components/layout/HubPageLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";
import { PurchaseButton } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from "@/lib/seo";
import { FEATURE_STATUS_ROWS, LOADER_STATUS, STATUS_FAQ } from "@/lib/status";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.status,
  description: META_DESCRIPTIONS.status,
  path: "/status/",
  imageAlt: "Hunt Showdown cheat status — loader and feature updates",
  imagePath: "/images/hunt/roadmap-update.webp",
  keywords: [
    "Hunt Showdown cheat status",
    "Hunt Showdown cheats",
    "Hunt Showdown hacks 2026",
    "Hunt Showdown ESP",
  ],
});

function statusColor(status: string) {
  if (status === "Online") return "text-emerald-400";
  if (status === "Updating") return "text-amber-400";
  return "text-[var(--color-text-muted)]";
}

export default function StatusPage() {
  const homeUrl = getCanonicalUrl("/");
  const statusUrl = getCanonicalUrl("/status/");

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.status,
            description: META_DESCRIPTIONS.status,
            path: "/status/",
          }),
          getFAQSchema(STATUS_FAQ),
          getBreadcrumbSchema([
            { name: "Hunt Showdown Cheats", url: homeUrl },
            { name: "Cheat Status", url: statusUrl },
          ]),
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Cheat Status" },
            ]}
          />
          <HubPageLinks current="status" />

          <SectionHeading
            as="h1"
            eyebrow="Live status"
            heading="Hunt Showdown Cheat Status — Loader & Features"
            description={`Loader v${LOADER_STATUS.version} · ${LOADER_STATUS.gameBuild} · Last checked ${LOADER_STATUS.lastChecked}. ${LOADER_STATUS.note}`}
            align="left"
          />

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="font-mono-label mb-1 text-[var(--color-text-muted)]">Overall</p>
              <p className="text-lg font-semibold text-emerald-400">{LOADER_STATUS.overall}</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="font-mono-label mb-1 text-[var(--color-text-muted)]">Loader version</p>
              <p className="text-lg font-semibold text-[var(--color-text)]">{LOADER_STATUS.version}</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="font-mono-label mb-1 text-[var(--color-text-muted)]">Game patch</p>
              <p className="text-lg font-semibold text-[var(--color-text)]">{LOADER_STATUS.gameBuild}</p>
            </div>
          </div>

          <div className="mb-12 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text)]">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text)]">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text-secondary)]">
                    Notes
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text-secondary)]">
                    Page
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_STATUS_ROWS.map((row) => (
                  <tr key={row.slug} className="border-b border-[var(--color-border)] last:border-0">
                    <th scope="row" className="px-4 py-3 font-medium text-[var(--color-text)]">
                      {row.feature}
                    </th>
                    <td className={`px-4 py-3 font-semibold ${statusColor(row.status)}`}>{row.status}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{row.detail}</td>
                    <td className="px-4 py-3">
                      <Link href={`/cheats/${row.slug}/`} className="text-[var(--color-purple-light)] hover:underline">
                        View cheat →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-12 flex flex-wrap gap-4">
            <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
            <Link
              href="/blog/hunt-showdown-patch-july-2026/"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
            >
              July 2026 patch notes
            </Link>
            <Link
              href="/blog/hunt-showdown-cheat-patch-status/"
              className="inline-flex items-center text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Full patch guide
            </Link>
          </div>

          <FAQ items={STATUS_FAQ} heading="Hunt Showdown cheat status FAQ" />
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
