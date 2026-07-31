# Backlink & indexing checklist — huntcheats.com

Use this off-site. No website UI or copy changes required.

## Before you start

- [ ] Homepage live: https://huntcheats.com/
- [ ] Google Search Console property verified
- [ ] Sitemap submitted: https://huntcheats.com/sitemap.xml
- [ ] Zadeyo checkout link works

---

## Priority 1 — Do first (highest impact)

### Zadeyo / official channels

- [ ] Zadeyo Hunt product page → link to https://huntcheats.com/ (setup / resources)
- [ ] Zadeyo store footer → huntcheats.com (if editable)
- [ ] Discord server bio → site URL
- [ ] Discord pinned message → link + one line (“Official setup & guides”)
- [ ] Discord support → share guide links when users ask about setup (helpful, not spam)

### Google Search Console — request indexing

- [ ] https://huntcheats.com/
- [ ] https://huntcheats.com/cheats/
- [ ] https://huntcheats.com/buy/
- [ ] https://huntcheats.com/cheats/esp/
- [ ] https://huntcheats.com/cheats/aimbot/
- [ ] https://huntcheats.com/compare/
- [ ] https://huntcheats.com/blog/hunt-showdown-wallhack-guide/

Path: **URL Inspection** → paste URL → **Test live URL** → **Request indexing**  
Limit: ~10–20 requests per day.

After deploy:

```powershell
npm run ping:sitemap
```

---

## Priority 2 — Medium impact

### Profiles (real accounts only)

- [ ] YouTube channel description (if you post Hunt / Zadeyo content)
- [ ] Reddit profile link (do not spam posts with the URL)
- [ ] Gaming forum profile signature (only where rules allow)

### Helpful mentions (not spam)

When someone asks about ESP, DMA, or setup, reply with a short answer + one guide link:

- [ ] /blog/hunt-showdown-esp-guide/
- [ ] /blog/cloud-dma-explained/
- [ ] /blog/hunt-showdown-beginners-guide/

Only post where links are allowed.

---

## Priority 3 — Optional

- [ ] Legitimate gaming / software directory listing (no paid “1000 backlinks” packages)
- [ ] Hunt community resource pages where mods allow links

---

## Do not do

- [ ] Fiverr bulk backlink / PBN packages
- [ ] Same link pasted across dozens of forums
- [ ] Fake reviews with links
- [ ] Keyword-stuffed anchors everywhere (“best hunt showdown cheats buy now”)

**Natural anchor examples:** `huntcheats.com`, `Hunt Showdown cheats guide`, `setup guide`, `Zadeyo Hunt guides`

---

## Track weekly (GSC)

- [ ] Performance → Queries → `hunt showdown cheats` position
- [ ] Impressions and clicks trend
- [ ] Indexing → Pages → indexed count

**Manual checks (incognito):**

- [ ] `site:huntcheats.com`
- [ ] `huntcheats.com`
- [ ] `hunt showdown cheats` (pages 1–2)

---

## Realistic timeline

| When | What to expect |
|------|----------------|
| Week 1–2 | More indexing / impressions possible |
| Week 3–6 | Position may move from ~#20 toward top 10 (with links) |
| Page 1 | Needs time + competition + consistent authority |

---

## Today’s order

1. Zadeyo product page link  
2. Discord bio + pin  
3. GSC — 7 URLs above  
4. `npm run deploy` then `npm run ping:sitemap` if you shipped code changes
