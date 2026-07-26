import { HERO_BACKGROUND } from "@/lib/assets";

/** CSS background only — must not compete with the LCP side image. */
export default function HeroBackground() {
  return (
    <div className="hero-bg-root absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      <div className="hero-bg-video-wrap">
        <div
          className="hero-bg-video-zoom hero-bg-image"
          style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
        />
      </div>

      <div className="hero-bg-glow-left absolute inset-0" />
      <div className="hero-bg-glow-center absolute inset-0" />
      <div className="hero-purple-layer absolute inset-0" />
      <div className="hero-hex-grid absolute inset-0 opacity-20" />
      <div className="hero-overlay hero-overlay-video absolute inset-0" />
      <div className="hero-vignette hero-vignette-video absolute inset-0" />
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-32" />
    </div>
  );
}
