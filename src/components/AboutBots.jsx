import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Robot, TrendUp, ShieldCheck, ArrowClockwise, ChartPieSlice, CurrencyCircleDollar } from "phosphor-react";
import "./AboutBots.scss";

// Features grid data
const features = [
  { icon: <TrendUp size={32} weight="duotone" />, label: "Auto Buy/Sell" },
  { icon: <ArrowClockwise size={32} weight="duotone" />, label: "24/7 Automation" },
  { icon: <ShieldCheck size={32} weight="duotone" />, label: "Risk Management" },
  { icon: <ChartPieSlice size={32} weight="duotone" />, label: "Smart Algorithms" },
  { icon: <CurrencyCircleDollar size={32} weight="duotone" />, label: "Stop-Loss Support" },
  { icon: <Robot size={32} weight="duotone" />, label: "AI-Powered Insights" }
];

const AboutBots = () => {
  const textRef = useRef();
  const gridRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, filter: "blur(10px)", y: 40 },
      { opacity: 1, filter: "blur(0)", y: 0, duration: 1.1, ease: "power2.out" }
    );
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 32, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0)", duration: 1, stagger: 0.14, delay: 0.18, ease: "power3.out" }
    );
    // Image float/tilt on hover
    const img = imgRef.current;
    if (img) {
      let anim;
      const onMouseMove = (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        anim = gsap.to(img, {
          rotateY: x * 16,
          rotateX: -y * 16,
          scale: 1.045,
          duration: 0.4,
          overwrite: "auto"
        });
      };
      const onMouseLeave = () => {
        anim = gsap.to(img, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out"
        });
      };
      img.addEventListener("mousemove", onMouseMove);
      img.addEventListener("mouseleave", onMouseLeave);
      return () => {
        img.removeEventListener("mousemove", onMouseMove);
        img.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <section className="about-bots-section" id="about">
      <div className="about-bots-container glass">
        <div className="about-bots-left">
          {/* Use Spline or img as per your design */}
          <div className="bot-img-glow">
            <img
              ref={imgRef}
              src="/src/assets/ai-bot.png"
              alt="AI Forex Bot"
              className="bot-img"
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-bots-right">
          <div className="about-bots-text" ref={textRef}>
            <h2>
              Meet our <span className="accent">AI Bots</span>
            </h2>
            <p>
              Our AI-powered bots are trained on years of Forex market data to adapt, optimize, and execute trades with precision. Set your strategy, define your risk, and let Quantum FX do the heavy lifting — 24/7.
            </p>
          </div>
          <div className="about-bots-grid" ref={gridRef}>
            {features.map((f, i) => (
              <div className="about-bots-feature" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBots;