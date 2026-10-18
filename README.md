# Cherry Works × Webvantage Agency Portfolio

> **Production-Ready Next.js 14+ Portfolio** showcasing **36+ live production client websites** across 13 specialized niches, engineered by **Cherry Works** (principal engineering & UI/UX creators) in strategic partnership with **Webvantage Agency** (sales & client growth partner).

---

## 🚀 Live Features
- **36 Fully Populated Production Websites**:
  - **Medical & Dental (6 Sites)**: Cosmetic Dental Clinics, Clear Aligner Orthodontics, Pediatric Dental, 3D CBCT & MRI Radiology, Surgical Implants, Molecular Diagnostics.
  - **Shopify E-Commerce (10 Sites)**: Energy Drinks, Luxury & Custom Jewelry, Technical Darkwear/Streetwear, Single-Cultivar & Cold Brew Coffee.
  - **Construction & Solar (6 Sites)**: Commercial Developers, Luxury Residential Builders, Industrial Engineering, Megawatt Commercial Solar, Battery Microgrids, Residential Solar.
  - **Home Services & Trades (9 Sites)**: Architectural Slate & Metal Roofing, Storm Restoration, Emergency Hydro-Jetting Plumbing, Master Plumbers, Commercial Mechanical, EV Chargers & High-Voltage Electricians, Smart Home Automation.
  - **Bakeries & Local (5 Sites)**: 72-Hour Sourdough & Croissanterie, Heritage Grain Bakeshop, Couture Patisserie, Botanical Atelier, Omakase & Cocktail Lounge.
- **Minimalist Dark Mode Burgundy Design System**:
  - Jet Obsidian Canvas (`#0D0D0F`)
  - Deep Charcoal Bento Cards (`#141418`) with 20px corners (`rounded-2xl`) and hairline borders (`border-white/[0.08]`)
  - Deep Burgundy Cherry Red (`#7A0F2E`, `#8B001D`, `#A3163D`)
  - Studio High-Legibility Typography: `Plus Jakarta Sans`, `Inter`, `JetBrains Mono`
  - Website signature color glow (`--project-glow`) and 3 native palette dots per card
- **Mobile-First Category Engine**:
  - Sticky desktop bar + floating bottom thumb-accessible glass bar
  - 6 macro category pills + 13 exact sub-niche pills
  - Real-time search by brand or sector
  - Mobile column toggle (1-Column cinematic view vs 2-Column compact grid)
  - URL parameter sync (`?niche=medical`, `?niche=trades`, etc.)
- **Slide-Over "Start a Project" Drawer**:
  - Industry selection, 36-project reference dropdown, contact inputs, and 1-click **"Copy Filtered Portfolio Link"** for sales reps.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with custom dark mode burgundy design tokens
- **Animations**: `framer-motion` (smooth `layout` transitions for filtering and responsive card states)
- **Icons**: `lucide-react`
- **Fonts**: `next/font/google` (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`)
- **Hostinger Ready**: `output: 'export'` with `images: { unoptimized: true }`

---

## 📦 How to Deploy to Hostinger

### Option A: 1-Click File Manager Upload (Easiest)
1. Run the static export build locally:
   ```bash
   npm run build
   ```
2. This generates the production static export inside the `out/` folder.
3. Open your **Hostinger hPanel** -> **File Manager** -> `public_html`.
4. Upload all files and folders from the local `out/` directory directly into `public_html/`.
5. Your portfolio is immediately live with sub-second LCP response!

### Option B: Hostinger Git / VPS Deployment
1. Connect your GitHub repository to your Hostinger VPS or Git deployment hook.
2. Build command:
   ```bash
   npm install && npm run build
   ```
3. Set root directory to `out`.

---

## 💻 Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open in browser
http://localhost:3000
```
