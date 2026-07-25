"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Zap } from "lucide-react";
import { HERO_GAMEPLAY } from "@/lib/assets";

const PREVIEW_TABS = ["Enemy ESP", "Boss ESP", "Loot ESP"] as const;

export default function HeroCheatPreview() {
  return (
    <Link
      href="#product-info"
      className="hero-cheat-preview block transition-transform duration-300 hover:scale-[1.01]"
      aria-label="Scroll to Hunt Showdown cheat video demo"
    >
      <div className="hero-cheat-window">
        <div className="hero-cheat-titlebar">
          <span className="hero-cheat-dot hero-cheat-dot-red" />
          <span className="hero-cheat-dot hero-cheat-dot-gold" />
          <span className="hero-cheat-dot hero-cheat-dot-green" />
          <span className="font-mono-label ml-auto text-[var(--color-text-muted)]">Zadeyo Overlay</span>
        </div>

        <div className="hero-cheat-viewport">
          <Image
            src={HERO_GAMEPLAY.preview}
            alt="Hunt Showdown ESP cheat overlay — green hunter box at 25m through grass"
            fill
            className="object-cover object-[center_58%]"
            sizes="(max-width: 1024px) 90vw, 440px"
            priority
          />
        </div>

        <div className="hero-cheat-statusbar">
          <span className="text-[var(--color-text-muted)]">
            Status: <span className="text-[var(--color-purple-light)]">ESP Active</span>
          </span>
          <span className="hero-cheat-secure">
            <Shield size={12} aria-hidden="true" />
            Secure
          </span>
        </div>

        <div className="hero-cheat-tabs">
          {PREVIEW_TABS.map((label, i) => (
            <span
              key={label}
              className={`hero-cheat-tab font-mono-label ${i === 0 ? "hero-cheat-tab-active" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-delivery-badge">
        <Zap size={14} className="text-[var(--color-purple-light)]" aria-hidden="true" />
        <span>
          <span className="hero-delivery-label">Delivery</span>
          Instant access
        </span>
      </div>
    </Link>
  );
}
