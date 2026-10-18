import React, { Suspense } from "react";
import PortfolioView from "@/components/PortfolioView";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0D0D0F] flex items-center justify-center text-center p-6">
          <div className="space-y-4">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#141418] border border-white/10 mx-auto shadow-2xl">
              <span className="w-3 h-3 rounded-full bg-[#8B001D] shadow-[0_0_16px_#A3163D] animate-ping" />
            </div>
            <div className="text-sm font-semibold text-[#F5F5F7]">
              Loading Cherry Works × Webvantage Portfolio...
            </div>
            <div className="text-xs text-[#71717A] font-mono-tech">
              HOSTINGER STATIC EXPORT ARCHITECTURE
            </div>
          </div>
        </div>
      }
    >
      <PortfolioView />
    </Suspense>
  );
}
