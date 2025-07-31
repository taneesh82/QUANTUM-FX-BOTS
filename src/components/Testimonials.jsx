import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Futuristic3DBackdrop from "./Futuristic3DBackdrop";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Amit S.",
    review: "Quantum FX bot turned my nights stress-free. +32% ROI in 4 months!",
    img: "/src/assets/user1.png",
    stats: "+32%",
    chart: "/src/assets/chart1.png"
  },
  {
    name: "Elena Z.",
    review: "Best AI bot for risk-managed trading. Super smooth automation.",
    img: "/src/assets/user2.png",
    stats: "+21%",
    chart: "/src/assets/chart2.png"
  },
  {
    name: "Chris B.",
    review: "I doubled my account safely. The dashboard is beautiful too.",
    img: "/src/assets/user3.png",
    stats: "+100%",
    chart: "/src/assets/chart3.png"
  }
];

const statRefs = [];

export default function Testimonials() {
  const cardsRef = useRef([]);
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 64, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          duration: 1.2,
          delay: 0.2 * i,
          ease: "power3.out"
        }
      );
    });
    // GSAP animated stats counter
    statRefs.forEach((ref, i) => {
      if (ref) {
        const value = parseInt(testimonials[i].stats.replace("%", ""));
        gsap.fromTo(
          ref,
          { innerText: 0 },
          {
            innerText: value,
            duration: 1.4,
            delay: 0.4 + 0.2 * i,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              ref.innerText = Math.round(ref.innerText) + "%";
            }
          }
        );
      }
    });
  }, []);
  return (
    <section className="testimonials-section" id="testimonials">
      <Futuristic3DBackdrop />
      <h2 className="testimonials-title">
        <span className="accent">Real Traders.</span> Real Results.
      </h2>
      <div className="testimonials-row">
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card glass"
            key={t.name}
            ref={el => (cardsRef.current[i] = el)}
          >
            <div className="testimonial-user">
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <span className="testimonial-name">{t.name}</span>
            </div>
            <div className="testimonial-review">{t.review}</div>
            <div className="testimonial-chart-block">
              {/* 3D floating effect and animated counter */}
              <div className="testimonial-stat" ref={el => (statRefs[i] = el)}>
                {t.stats}
              </div>
              <div className="testimonial-chart-frame">
                <img src={t.chart} alt="Performance Chart" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}