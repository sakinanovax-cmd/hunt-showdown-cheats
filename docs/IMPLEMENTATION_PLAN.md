# Implementation Plan — Hunt Showdown Cheats Site

**Reference UI:** [darkanddarkercheats.com](https://darkanddarkercheats.com/)  
**Content source:** [zadeyo.com/products/hunt-showdown-cheats](https://zadeyo.com/products/hunt-showdown-cheats)  
**Hero media:** `public/videos/hero.mp4`

---

## 1. Site Map (Pages)

| Route | Purpose | Priority |
|-------|---------|----------|
| `/` | Marketing homepage — hero, trust, features, visuals, FAQ, CTA | P0 |
| `/buy/` | Pricing ($35/mo, $150 lifetime), feature checklist, system requirements | P0 |
| `/blog/` | Guide index | P1 |
| `/blog/[slug]/` | Individual guide articles (6 static pages) | P1 |
| `/robots.txt` | SEO | P2 |
| `/sitemap.xml` | SEO | P2 |

---

## 2. Homepage Sections (top → bottom)

1. **Navbar** — logo, Home / Blog / Buy, language toggle, Discord, Purchase CTA
2. **Hero** — full-viewport video bg, badge pill, H1, subheading, description, 3 CTAs, compatibility strip, scroll indicator
3. **Why Choose Us** — eyebrow + H2 + 3 paragraphs
4. **Product Info** — 4-card grid describing the cheat
5. **The Game** — Hunt: Showdown overview + side visual
6. **Feature Blocks** — ESP/Aimbot block + World/Misc block
7. **Trust Grid** — 4 cards (Quality, Coverage, Support, Experience)
8. **Enemy Visuals** — 6 feature cards (adapted to Hunt: players, bosses, traits)
9. **World Visuals** — 5 feature cards (loot, extracts, supplies, traps, bosses)
10. **Custom Colors** — ESP color customization + color swatches
11. **How It Works** — 3-step process
12. **Blog Preview** — 3 article cards + view all
13. **FAQ** — accordion (5–6 items from Zadeyo)
14. **CTA Banner** — final purchase push
15. **Footer** — 4 columns (brand, shop, guides, trust)

---

## 3. Reusable Components

| Component | Location | Used on |
|-----------|----------|---------|
| `Navbar` | `layout/Navbar.tsx` | All pages |
| `Footer` | `layout/Footer.tsx` | All pages |
| `Button` / `PurchaseButton` | `ui/Button.tsx` | Global |
| `SectionHeading` | `ui/SectionHeading.tsx` | All sections |
| `BlogCard` | `ui/BlogCard.tsx` | Blog index, preview |
| `Logo` | `ui/Logo.tsx` | Navbar, footer |
| `HeroVideo` | `ui/HeroVideo.tsx` | Homepage hero |
| `FeatureCard` | `ui/FeatureCard.tsx` | Visual sections |
| `FAQ` | `sections/FAQ.tsx` | Home, Buy |
| Section blocks | `sections/*.tsx` | Homepage |

---

## 4. Design Tokens

### Color Palette (from reference inspection)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#060409` | Page background |
| `--color-surface` | `#0c0a10` | Section alternates |
| `--color-card` | `#12101a` | Cards |
| `--color-purple` | `#a855f7` | Primary accent, logo, H1 |
| `--color-purple-light` | `#c084fc` | Eyebrows, hover |
| `--color-purple-dark` | `#7c3aed` | Button hover |
| `--color-text` | `#f0ecff` | Headings |
| `--color-text-secondary` | `#a1a1aa` | Body |
| `--color-text-muted` | `#71717a` | Meta, compatibility |
| `--color-accent-red` | `#ef4444` | ESP box overlays |
| `--color-accent-cyan` | `#22d3ee` | Loot markers |
| `--color-border` | `rgba(168,85,247,0.15)` | Card borders |

### Typography

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Display / H1–H2 | DM Sans | 700 | uppercase, letter-spacing 0.04em |
| Body | DM Sans | 400–500 | normal case |
| Labels / eyebrows | DM Sans | 600 | uppercase, 0.2em tracking, 12px |

### Spacing System

| Token | Value |
|-------|-------|
| `--max-content` | 1200px |
| `--section-py` | `clamp(4rem, 8vw, 7rem)` |
| `--section-px` | `clamp(1.125rem, 4vw, 2rem)` |
| Card padding | 24–32px |
| Grid gap | 16–32px |

### Breakpoints (Tailwind defaults)

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| `sm` | 640px | Stack → row CTAs |
| `md` | 768px | 2-col grids |
| `lg` | 1024px | Full nav visible, 3-col grids |
| `xl` | 1280px | Max content width capped |

### Animations

| Name | Trigger | Effect |
|------|---------|--------|
| `fadeRise` | Hero content load | opacity + translateY |
| `slowZoom` | Hero video | scale 1 → 1.06 (30s loop) |
| `scrollBounce` | Scroll indicator | translateY pulse |
| `espPulse` | ESP overlay SVG | opacity pulse |
| Card hover | `:hover` | translateY -2px, border glow |
| Accordion | click | grid-template-rows expand |
| Navbar | scroll > 40px | blur backdrop, height shrink |

### Navigation Behavior

- Fixed top, transparent → blurred on scroll
- Active link purple underline
- Mobile: hamburger → slide-down panel
- Purchase button always visible on desktop

---

## 5. Assets Required

| Asset | Path | Status |
|-------|------|--------|
| Hero video | `public/videos/hero.mp4` | Provided (100MB) |
| Favicon | `public/favicon.svg` | SVG placeholder |
| OG cover | `public/images/og-cover.svg` | SVG placeholder |
| Game side visual | `public/images/game-preview.webp` | Prompt in `assets/prompts/` |
| Feature screenshots | `public/images/features/*.webp` | Prompts provided |

---

## 6. Development Roadmap

| Phase | Task | Est. |
|-------|------|------|
| 1 | Architecture + scaffold + config | 15 min |
| 2 | Design tokens + shared components | 20 min |
| 3 | Homepage (all sections) | 45 min |
| 4 | Buy page | 15 min |
| 5 | Blog index + 6 articles | 20 min |
| 6 | Zadeyo content integration | 10 min |
| 7 | Hero video + fallbacks | 10 min |
| 8 | Visual audit + fixes | 25 min |
| 9 | GitHub Pages + deploy docs | 10 min |

**Total:** ~2 hours
