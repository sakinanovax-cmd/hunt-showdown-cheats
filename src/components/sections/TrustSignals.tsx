import Link from "next/link";
import { Shield, FileText, RefreshCw, Building2 } from "lucide-react";
import {
  LAST_CONTENT_REVIEW,
  SITE_NAME,
  ZADEYO_CHECKOUT_URL,
  ZADEYO_SUPPORT_URL,
} from "@/lib/site";

/** Handbook §10 — visible E-E-A-T and trust signals */
export default function TrustSignals() {
  return (
    <section id="trust" className="py-[var(--section-py)] bg-[var(--color-surface)]" aria-labelledby="trust-heading">
      <div className="container-dnd">
        <p id="trust-heading" className="display-heading mb-8 text-center text-2xl text-[var(--color-text)] md:text-3xl">
          Trust &amp; transparency — Hunt Showdown Cheats by {SITE_NAME}
        </p>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="card-surface flex gap-4 p-6">
            <Building2 className="shrink-0 text-[var(--color-purple)]" size={22} aria-hidden="true" />
            <div>
              <p className="mb-2 font-semibold text-[var(--color-text)]">Who provides this</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Hunt Showdown cheats are sold and supported by{" "}
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-[var(--color-purple-light)] underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Zadeyo
                </a>
                . We document features and pricing for buyers; we do not claim ownership of Crytek&apos;s game IP.
              </p>
            </div>
          </div>
          <div className="card-surface flex gap-4 p-6">
            <Shield className="shrink-0 text-[var(--color-purple)]" size={22} aria-hidden="true" />
            <div>
              <p className="mb-2 font-semibold text-[var(--color-text)]">Honest claims</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                We do not promise undetectable or ban-proof results. Risk disclosure and usage notes appear on
                the buy page — read them before checkout and after every game update.
              </p>
            </div>
          </div>
          <div className="card-surface flex gap-4 p-6">
            <FileText className="shrink-0 text-[var(--color-purple)]" size={22} aria-hidden="true" />
            <div>
              <p className="mb-2 font-semibold text-[var(--color-text)]">Support &amp; policies</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Purchase terms, delivery, and refund details are on your{" "}
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-[var(--color-purple-light)] underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Zadeyo order page
                </a>
                . Need help? Contact{" "}
                <a
                  href={ZADEYO_SUPPORT_URL}
                  className="text-[var(--color-purple-light)] underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Zadeyo support
                </a>
                .
              </p>
            </div>
          </div>
          <div className="card-surface flex gap-4 p-6">
            <RefreshCw className="shrink-0 text-[var(--color-purple)]" size={22} aria-hidden="true" />
            <div>
              <p className="mb-2 font-semibold text-[var(--color-text)]">Content freshness</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Last meaningful content review: {LAST_CONTENT_REVIEW}. Guides and compatibility notes are
                updated after Crytek patches — see our{" "}
                <Link href="/blog/hunt-showdown-anti-cheat-analysis/" className="text-[var(--color-purple-light)] hover:underline">
                  anti-cheat update guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
