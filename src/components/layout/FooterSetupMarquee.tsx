import {
  Cpu,
  Fingerprint,
  Headphones,
  Monitor,
  Package,
  Play,
  RefreshCw,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FOOTER_SETUP_TAGS } from "@/lib/constants";

const ICONS: Record<(typeof FOOTER_SETUP_TAGS)[number]["icon"], LucideIcon> = {
  refresh: RefreshCw,
  package: Package,
  monitor: Monitor,
  steam: Sparkles,
  shield: Shield,
  cpu: Cpu,
  fingerprint: Fingerprint,
  headphones: Headphones,
  zap: Zap,
  play: Play,
};

function MarqueeRow({
  tags,
  reverse = false,
  offset = false,
}: {
  tags: readonly (typeof FOOTER_SETUP_TAGS)[number][];
  reverse?: boolean;
  offset?: boolean;
}) {
  const loop = [...tags, ...tags];

  return (
    <div className={`footer-marquee-row ${offset ? "footer-marquee-row-offset" : ""}`}>
      <div
        className={`footer-marquee-track ${reverse ? "footer-marquee-track-reverse" : ""}`}
        aria-hidden="true"
      >
        {loop.map((tag, index) => {
          const Icon = ICONS[tag.icon];
          return (
            <span key={`${tag.label}-${index}`} className="footer-setup-pill">
              <Icon size={15} strokeWidth={2} aria-hidden="true" />
              {tag.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function FooterSetupMarquee() {
  const midpoint = Math.ceil(FOOTER_SETUP_TAGS.length / 2);
  const rowOne = FOOTER_SETUP_TAGS.slice(0, midpoint);
  const rowTwo = FOOTER_SETUP_TAGS.slice(midpoint);

  return (
    <section className="footer-setup-band" aria-labelledby="footer-setup-heading">
      <div className="container-dnd mb-10 md:mb-12">
        <p id="footer-setup-heading" className="footer-setup-title">
          Built for your setup.
        </p>
      </div>

      <div className="footer-marquee-stack space-y-3 md:space-y-4">
        <MarqueeRow tags={rowOne} />
        <MarqueeRow tags={rowTwo.length ? rowTwo : rowOne} reverse offset />
      </div>
    </section>
  );
}
