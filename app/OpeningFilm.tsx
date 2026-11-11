"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function playTrain(video: HTMLVideoElement) {
  if (!video.getAttribute("src")) {
    video.src = window.matchMedia("(max-width: 700px)").matches
      ? "/opening/forest-train-mobile.mp4"
      : "/opening/forest-train.mp4";
  }
  void video.play().catch(() => {});
}

export default function OpeningFilm() {
  const openingRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [playback, setPlayback] = useState<"ready" | "playing" | "finished">("ready");

  useEffect(() => {
    const opening = openingRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    const controls = controlsRef.current;
    const caption = captionRef.current;
    if (!opening || !stage || !video || !controls || !caption) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 700px)");
    let animationFrame = 0;
    let lastProgress = -1;
    let lastMobile = false;

    function paint() {
      animationFrame = 0;
      if (!opening || !stage || !controls || !caption) return;
      const travel = opening.offsetHeight - stage.offsetHeight;
      const progress = travel > 0 && !reduceMotion.matches
        ? clamp(-opening.getBoundingClientRect().top / travel)
        : 0;
      const mobile = smallScreen.matches;
      if (lastProgress === progress && lastMobile === mobile) return;
      lastProgress = progress;
      lastMobile = mobile;

      const move = clamp((progress - 0.04) / 0.87);
      const frame = move * move * (3 - 2 * move);
      const title = 1 - clamp((progress - 0.03) / 0.32);
      const next = clamp((progress - 0.56) / 0.29);
      const style = stage.style;
      style.setProperty("--left", frame * (mobile ? 8 : 35) + "%");
      style.setProperty("--right", frame * (mobile ? 8 : 6.5) + "%");
      style.setProperty("--top", frame * (mobile ? 20 : 15) + "%");
      style.setProperty("--bottom", frame * (mobile ? 38 : 30) + "%");
      style.setProperty("--slant", frame * 8 + "%");
      style.setProperty("--border", frame * 6 + "px");
      style.setProperty("--shade", String(Math.max(0, 1 - move * 1.7)));
      style.setProperty("--title", String(title));
      style.setProperty("--title-y", -28 * (1 - title) + "px");
      style.setProperty("--paper-copy", String(next));
      style.setProperty("--paper-y", 24 * (1 - next) + "px");
      controls.inert = title < 0.3;
      caption.inert = next <= 0.8;
    }

    function requestPaint() {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(paint);
    }

    function updateMotionPreference() {
      opening?.classList.toggle("motion-ready", !reduceMotion.matches);
      setMotionEnabled(!reduceMotion.matches);
      if (reduceMotion.matches) video?.pause();
      requestPaint();
    }

    setCanPlay(true);
    updateMotionPreference();
    if (!reduceMotion.matches && opening.getBoundingClientRect().bottom > 0) playTrain(video);
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    reduceMotion.addEventListener("change", updateMotionPreference);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reduceMotion.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) playTrain(video);
    else video.pause();
  }

  return (
    <section ref={openingRef} className="opening" aria-labelledby="main-title">
      <div ref={stageRef} className="stage">
        <div className="shot" aria-hidden="true">
          <div className="shot-inner">
            <video
              ref={videoRef}
              id="train"
              className={playback === "finished" ? "show-poster" : undefined}
              muted
              playsInline
              preload="none"
              poster="/opening/forest-train.jpg"
              tabIndex={-1}
              onPlaying={() => setPlayback("playing")}
              onPause={(event) => setPlayback(event.currentTarget.ended ? "finished" : "ready")}
              onEnded={() => setPlayback("finished")}
            />
          </div>
        </div>
        <div className="shade" aria-hidden="true" />
        <div className="title-block">
          <p className="eyebrow"><span aria-hidden="true" /> 杜喆 <span className="separator">/</span> 陕西 · 西安</p>
          <h1 id="main-title"><span>在轨道</span><span>与镜头之间<span className="red">。</span></span></h1>
          <p className="lede">学铁道检修，也用剪辑记录日常。</p>
        </div>
        <div ref={controlsRef} className="opening-controls">
          <a className="scroll-cue" href={motionEnabled ? "#frame" : "#film"}><span className="down-arrow" aria-hidden="true">↓</span> 向下滚动</a>
          <button className="play-toggle" type="button" hidden={!canPlay} aria-controls="train" onClick={togglePlayback}>
            {playback === "playing" ? "暂停开场" : playback === "finished" ? "重播开场" : "播放开场"}
          </button>
        </div>
        <div ref={captionRef} className="frame-caption" inert>
          <span className="caption-label">列车穿林</span>
          <p>下一幕<span className="red">.</span></p>
          <a href="#film">认识杜喆 <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <span id="frame" className="frame-stop" aria-hidden="true" />
    </section>
  );
}
