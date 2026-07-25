"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface ClickableVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  title: string;
  description?: string;
}

export default function ClickableVideoPlayer({
  videoSrc,
  posterSrc,
  posterAlt,
  title,
  description,
}: ClickableVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (!video) return;
      video.load();
      video.play().catch(() => {
        /* user can still use native controls */
      });
    });
  };

  return (
    <figure className="clickable-video-player pricing-glow overflow-hidden rounded-2xl border border-[var(--color-border)]">
      <div className="relative aspect-video w-full bg-black">
        {!isPlaying ? (
          <>
            <Image
              src={posterSrc}
              alt={posterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={false}
            />
            <button
              type="button"
              onClick={handlePlay}
              className="clickable-video-play absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(6,4,9,0.45)] transition-colors hover:bg-[rgba(6,4,9,0.55)]"
              aria-label={`Play video: ${title}`}
            >
              <span className="clickable-video-play-icon flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-purple-light)] bg-[rgba(168,85,247,0.25)] shadow-[0_0_32px_rgba(168,85,247,0.4)]">
                <Play size={28} className="ml-1 text-[var(--color-text)]" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="font-mono-label text-[var(--color-purple-light)]">Click to play cheat demo</span>
            </button>
          </>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={posterSrc}
            title={title}
          >
            <source src={videoSrc} type="video/mp4" />
            <track kind="captions" />
            Your browser does not support HTML5 video.{" "}
            <a href={videoSrc} className="text-[var(--color-purple-light)] underline">
              Download the Hunt Showdown cheat demo video
            </a>
          </video>
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--color-purple)]/20" />
      </div>
      <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-center">
        <p className="font-mono-label text-[var(--color-purple-light)]">{title}</p>
        {description && (
          <p className="prose-body mt-1 text-sm">{description}</p>
        )}
        <a
          href={videoSrc}
          className="mt-2 inline-block text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
        >
          Direct video link (MP4)
        </a>
      </figcaption>
    </figure>
  );
}
