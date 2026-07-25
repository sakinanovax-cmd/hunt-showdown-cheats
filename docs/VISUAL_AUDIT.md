# Visual Audit — vs darkanddarkercheats.com

## Severity Rankings

| # | Severity | Difference | Status |
|---|----------|------------|--------|
| 1 | **High** | Hero uses MP4 video (Hunt Showdown) vs static game screenshot on reference | ✅ Intentional per brief |
| 2 | **High** | Brand logo "ZADEYO" vs "DARKER" | ✅ Intentional (Zadeyo content) |
| 3 | **Medium** | Background color `#060409` vs reference `rgb(6,4,9)` | ✅ Fixed |
| 4 | **Medium** | Font DM Sans vs reference | ✅ Fixed |
| 5 | **Medium** | Nav centered (logo / links / actions) | ✅ Fixed |
| 6 | **Medium** | H1 color purple + subheading white | ✅ Matches |
| 7 | **Low** | Badge pill text differs (Hunt features vs Legit ESP) | ✅ Content-specific |
| 8 | **Low** | Game side panel uses SVG vs photo on reference | Placeholder until AI image generated |
| 9 | **Low** | No inline feature screenshots between text blocks | Reference has game screenshots — use prompts in `public/assets/prompts/` |
| 10 | **Low** | Footer share icons generic vs Twitter/Facebook/Reddit | Acceptable |

## Fixes Applied

1. Exact reference background `#060409` and text `#f0ecff`
2. DM Sans via `next/font/google`
3. Centered navigation grid layout
4. Hero video with autoplay, muted, loop, playsInline, overlay + vignette
5. Purple glow on primary CTA buttons
6. All Zadeyo Hunt Showdown content integrated

## Remaining (optional polish)

- Generate images from prompts in `public/assets/prompts/` and swap SVG placeholders
- Add feature screenshot bands between FeatureBlocks paragraphs (reference layout)
