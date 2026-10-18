"use client";

import React, { useState } from "react";
import { X, Send, Copy, Check, Sparkles, Globe, Link2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectTitle?: string;
  currentUrl?: string;
}

export default function ProjectDrawer({
  isOpen,
  onClose,
  initialProjectTitle,
  currentUrl,
}: ProjectDrawerProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Medical");
  const [referencedProject, setReferencedProject] = useState<string>(initialProjectTitle || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://cherryworks.studio";
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const industries = [
    "Medical & Dental",
    "Shopify E-Commerce",
    "Construction & Solar",
    "Roofing & Trades",
    "Plumbing / Electrician",
    "Bakeries & Local",
    "Other / Custom",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-[#121216]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between sticky top-0 bg-[#121216]/95 z-10 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B001D] shadow-[0_0_12px_#A3163D]" />
              <div>
                <h3 className="text-lg font-bold text-[#F5F5F7]">
                  Start a Project
                </h3>
                <p className="text-xs text-[#71717A] font-mono-tech">
                  CHERRY WORKS × WEBVANTAGE
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1A1A20] text-[#A1A1AA] hover:text-white border border-white/[0.08] transition-colors"
              aria-label="Close project drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6 flex-1">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#7A0F2E]/30 border border-[#7A0F2E] flex items-center justify-center mx-auto text-[#FDA4AF]">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#F5F5F7]">
                  Inquiry Received
                </h4>
                <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                  Thank you! The Cherry Works engineering team and Webvantage partner leads will review your requirements and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-4 bg-[#7A0F2E] hover:bg-[#8B001D] text-white text-sm px-6 py-2.5 rounded-full font-medium"
                >
                  Return to Portfolio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Sales Rep Utility: Share Current Portfolio Link */}
                <div className="p-3.5 rounded-xl bg-[#1A1A20] border border-white/[0.08] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                    <Link2 className="w-4 h-4 text-[#FDA4AF] shrink-0" />
                    <span className="truncate">Share Pre-Filtered Portfolio:</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#7A0F2E]/30 hover:bg-[#7A0F2E]/50 text-[#FDA4AF] text-xs font-mono-tech border border-[#7A0F2E]/50 shrink-0 transition-colors"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Industry Selection */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A1A1AA] uppercase mb-2">
                    Select Your Industry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => setSelectedIndustry(ind)}
                        className={`text-xs px-3 py-1.5 rounded-xl transition-all ${
                          selectedIndustry === ind
                            ? "bg-[#7A0F2E] text-white font-semibold border border-[#A3163D] shadow-sm"
                            : "bg-[#141418] text-[#A1A1AA] border border-white/[0.08] hover:text-white"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reference Website Selector from 15 Flagships */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A1A1AA] uppercase mb-1.5">
                    Reference Website (Optional)
                  </label>
                  <select
                    value={referencedProject}
                    onChange={(e) => setReferencedProject(e.target.value)}
                    className="w-full bg-[#141418] border border-white/[0.08] focus:border-[#7A0F2E] text-xs sm:text-sm text-[#F5F5F7] rounded-xl px-3 py-2.5 focus:outline-none"
                  >
                    <option value="">-- Choose one of the 15 flagship sites as inspiration --</option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.indexNum} {p.title} ({p.niche})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A1A1AA] uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Marcus Vance / Elena Rostova"
                    className="w-full bg-[#141418] border border-white/[0.08] focus:border-[#7A0F2E] text-xs sm:text-sm text-[#F5F5F7] rounded-xl px-3 py-2.5 placeholder-[#71717A] focus:outline-none"
                  />
                </div>

                {/* Email / Phone */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A1A1AA] uppercase mb-1.5">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@clinic.com or +1 (555) 019-2834"
                    className="w-full bg-[#141418] border border-white/[0.08] focus:border-[#7A0F2E] text-xs sm:text-sm text-[#F5F5F7] rounded-xl px-3 py-2.5 placeholder-[#71717A] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A1A1AA] uppercase mb-1.5">
                    Project Scope & Timeline
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you need (e.g. Hostinger migration, redesign, booking integration)..."
                    className="w-full bg-[#141418] border border-white/[0.08] focus:border-[#7A0F2E] text-xs sm:text-sm text-[#F5F5F7] rounded-xl px-3 py-2.5 placeholder-[#71717A] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#7A0F2E] hover:bg-[#8B001D] text-white font-semibold text-sm rounded-xl py-3 shadow-[0_0_24px_rgba(122,15,46,0.4)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FDA4AF]" />
                  <span>Send Inquiry to Cherry Works & Webvantage</span>
                </button>
              </form>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-white/[0.08] bg-[#0D0D0F] text-center text-[11px] text-[#71717A] font-mono-tech">
            HOSTINGER ULTRA-FAST NEXT.JS DEPLOYMENTS
          </div>
        </div>
      </div>
    </div>
  );
}
