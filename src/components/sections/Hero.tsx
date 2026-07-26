"use client";

import Button, { PurchaseButton } from "@/components/ui/Button";
import HeroBackground from "@/components/ui/HeroBackground";
import HeroSideImages from "@/components/ui/HeroSideImages";
import {
  HERO_BADGES,
  HERO_COMPAT_LINE,
  HERO_SUBTITLE,
  HERO_TRUST_ITEMS,
} from "@/lib/constants";
import { HERO_H1_LINES } from "@/lib/site";
import { Check } from "lucide-react";

const RING_SIZE = 112;
const RING_STROKE = 3.5;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const HERO_STATS = [
  { label: "From", value: "$35", progress: 0.7, marker: true },
  { label: "Delivery", value: "Instant", progress: 1, marker: false },
  { label: "Support", value: "24/7", progress: 1, marker: false },
] as const;

function StatRing({
  label,
  value,
  progress,
  marker,
}: {
  label: string;
  value: string;
  progress: number;
  marker?: boolean;
}) {
  const offset = RING_CIRCUMFERENCE * (1 - progress);

  return (
    <div className="stat-ring" role="listitem">
      <svg
        className="stat-ring-svg"
        viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
        width={RING_SIZE}
        height={RING_SIZE}
        aria-hidden="true"
      >
        <circle
          className="stat-ring-track"
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
        />
        <circle
          className="stat-ring-progress"
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
        />
        {marker && (
          <g className="stat-ring-marker" transform={`translate(${RING_SIZE / 2} 8)`}>
            <circle r="2.2" fill="#c084fc" />
            <path
              d="M0 -7 V7 M-7 0 H7"
              stroke="#c084fc"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}
      </svg>
      <div className="stat-ring-content">
        <span className="stat-circle-value">{value}</span>
        <span className="stat-circle-label">{label}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-section relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="container-dnd hero-section-inner relative z-20">
        <div className="hero-layout">
          <div className="hero-split-grid">
            <div className="hero-copy-col">
              <div className="badge-pill badge-pill-glow mb-4 inline-flex w-fit fade-rise">
                <span className="badge-dot" />
                {HERO_BADGES.join(" · ")}
              </div>

              <h1
                id="hero-heading"
                className="ref-hero-title hero-headline-standalone fade-rise fade-rise-delay-1"
              >
                {HERO_H1_LINES[0]}
                <br />
                {HERO_H1_LINES[1]}
              </h1>

              <div className="hero-copy-panel fade-rise fade-rise-delay-2">
                <p className="ref-hero-subtitle mb-5">{HERO_SUBTITLE}</p>

                <p className="prose-body max-w-lg">
                  Private Hunt Showdown ESP, aimbot, and wallhack built for clearer enemy information,
                  faster decisions, and a simple setup. Get patch-ready updates, instant access, and
                  reliable Discord support.
                </p>
              </div>
            </div>

            <div className="hero-preview-col fade-rise fade-rise-delay-3">
              <HeroSideImages />
            </div>
          </div>

          <div className="hero-action-bar fade-rise fade-rise-delay-4">
            <div className="hero-action-stats" role="list" aria-label="Trust stats">
              {HERO_STATS.map((stat) => (
                <StatRing key={stat.label} {...stat} />
              ))}
            </div>

            <div className="hero-action-buttons">
              <PurchaseButton className="w-full sm:w-auto">Purchase Now</PurchaseButton>
              <Button href="/buy/" variant="secondary" className="w-full sm:w-auto">
                Price &amp; Features
              </Button>
            </div>

            <a href="#features" className="hero-explore-box">
              Explore Features ↓
            </a>

            <ul className="hero-action-trust">
              {HERO_TRUST_ITEMS.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Check size={16} className="text-[var(--color-purple-light)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="hero-action-compat font-mono-label text-[var(--color-text-muted)]">
              {HERO_COMPAT_LINE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
