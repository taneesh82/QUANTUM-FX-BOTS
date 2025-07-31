import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CurrencyCircleDollar, Lightning, ShieldCheck, Robot, Monitor, Star, WindowsLogo, BinanceLogo } from "phosphor-react";
import "./BotsShowcase.scss";

gsap.registerPlugin(ScrollTrigger);

const bots = [
  {
    name: "Quantum Pulse",
    strategy: "Scalping",
    risk: "Low",
    platforms: ["MT4", "MT5"],
    icon: <Lightning size={28} weight="duotone" />,
    cta: "Buy Now"
  },
  {
    name: "AI Swinger",
    strategy: "Swing Trading",
    risk: "Medium",
    platforms: ["MT4", "MT5", "Binance"],
    icon: <Robot size={28} weight="duotone" />,
    cta: "View Details"
  },
  {
    name: "Stealth Guardian",
    strategy: "Hedging",
    risk: "Low",
    platforms: ["MT5"],
    icon: <ShieldCheck size={28} weight="duotone" />,
    cta: "Buy Now"
  },
  {
    name: "Grid Alpha",
    strategy: "Grid",
    risk: "Medium",
    platforms: ["MT4", "MT5"],
    icon: <Monitor size={28} weight="duotone" />,
    cta: "View Details"
  },
  {
    name: "Spike Hunter",
    strategy: "Breakout",
    risk: "High",
    platforms: ["MT5", "Binance"],
    icon: <Star size={28} weight="duotone" />,
    cta: "Buy Now"
  },
  {
    name: "Matrix AI",
    strategy: "Multi-Strategy",
    risk: "Dynamic",
    platforms: ["MT4", "MT5", "Binance"],
    icon: <CurrencyCircleDollar size={28} weight="duotone" />,
    cta: "View Details"
  }
];

const platformIcons = {
  MT4: <WindowsLogo size={22} weight="duotone" title="MT4" />,
  MT5: <WindowsLogo size={22} weight="fill" title="MT5" />,
  Binance: <BinanceLogo size={22} weight="duotone" title="Binance" />
};

const BotsShowcase = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate in cards on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.93, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0)",
          duration: 1.1,
          delay: 0.17 * i,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <section className="bots-showcase-section" id="bots">
      <h2 className="bots-showcase-title">
        <span className="accent">Our Bots</span> Preview
      </h2>
      <div className="bots-horizontal-scroll">
        <div className="bots-card-row">
          {bots.map((bot, i) => (
            <div
              className="bot-card glass"
              key={bot.name}
              ref={el => (cardsRef.current[i] = el)}
              tabIndex={0}
            >
              <div className="bot-card-icon">{bot.icon}</div>
              <div className="bot-card-title">{bot.name}</div>
              <div className="bot-card-strategy">
                <span>{bot.strategy}</span>
                <span className={`risk risk-${bot.risk.toLowerCase()}`}>{bot.risk}</span>
              </div>
              <div className="bot-card-platforms">
                {bot.platforms.map((p, idx) => (
                  <span key={p} className="bot-platform-icon">{platformIcons[p]}</span>
                ))}
              </div>
              <button className="bot-card-cta">{bot.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotsShowcase;