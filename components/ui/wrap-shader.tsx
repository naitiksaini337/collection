"use client";

import React, { useState, useEffect } from "react";
import { Warp } from "@paper-design/shaders-react";

export interface WarpShaderProps {
  colors?: string[];
  className?: string;
  speed?: number;
  proportion?: number;
  softness?: number;
  distortion?: number;
  swirl?: number;
  swirlIterations?: number;
  shapeScale?: number;
  scale?: number;
  shape?: "checks" | "stripes" | "edge";
  style?: React.CSSProperties;
}

export function WarpShader({
  colors = ["hsl(200, 100%, 20%)", "hsl(160, 100%, 75%)", "hsl(180, 90%, 30%)", "hsl(170, 100%, 80%)"],
  className,
  speed = 0.35,
  proportion = 0.55,
  softness = 2,
  distortion = 0.16,
  swirl = 0.6,
  swirlIterations,
  shapeScale = 0.08,
  scale = 1.15,
  shape = "checks",
  style,
}: WarpShaderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile, { passive: true });

      const el = containerRef.current;
      if (el && typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            if (entry) setIsInView(entry.isIntersecting);
          },
          { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => {
          observer.disconnect();
          window.removeEventListener("resize", checkMobile);
        };
      }

      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const primaryFallback = colors[0] || "#7A0F2E";

  if (!mounted || !isInView) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 50% 50%, ${primaryFallback}25 0%, #000000 100%)`,
          ...style,
        }}
      />
    );
  }

  // Optimize shader iterations for mobile devices (3 on mobile vs 6 on desktop) to ensure 60fps & low battery drain
  const effectiveIterations = swirlIterations ?? (isMobile ? 3 : 6);
  const effectiveSpeed = isMobile ? speed * 0.8 : speed;

  return (
    <div ref={containerRef} className="w-full h-full">
      <Warp
        style={{ height: "100%", width: "100%", willChange: "transform", ...style }}
        proportion={proportion}
        softness={softness}
        distortion={distortion}
        swirl={swirl}
        swirlIterations={effectiveIterations}
        shape={shape}
        shapeScale={shapeScale}
        scale={scale}
        rotation={0}
        speed={effectiveSpeed}
        colors={colors}
        className={className}
      />
    </div>
  );
}

export default function WarpShaderHero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(200, 100%, 20%)", "hsl(160, 100%, 75%)", "hsl(180, 90%, 30%)", "hsl(170, 100%, 80%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance">
            Elegant Shader Backgrounds
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Beautiful, performant shader effects that enhance your content without overwhelming it. Perfect for hero
            sections, landing pages, and modern web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white rounded-full text-gray-800 font-medium hover:scale-105 transition-transform duration-300">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
