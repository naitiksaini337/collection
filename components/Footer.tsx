"use client";

import React from "react";
import { ArrowUp, Sparkles, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-black border-t border-white/[0.08] text-[#F5F5F7] px-6 sm:px-12 py-16 z-20"
      style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Upper Footer Row: Dual-Brand Strategic Collaboration Showcase */}
        <div className="flex flex-col gap-8 pb-10 border-b border-white/[0.08]">
          {/* Headline & Collaboration Overview */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-[#FDA4AF] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B001D] shadow-[0_0_8px_#FDA4AF] animate-pulse" />
                <span>Strategic Venture & Co-Production</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                CHERRY WORKS <span className="text-[#FDA4AF] font-light">×</span> WEBVANTAGE
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-sans font-light">
                Every project featured in this flagship collection is engineered, designed, and deployed by{" "}
                <span className="text-white font-medium">Cherry Works</span> in strategic partnership with sales partner{" "}
                <span className="text-white font-medium">Webvantage</span>.
              </p>
            </div>

            {/* Quick Connect & Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">


              <button
                type="button"
                onClick={() => {
                  document.getElementById("selector")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold font-sans text-white/90 hover:text-white border border-white/10 transition-all cursor-pointer active:scale-95"
              >
                <span>Explore 17 Sites</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FDA4AF]" />
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#7A0F2E] hover:bg-[#8B001D] text-xs sm:text-sm font-semibold font-sans text-white border border-[#FDA4AF]/40 shadow-[0_0_16px_rgba(122,15,46,0.5)] transition-all cursor-pointer active:scale-95"
                title="Back to Top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── Official Logos Collaboration Banner ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-white/[0.08] relative overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            {/* Ambient Lighting Gradients */}
            <div className="absolute -left-16 -top-16 w-56 h-56 bg-[#7A0F2E]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Partner 1: Cherry Works */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all group">
              <div className="h-16 sm:h-20 w-32 sm:w-36 shrink-0 flex items-center justify-center p-2 rounded-xl bg-black/60 border border-white/10 shadow-lg">
                <img
                  src="/logo/cherry-works-tight.png"
                  alt="Cherry Works Official Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left min-w-0">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#FDA4AF] font-semibold">
                  Creative Direction & Engineering
                </span>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Cherry Works
                </span>
                <p className="text-xs text-neutral-400 font-sans mt-0.5 line-clamp-2">
                  Interactive 3D web applications, boutique digital craftsmanship & design systems.
                </p>
              </div>
            </div>

            {/* Collaboration Emblem Bridge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center gap-2 py-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FDA4AF] animate-ping" />
                <span className="font-bold text-white text-sm">×</span>
                <span className="text-[10px] uppercase tracking-widest text-[#FDA4AF] font-semibold">
                  COLLAB
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider text-center">
                Strategic Alliance
              </span>
            </div>

            {/* Partner 2: Webvantage Digital */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all group">
              <div className="h-16 sm:h-20 w-36 sm:w-44 shrink-0 flex items-center justify-center p-2.5 px-3 rounded-xl bg-black/60 border border-white/10 shadow-lg">
                <img
                  src="/logo/webvantage-white-text.png"
                  alt="Webvantage Digital Official Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left min-w-0">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#38BDF8] font-semibold">
                  Commercial & Sales Partner
                </span>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Webvantage Digital
                </span>
                <p className="text-xs text-neutral-400 font-sans mt-0.5 line-clamp-2">
                  Growth architecture, high-ticket sales partnerships & enterprise client distribution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NDA & Representation Notice Banner */}
        <div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 sm:p-6 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FDA4AF] shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1.5 font-sans">
              <h3 className="text-xs uppercase font-mono-tech tracking-wider font-semibold text-white/90">
                Notice: Representation & NDA Compliance
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-light">
                All showcased web applications, live previews, and case study materials are presented strictly for
                demonstration and representation purposes. Certain client entities, domain handles, brand assets, and
                identifiable operational data have been modified or sanitized in accordance with Non-Disclosure Agreements
                (NDAs) and confidentiality covenants.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Footer Row: Status, Distribution & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#71717A] pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-tech text-white/80">
              16 Live Flagship Deployments Active
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-[#FDA4AF]" />
              Built by Cherry Works • Sales Partner Webvantage
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <p className="font-mono-tech text-[11px] text-neutral-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
