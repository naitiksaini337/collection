"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";

const PROJECT_SHOWCASE: HeroCarouselItem[] = [
  {
    id: "01",
    title: "Lumina\nCosmetic Dental",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    credit: "CHERRY WORKS ARCHITECTURE",
    meta: ["DENTAL", "BEVERLY HILLS", "+340% LEADS"],
    accent: "#0ea5e9",
    liveUrl: "https://lumina-dental.cherryworks-preview.com",
    category: "medical",
  },
  {
    id: "07",
    title: "Voltix\nNootropic Energy",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=1200&q=80",
    credit: "SHOPIFY PLUS DROP STORE",
    meta: ["ENERGY DRINKS", "LOS ANGELES", "4.8% CVR"],
    accent: "#f59e0b",
    liveUrl: "https://voltix-energy.cherryworks-preview.com",
    category: "shopify",
  },
  {
    id: "10",
    title: "Aurelia\nFine Diamonds",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    credit: "LUXURY 3D CONFIGURATOR",
    meta: ["JEWELRY", "NEW YORK", "$1,850 AOV"],
    accent: "#eab308",
    liveUrl: "https://aurelia-atelier.cherryworks-preview.com",
    category: "shopify",
  },
  {
    id: "17",
    title: "Vanguard\nApex Developments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    credit: "COMMERCIAL CONSTRUCTION",
    meta: ["CONSTRUCTION", "DALLAS, TX", "$48M PIPELINE"],
    accent: "#f97316",
    liveUrl: "https://vanguard-developments.cherryworks-preview.com",
    category: "construction",
  },
  {
    id: "20",
    title: "HelioGrid\nCommercial Solar",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    credit: "CLEAN ENERGY MICROGRIDS",
    meta: ["SOLAR", "PHOENIX, AZ", "5.2X INQUIRIES"],
    accent: "#10b981",
    liveUrl: "https://heliogrid-solar.cherryworks-preview.com",
    category: "construction",
  },
  {
    id: "23",
    title: "ShieldGuard\nSlate & Metal Roofing",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
    credit: "HOME SERVICES / TRADES",
    meta: ["ROOFING", "KANSAS CITY", "3.4X STORM LEADS"],
    accent: "#f43f5e",
    liveUrl: "https://shieldguard-roofing.cherryworks-preview.com",
    category: "trades",
  },
  {
    id: "26",
    title: "AquaFlow\nHydro-Jetting & Sewer",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    credit: "MASTER PLUMBING DISPATCH",
    meta: ["PLUMBING", "ATLANTA, GA", "12-MIN DISPATCH"],
    accent: "#0284c7",
    liveUrl: "https://aquaflow-plumbing.cherryworks-preview.com",
    category: "trades",
  },
  {
    id: "32",
    title: "Maison Dorée\nCroissanterie",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    credit: "ARTISAN BAKEHOUSE",
    meta: ["BAKERY", "MONTREAL", "MORNING SELLOUTS"],
    accent: "#d97706",
    liveUrl: "https://maisondoree-bakery.cherryworks-preview.com",
    category: "local",
  },
];

export default function HeroCarouselDemo() {
  return (
    <div className="w-full h-[650px] p-4 bg-[#0D0D0F]">
      <HeroCarousel
        items={PROJECT_SHOWCASE}
        defaultIndex={2}
        brand="CHERRY WORKS × WEBVANTAGE"
        className="h-full"
      />
    </div>
  );
}
