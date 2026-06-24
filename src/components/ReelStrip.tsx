"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { REEL } from "@/lib/data";

export default function ReelStrip() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="reel">
      <button
        type="button"
        className="reel-card"
        onClick={() => setOpen(true)}
        aria-label={`Play 2025 reel — ${REEL.duration}`}
      >
        <Image src={REEL.thumb} alt="" fill sizes="(max-width: 860px) 100vw, 1400px" />
        <span className="lbl">2025 Reel · {REEL.duration}</span>
        <span className="play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="2025 reel"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(20,17,13,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(1100px, 100%)",
              aspectRatio: "16 / 9",
              background: "#000",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drop a real <video> or embed here when the reel is ready. */}
            <iframe
              title="2025 Reel"
              src="https://player.vimeo.com/video/76979871"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
