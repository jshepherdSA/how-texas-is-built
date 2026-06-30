'use client';

import { useEffect, useRef, useState } from 'react';

/* Hero background video. It loops, but instead of a hard content cut at the loop
   boundary we fade the whole background through navy: a navy overlay ramps up in
   the final moments of the clip and ramps back down right after it restarts.

   The window is detected from the video's own currentTime (timeupdate). `armed`
   ensures we only fade on a genuine loop — not on the very first play, where
   currentTime also starts inside the "near start" window. */
const FADE_WINDOW = 0.45; // seconds before the end / after the start to show navy

export default function HeroVideo() {
  const ref = useRef(null);
  const armedRef = useRef(false);
  const [navy, setNavy] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onTime = () => {
      const d = v.duration;
      if (!d || Number.isNaN(d)) return;
      const atEnd = d - v.currentTime <= FADE_WINDOW;
      const atStart = v.currentTime <= FADE_WINDOW;
      if (atEnd) {
        armedRef.current = true; // we're approaching a loop
        setNavy(true);
      } else if (armedRef.current && atStart) {
        setNavy(true); // just looped — hold navy while we fade back in
      } else {
        setNavy(false);
        if (v.currentTime > FADE_WINDOW) armedRef.current = false;
      }
    };
    v.addEventListener('timeupdate', onTime);
    return () => v.removeEventListener('timeupdate', onTime);
  }, []);

  return (
    <>
      <video
        ref={ref}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className={`hero-video-navy${navy ? ' is-on' : ''}`} aria-hidden="true" />
    </>
  );
}
