import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TelegramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import "./Footer.scss";

// Generate random neon particle positions
function NeonParticles({ count = 60 }) {
  const positions = React.useMemo(() => {
    const pos = [];
    for (let i = 0; i < count * 3; i++) {
      pos.push((Math.random() - 0.5) * 20);
    }
    return new Float32Array(pos);
  }, [count]);
  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        color="#13f2fe"
        size={0.19}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.68}
      />
    </Points>
  );
}

export default function Footer() {
  const footerRef = useRef();
  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out"
    });
  }, []);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-bg-particles">
        <Canvas
          style={{
            width: "100vw",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 0,
            pointerEvents: "none"
          }}
          camera={{ position: [0, 0, 12], fov: 55 }}
          gl={{ alpha: true }}
        >
          <Float speed={2.7} rotationIntensity={1.6} floatIntensity={0.7}>
            <NeonParticles count={60} />
          </Float>
        </Canvas>
      </div>
      <div className="footer-content glass">
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#bots" className="footer-link">Bots</a>
          <a href="#contact" className="footer-link">Contact</a>
        </nav>
        <div className="footer-socials">
          <a
            href="https://t.me/quantumfx"
            target="_blank"
            rel="noopener"
            className="footer-social-glow"
            aria-label="Telegram"
          >
            <TelegramLogo size={28} weight="duotone" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            className="footer-social-glow"
            aria-label="Twitter"
          >
            <TwitterLogo size={28} weight="duotone" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener"
            className="footer-social-glow"
            aria-label="YouTube"
          >
            <YoutubeLogo size={28} weight="duotone" />
          </a>
        </div>
        <div className="footer-note">
          &copy; {new Date().getFullYear()} Quantum FX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}