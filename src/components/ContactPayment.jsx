import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Coins, BitcoinLogo, EthereumLogo, TelegramLogo } from "phosphor-react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import "./ContactPayment.scss";

function FloatingGlassOrb() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: "50%",
        left: "70%",
        width: 220,
        height: 220,
        zIndex: 0,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 5]} intensity={1.5} />
      <Environment preset="night" />
      <Float speed={2} rotationIntensity={1.7} floatIntensity={1.5}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            color="#13f2fe"
            roughness={0.09}
            metalness={0.7}
            transmission={0.92}
            thickness={0.65}
            clearcoat={0.9}
            ior={1.52}
            transparent
            opacity={0.84}
            emissive="#c084fc"
            emissiveIntensity={0.13}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

export default function ContactPayment() {
  const formRef = useRef();
  const socialsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -60, filter: "blur(14px)" },
      { opacity: 1, x: 0, filter: "blur(0)", duration: 1.2, ease: "power2.out" }
    );
    gsap.fromTo(
      socialsRef.current,
      { opacity: 0, y: 52, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0)", duration: 1.2, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="contact-payment-section" id="contact">
      <FloatingGlassOrb />
      <h2 className="contact-title"><span className="accent">Contact</span> & Payment</h2>
      <div className="contact-payment-container glass">
        <form className="contact-form" ref={formRef} autoComplete="off">
          <label>
            Name
            <input type="text" placeholder="Your Name" autoComplete="off" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@email.com" autoComplete="off" required />
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="How can we help you?" required />
          </label>
          <button type="submit" className="btn-contact-glow">Send Message</button>
        </form>
        <div className="payment-options">
          <div className="payment-block upi-block">
            <h3>UPI QR</h3>
            <div className="upi-qr-glass">
              <img
                src="/src/assets/upi-qr.png"
                alt="UPI QR"
                className="upi-qr-img"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
          <div className="payment-block crypto-block">
            <h3>Crypto Payment</h3>
            <div className="crypto-wallets">
              <div className="crypto-wallet">
                <BitcoinLogo size={32} color="#f7931a" weight="duotone" className="crypto-icon" />
                <span className="crypto-label">BTC</span>
                <span className="crypto-address">bc1q6je5ckrcvrr330hpcr6cjxcna9hn8cu2vvgyw8</span>
              </div>
              <div className="crypto-wallet">
                <EthereumLogo size={32} color="#627eea" weight="duotone" className="crypto-icon" />
                <span className="crypto-label">ETH</span>
                <span className="crypto-address">0x66613185B54ddF4906369C688D6025560E244adA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-socials" ref={socialsRef}>
        <a href="https://t.me/quantumfx" target="_blank" rel="noopener" className="social-glow">
          <TelegramLogo size={32} weight="duotone" />
        </a>
        {/* Add more socials as needed */}
      </div>
    </section>
  );
}