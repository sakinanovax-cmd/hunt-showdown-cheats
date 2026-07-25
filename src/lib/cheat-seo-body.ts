/** Unique long-form copy for cheat landing pages (ranking / thin-content fix). */

export const CHEAT_SEO_BODY: Record<
  string,
  { heading: string; paragraphs: string[] }
> = {
  esp: {
    heading: "Why hunters buy Hunt Showdown ESP",
    paragraphs: [
      "Hunt Showdown ESP is the most requested cheat for bayou PvP. Fog, dark compounds, and vertical barns hide threats until it is too late — player boxes, health bars, distance tags, and skeleton wallhack reverse that information gap.",
      "Zadeyo ESP is included in every plan from $35/month or $150 lifetime, ships with stream-proof mode, and receives patch-ready loader updates after Crytek releases. Pair it with radar for full-map rotations and aimbot for the fights you choose to take.",
      "Before you buy, read our ESP setup guide and compare providers on the comparison page so you know exactly what overlays and delivery options you are getting.",
    ],
  },
  aimbot: {
    heading: "Hunt Showdown aimbot built for high TTK",
    paragraphs: [
      "Hunt: Showdown fights reward controlled aim more than spray. An adjustable aimbot with smoothness, FOV, bone selection, and visibility checks helps you win peeks without looking like a rage toggle.",
      "Zadeyo aimbot works with lever-actions, shotguns, and scoped rifles, and stacks with triggerbot, silent aim, and recoil control when you want a full combat suite. Instant delivery after checkout — monthly or lifetime.",
      "Review the buy page for plan pricing, then watch the demo video to see targeting behavior in real bayou gameplay before you commit.",
    ],
  },
  wallhack: {
    heading: "Wallhack vision for compounds and crypts",
    paragraphs: [
      "Wallhack extends ESP through barns, crypts, and compound walls so you never push a doorway blind. Snap lines and skeleton layers make hunter poses readable even in torchlight or pitch black.",
      "Use wallhack during boss banish to spot third parties, or on extract routes when teams camp stairs and windows. Zadeyo includes wallhack in the full suite with Cloud DMA and stream-proof options.",
      "See price and checkout options on the buy page, or open the dedicated ESP and radar pages to plan a complete awareness stack.",
    ],
  },
  radar: {
    heading: "Radar for banish and extract control",
    paragraphs: [
      "Radar shows hunter positions across the map so you can time banish, rotate away from third parties, and pick safer extracts. It is the map-layer companion to wall ESP — local vision plus global awareness.",
      "Zadeyo radar supports adjustable range and opacity, boss and extract markers, and Cloud DMA delivery with Windows security features left ON. Included from $35/mo with the rest of the suite.",
      "Read the radar map-awareness guide for practical rotations, then buy on Zadeyo when you are ready for instant loader access.",
    ],
  },
  triggerbot: {
    heading: "Triggerbot for shotgun and hold angles",
    paragraphs: [
      "Triggerbot fires the moment your crosshair touches a hunter — ideal for shotgun pushes, tight windows, and high-TTK hold angles where a split-second delay loses the duel.",
      "Configure delay for a more natural feel, toggle per weapon class, and pair with aimbot smoothness so shots land clean without looking mechanical. Full suite pricing starts at $35/month.",
      "Compare combat features on the cheats hub, then checkout for monthly or lifetime access with 24/7 Discord setup help.",
    ],
  },
  "recoil-control": {
    heading: "Recoil control for every Hunt weapon",
    paragraphs: [
      "Recoil control keeps lever-actions, shotguns, and scoped rifles on target during chaotic compound fights. Per-weapon profiles and adjustable strength let you dial legit-looking spray or tighter tracking.",
      "Stack recoil control with aimbot or silent aim for consistent bayou duels, and keep stream-proof mode on if you create content. Included in every Zadeyo Hunt Showdown plan.",
      "Check system requirements and pricing on the buy page before purchase — Windows 10/11 and Steam supported.",
    ],
  },
  "silent-aim": {
    heading: "Silent aim for stealth long-range holds",
    paragraphs: [
      "Silent aim redirects shots toward hunters while your visible crosshair stays still — useful for long-range holds and lobbies where obvious snap aim draws attention.",
      "Configure FOV, target priority, and line-of-sight checks, then pair with recoil control for cleaner hits. Zadeyo delivers the full suite instantly after checkout.",
      "Watch the gameplay demo and read the beginners guide if you are new to Hunt Showdown cheats before you buy.",
    ],
  },
  "stream-proof": {
    heading: "Stream-proof overlays for creators",
    paragraphs: [
      "Stream-proof mode hides ESP, wallhack, and radar from OBS, Discord, and common capture tools so you can stream without showing overlays to viewers.",
      "Toggle before you go live and keep the full combat suite available on your monitor. Included with monthly and lifetime Zadeyo plans — no separate stream-only SKU required.",
      "See safety notes in our anti-cheat guide: all cheats carry ban risk, and stream-proof only hides overlays from capture — it is not a ban shield.",
    ],
  },
  "cloud-dma": {
    heading: "Cloud DMA with Windows security ON",
    paragraphs: [
      "Cloud DMA runs the Hunt Showdown cheat suite while HVCI, Core Isolation, TPM, and Secure Boot stay enabled — so you do not have to weaken modern Windows protections.",
      "You still get ESP, aimbot, radar, and stream-proof options, plus a step-by-step setup guide and Discord help after purchase. Plans start at $35/month or $150 lifetime.",
      "Follow the Cloud DMA explained article before first launch, then buy on the official Zadeyo product checkout for instant delivery.",
    ],
  },
};

export function getCheatSeoBody(slug: string) {
  return CHEAT_SEO_BODY[slug] ?? null;
}
