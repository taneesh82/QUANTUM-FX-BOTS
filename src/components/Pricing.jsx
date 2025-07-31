import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Cube, Lightning, Star, CurrencyCircleDollar, Coins, ShieldCheck } from "phosphor-react";
import "./Pricing.scss";

// 3D floating Glass Cube using Drei/Three.js for each card
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function GlassCube({ color = "#13f2fe", glow = "#c084fc" }) {
  return (
    <Canvas
      style={{ width: 62, height: 62, margin: "0 auto" }}
      camera={{ position: [0, 0, 3.5], fov: 52 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 5]} intensity={1.3} />
      <Environment preset="night" />
      <Float speed={2.4} rotationIntensity={2.3} floatIntensity={1.4}>
        <mesh>
          <boxGeometry args={[1.15, 1.15, 1.15]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.12}
            metalness={0.58}
            transmission={0.88}
            thickness={0.6}
            clearcoat={0.8}
            ior={1.4}
            iridescence={0.56}
            transparent
            opacity={0.89}
            emissive={glow}
            emissiveIntensity={0.14}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

const plans = [
  {
    name: "Starter Bot",
    price: "₹3,499",
    features: [
      "1 AI Forex Bot",
      "MT4/MT5 ready",
      "Basic support",
      "Lifetime license"
    ],
    icon: <Lightning size={28} weight="duotone" />,
    color: "#13f2fe",
    glow: "#13f2fe"
  },
  {
    name: "Pro Bot",
    price: "₹7,499",
    features: [
      "All Standard Bots",
      "Advanced strategies",
      "MT4/MT5/Binance",
      "Priority support"
    ],
    icon: <Star size={28} weight="duotone" />,
    color: "#c084fc",
    glow: "#c084fc"
  },
  {
    name: "Elite AI Bundle",
    price: "₹13,999",
    features: [
      "All Pro Bots",
      "Exclusive AI Bundles",
      "VIP support",
      "Early access to new bots"
    ],
    icon: <Cube size={28} weight="duotone" />,
    color: "#00e396",
    glow: "#00e396"
  }
];

export default function Pricing() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 72, scale: 0.93, filter: "blur(18px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0)",
          duration: 1.2,
          delay: 0.16 * i,
          ease: "power3.out"
        }
      );
    });
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">
        <span className="accent">Plans</span> & Pricing
      </h2>
      <div className="pricing-row">
        {plans.map((plan, i) => (
          <div
            className="pricing-card glass"
            key={plan.name}
            ref={el => (cardRefs.current[i] = el)}
            tabIndex={0}
            style={{
              "--plan-glow": plan.color,
              "--plan-glow-shadow": plan.glow
            }}
          >
            <div className="pricing-cube-3d">
              <GlassCube color={plan.color} glow={plan.glow} />
            </div>
            <div className="pricing-card-title">{plan.name}</div>
            <div className="pricing-card-price">{plan.price}</div>
            <ul className="pricing-features">
              {plan.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="pricing-pay-ctas">
              <button className="btn-pricing-glow">Purchase via UPI</button>
              <button className="btn-pricing-glass">Buy with Crypto</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}