import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.scss";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef();
  const progressBarRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    // Animate progress bar
    gsap.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        // Optional: Animate percentage text (if you add it)
      },
      onComplete: () => {
        // Animate out
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
        tl.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut"
        });
      }
    });

    // Logo glow pulse
    gsap.to(logoRef.current, {
      filter: "drop-shadow(0 0 24px #13f2fe) drop-shadow(0 0 80px #c084fc55)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut"
    });
  }, [onComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-center">
        <div className="preloader-logo" ref={logoRef}>
          <span>Quantum</span>
          <span className="fx-glow">FX</span>
        </div>
        <div className="preloader-progress-bar-bg">
          <div className="preloader-progress-bar" ref={progressBarRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;