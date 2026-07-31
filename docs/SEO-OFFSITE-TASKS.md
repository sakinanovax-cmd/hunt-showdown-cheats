# Off-site SEO tasks (you must do these)

Code changes alone cannot complete these. Work through the checklist after each deploy.

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) for `huntcheats.com`
2. Confirm sitemap: `https://huntcheats.com/sitemap.xml` (should show **31+ URLs** after status page + new guides)
3. **URL Inspection → Request indexing** for:
   - `https://huntcheats.com/`
   - `https://huntcheats.com/status/`
   - `https://huntcheats.com/buy/`
   - `https://huntcheats.com/cheats/esp/`
   - `https://huntcheats.com/blog/hunt-showdown-patch-july-2026/`

## YouTube (3 demo videos)

Create a channel and embed or link from `/video/`:

1. Hunt Showdown ESP + wallhack gameplay (2–3 min)
2. Hunt Showdown aimbot + triggerbot highlights
3. Full suite tour — radar, stream-proof, buy CTA

Title each video with target keywords: `Hunt Showdown cheats`, `ESP`, `aimbot`.

## Forum / Discord mentions (10 organic, not spam)

- Answer real questions on Hunt Discord / Reddit with a **helpful guide link** (not only homepage)
- Use anchors like “ESP setup guide” → `/blog/hunt-showdown-esp-guide/`
- Never copy-paste the same block 10 times — vary text and context

See also: `docs/BACKLINK-COPY-PASTE.md`

## Reviews

- Ask satisfied buyers for short Discord testimonials (screenshot blur names)
- Optional: Trustpilot / product page reviews if your checkout provider allows

## Competitor keyword gap (Ahrefs / Semrush)

Monthly check queries competitors rank for that you do not:

- `hunt showdown hacks 2026`
- `hunt showdown anti-cheat bypass`
- `hunt showdown cheat status`
- `hunt showdown esp buy`

Add content on `/status/` and feature pages when gaps appear.

## Retargeting + email

- Cloudflare Zaraz / Meta pixel (if you run ads) — retarget `/buy/` visitors
- Collect email on checkout provider; send patch-day “loader updated” emails linking to `/status/`

## Deploy after code changes

```powershell
npm run deploy
npm run ping:sitemap
```
