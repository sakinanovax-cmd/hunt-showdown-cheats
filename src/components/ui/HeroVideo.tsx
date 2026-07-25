"use client";

import { HERO_VIDEO, ZADEYO_ASSETS } from "@/lib/assets";

interface HeroVideoProps {
  src?: string;
  poster?: string;
}

export default function HeroVideo({
  src = HERO_VIDEO,
  poster = ZADEYO_ASSETS.screenshotBanner,
}: HeroVideoProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="hero-zoom absolute inset-0">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}
