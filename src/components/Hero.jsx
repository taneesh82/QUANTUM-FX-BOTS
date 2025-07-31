import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import "./Hero.scss";

const NUM_ORBS = 8;

const Hero = () => {
  const headlineRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();
  const splineRef = useRef();
  const orbRefs = useRef([]);

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, delay: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 40, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, delay: 0.45, ease: "power2.out" }
    );
    gsap.fromTo(
      splineRef.current,
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.65, ease: "power2.out" }
    );
    // Animate orbs
    orbRefs.current.forEach((orb, i) => {
      gsap.to(orb, {
        y: -20 - Math.random() * 20,
        x: "+=" + (Math.random() * 40 - 20),
        scale: 0.85 + Math.random() * 0.3,
        duration: 3.5 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 1.2,
        ease: "power1.inOut"
      });
    });
  }, []);

  // Replace with your own Spline scene url
  const splineUrl = "https://prod.spline.design/Zdn1B3N2F5k5vVvD/scene.splinecode"; // placeholder demo bot

  return (
    <section className="hero-section">
      <div className="hero-bg-orbs">
        {[...Array(NUM_ORBS)].map((_, i) => (
          <div
            key={i}
            className={`glow-orb orb-${i}`}
            ref={el => (orbRefs.current[i] = el)}
            style={{
              left: `${7 + Math.random() * 85}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <div className="hero-content glass">
        <div className="hero-text">
          <h1 ref={headlineRef}>
            <span className="headline-glow">Quantum FX</span>
            <br />
            <span className="headline-secondary">AI-Powered Forex Bots</span>
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Trade Smarter. Sleep Better.
          </p>
          <div className="hero-cta" ref={ctaRef}>
            <a href="#pricing" className="btn-glow">Get Started</a>
            <a href="#bots" className="btn-glass">View Bots</a>
          </div>
        </div>
        <div className="hero-spline" ref={splineRef}>
          <Spline scene={splineUrl} />
        </div>
      </div>
    </section>
  );
};

export default Hero;