"use client";

import { useEffect, useRef, useState } from "react";

function playOpening(video: HTMLVideoElement) {
  if (!video.getAttribute("src")) {
    video.src = window.matchMedia("(max-width: 680px)").matches
      ? "/opening/forest-train-mobile.mp4"
      : "/opening/forest-train.mp4";
  }
  void video.play().catch(() => {});
}

export default function OpeningFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playOpening(video);
    }
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      playOpening(video);
    } else {
      video.pause();
    }
  }

  return (
    <div className="opening-film">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        poster="/opening/forest-train.jpg"
        aria-hidden="true"
        onPlay={() => { setPlaying(true); setFinished(false); }}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setFinished(true); }}
      />
      <button className="opening-toggle" type="button" onClick={togglePlayback}>
        <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
          {playing ? <path d="M6 4h3v12H6zm5 0h3v12h-3z" /> : <path d="m7 4 9 6-9 6z" />}
        </svg>
        {playing ? "暂停开场" : finished ? "重播开场" : "播放开场"}
      </button>
    </div>
  );
}
