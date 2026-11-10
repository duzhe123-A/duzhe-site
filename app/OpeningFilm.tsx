"use client";

import { useEffect, useRef } from "react";

export default function OpeningFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      // The poster and controls remain available when autoplay is blocked.
    });
  }, []);

  return (
    <figure className="hero-figure">
      <div className="photo-frame opening-film">
        <video
          ref={videoRef}
          controls
          muted
          playsInline
          preload="none"
          poster="/opening/forest-train.jpg"
          aria-label="开场短片：列车穿林"
        >
          <source src="/opening/forest-train.mp4" type="video/mp4" />
          <a href="/opening/forest-train.mp4">打开列车穿林短片</a>
        </video>
      </div>
      <figcaption><span>01 <i /> 列车穿林</span><span>OPENING SHOT</span></figcaption>
    </figure>
  );
}
