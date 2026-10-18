"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, Layers } from "lucide-react";

interface NavbarProps {
  onOpenDrawer: (projectTitle?: string) => void;
  projectCount?: number;
}

export default function Navbar({ onOpenDrawer, projectCount = 36 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D0F]/85 backdrop-blur-xl border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Cherry Works Home"
          >
            {/* Burgundy Glow Dot Icon */}
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-[#141418] border border-white/10 shadow-inner group-hover:border-[#7A0F2E]/80 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B001D] shadow-[0_0_12px_#A3163D] animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                CHERRY WORKS
              </span>
            </div>
          </Link>

          {/* Co-Brand Partner Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full font-medium">
            <span className="text-[#FDA4AF]">×</span>
            <span>Webvantage Partner</span>
          </div>
        </div>

        {/* Center / Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a
            href="#selector"
            className="text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors flex items-center gap-1.5"
          >
            <span>Project Selector</span>
            <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded-md bg-[#7A0F2E]/30 text-[#FDA4AF] border border-[#7A0F2E]/50 font-semibold">
              {projectCount} Flagships
            </span>
          </a>
          <button
            onClick={() => onOpenDrawer()}
            className="text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors cursor-pointer"
          >
            Studio Collaboration
          </button>
          <button
            onClick={() => onOpenDrawer()}
            className="text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors cursor-pointer"
          >
            Hostinger Speed
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Filter Jump for Mobile/Tablet */}
          <a
            href="#selector"
            className="lg:hidden text-xs text-[#A1A1AA] hover:text-white bg-[#141418] border border-white/[0.08] px-3 py-1.5 rounded-full font-mono-tech"
          >
            {projectCount} Sites
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={() => onOpenDrawer()}
            type="button"
            className="group relative inline-flex items-center gap-2 bg-[#7A0F2E] hover:bg-[#8B001D] active:bg-[#A3163D] text-[#F5F5F7] border border-white/10 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_0_24px_rgba(122,15,46,0.4)] active:scale-95 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FDA4AF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#141418] border border-white/[0.08] text-[#A1A1AA] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0D0D0F]/95 backdrop-blur-2xl px-4 py-4 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-xs text-[#71717A] uppercase font-mono-tech tracking-wider">
              Navigation
            </span>
            <span className="text-xs text-[#FDA4AF] bg-[#7A0F2E]/20 border border-[#7A0F2E]/40 px-2 py-0.5 rounded-full font-mono-tech">
              15 Hostinger Flagships
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a
              href="#selector"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#141418] border border-white/5 text-[#F5F5F7] flex items-center justify-between"
            >
              <span>Project Selector</span>
              <span className="text-xs text-[#FDA4AF] font-mono-tech">{projectCount}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDrawer();
              }}
              className="p-2.5 rounded-xl bg-[#141418] border border-white/5 text-[#F5F5F7] text-left"
            >
              The Creators
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDrawer();
              }}
              className="p-2.5 rounded-xl bg-[#141418] border border-white/5 text-[#F5F5F7] text-left"
            >
              Webvantage Partner
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDrawer();
              }}
              className="p-2.5 rounded-xl bg-[#7A0F2E]/30 border border-[#7A0F2E]/60 text-[#FDA4AF] text-left font-medium"
            >
              Start Build →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
