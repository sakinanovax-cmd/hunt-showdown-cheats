import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { THE_GAME } from "@/lib/constants";
import { ZADEYO_ASSETS } from "@/lib/assets";

export default function TheGame() {
  return (
    <section className="py-[var(--section-py)]">
      <div className="container-dnd">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={THE_GAME.eyebrow} heading={THE_GAME.heading} align="left" className="mb-8" />
            <div className="space-y-5">
              {THE_GAME.paragraphs.map((p, i) => (
                <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div className="card-surface relative aspect-[4/3] overflow-hidden">
            <Image
              src={ZADEYO_ASSETS.gameCover}
              alt="Hunt Showdown cheats — bayou bounty hunting game with ESP and aimbot overlay"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
