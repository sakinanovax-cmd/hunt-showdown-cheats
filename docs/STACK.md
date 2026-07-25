# Technology Stack Recommendation

**Goal:** Highly accurate UI clone in ~2 hours, maintainable, deployable to GitHub Pages.

## Selected Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 16 (App Router)** | Fast scaffolding, SSG, metadata API, familiar DX |
| Language | **TypeScript** | Type-safe content models, fewer runtime bugs |
| Styling | **Tailwind CSS 4** | Utility-first = speed; matches reference spacing exactly |
| Icons | **lucide-react** | Tree-shakeable, no extra asset pipeline |
| Animation | **CSS keyframes + Tailwind** | No heavy JS; reference animations are subtle |
| Fonts | **next/font (DM Sans)** | Matches reference; zero layout shift |
| Export | **`output: 'export'`** | Required for GitHub Pages static hosting |
| Deploy | **GitHub Actions → gh-pages branch** | Automated push on every main commit |

## Why Not Alternatives

| Alternative | Rejected because |
|-------------|------------------|
| Plain HTML/CSS | Too slow to build 15+ sections with routing |
| Vite + React | No built-in metadata/SSG; extra config for GH Pages |
| Astro | Great for static, but team already has Next patterns in repo |
| WordPress/Webflow | Not code-first; poor GitHub Pages fit |

## GitHub Pages Configuration

```ts
// next.config.ts
basePath: process.env.GITHUB_PAGES === 'true' ? '/REPO_NAME' : '',
assetPrefix: same,
output: 'export',
trailingSlash: true,
images: { unoptimized: true },
```

## Folder Structure

```
hunt-showdown-cheats-site/
├── .github/workflows/deploy.yml
├── docs/                    # Plans, prompts, deployment guide
├── public/
│   ├── videos/hero.mp4
│   ├── images/
│   └── assets/prompts/
├── src/
│   ├── app/                 # Routes (page.tsx, layout.tsx)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Page sections
│   │   └── ui/              # Primitives
│   ├── lib/                 # constants, content, metadata
│   └── types/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Architecture Finalized ✓

Proceed to implementation.
