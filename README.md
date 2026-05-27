# InnoSoul Consulting – Design System

## Company Overview

**InnoSoul Consulting** is a Hamburg-based boutique consulting firm (GmbH in formation) founded by Magdalena Müller and Nicole Klingen. They specialize in identifying and securing national and European research and innovation grants for SMEs, startups, and research institutions — with a deep focus on **Life Science, MedTech, and Biotechnology**.

**Core differentiators:**
- Deep specialization in Life Science / MedTech / Biotech (not generalists)
- Combination of product management background + grant expertise
- Bilingual (DE/EN) — fit for German and European programs
- Personal, direct, solution-oriented — no consulting bullshit
- Success-based compensation model where program-compliant

**Target market:** Germany + Europe  
**Launch:** Freelance since May 2025, GmbH formation planned

**Programs covered:** KMU innovativ (BMBF), ZIM (BMWK), Eurostars, EIC Accelerator, EIC Pathfinder, Horizont Europa, Forschungszulage

---

## Sources Provided

| Source | Details |
|---|---|
| Brand Briefing | `uploads/InnoSoul_Website_Briefing (2).md` |
| Logo Preview | `uploads/preview.webp` (InnoSoul logo — Inno + Soul mark with teal/navy half-circle icon) |
| Color Preview | `uploads/WhatsApp Image 2026-04-24 at 14.20.19.jpeg` (Finalized color palette visual) |

No Figma file provided. No codebase provided. Design system is built from the brand briefing document and visual assets above.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Marketing Website** | Single-product website: innosoul.consulting — German-primary, responsive, Calendly integration |

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **Primary language:** German (DE). English used in EU program contexts.
- **Tone of Voice:** Direct, competent, empathetic, modern
  - Direct: No filler phrases. Clear, actionable statements.
  - Competent: Expertise without arrogance
  - Empathetic: Genuine interest in client success
  - Modern: Not stiff-consultant-speak, but professional
- **No corporate bullshit** — literally stated in briefing: "kein Consulting-Bullshit", "ohne Bullshit"

### Copy Style
- Headlines use **sentence case** or **impact splits** (e.g. "Innovationen finanzieren. Wirkung entfalten.")
- Short declarative statements. Periods used for emphasis, not just grammar.
- Numbers/credentials presented as trust signals (not boastful)
- CTAs are action-oriented and specific: "Erstgespräch vereinbaren", "Unsere Leistungen"
- Bio copy is **first-person, personal**: "Ich komme aus der Produktwelt…"
- No emoji in professional copy
- Bilingual capable — key CTAs and navigation can appear in EN

### Vocabulary / Key Terms (DE)
- Förderung / Fördermittel / Förderprogramme
- Antragstellung, Projektskizze, Vollantragsausarbeitung
- Konsortialaufbau, Verwendungsnachweise
- Life Science, MedTech, Biotech (English terms used even in DE context)
- Erstgespräch (first call/meeting — the core CTA)

---

## VISUAL FOUNDATIONS

### Color System
| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary dark | Deep Midnight Navy | `#1A2238` | Navigation, headlines, dark sections, logo |
| CTA / Highlight | Bioluminescent Teal | `#20C997` | Buttons, links, accents, icons, logo accent |
| Secondary accent | Electric Lavender | `#805AD5` | Badges, secondary icons, tags, secondary CTAs |
| Body text | Slate Grey | `#4A5568` | Body copy, sublines |
| Background | Soft Alabaster | `#F7FAFC` | Page background |
| Card background | Pure White | `#FFFFFF` | Card surfaces |
| **Excluded** | Champagne Gold | `#D4AF37` | **Explicitly excluded** — competes visually |

### Typography
- **Display / Serif:** Playfair Display (Google Fonts) — expertise, substance, editorial quality
  - Substituting for: Freight Display, Canela (not available on Google Fonts)
- **Body / Grotesk:** DM Sans (Google Fonts) — readability, modernity
  - Substituting for: Neue Montreal (not freely available)

### Backgrounds & Imagery
- Page background: Soft Alabaster (#F7FAFC) — clean, lab-like, calm
- Dark sections: Deep Midnight Navy (#1A2238) — hero, nav, footer
- **Imagery style:** Real lab situations, people at work (no stock clichés). Abstract scientific patterns / DNA/molecular structures as background textures. No generic business handshake photos.
- Scientific line-art textures (DNA helices, molecular grids) used as subtle overlays on dark sections

### Spacing & Layout
- Mobile-first responsive
- Clear section-based layout with generous whitespace
- Fixed navigation (sticky header)
- Grid: max-width ~1200px centered, sections padded 80–120px vertical

### Cards
- White background (#FFFFFF)
- Subtle shadow: `0 2px 16px rgba(26,34,56,0.08)`
- Border radius: 12px
- No border (shadow defines card boundary)
- Hover: slight elevation `0 8px 32px rgba(26,34,56,0.14)`, translateY(-2px)

### Buttons
- **Primary CTA:** Teal fill (#20C997), white text, rounded (border-radius: 8px), DM Sans semibold
  - Hover: slightly darker teal `#18b087`
- **Secondary:** Navy outline, navy text; or white fill on dark backgrounds
- **Ghost/Link:** Teal text, underline on hover

### Icons
- Thin-stroke line icons (not filled)
- Lucide Icons (CDN) — closest match to the clean scientific/professional aesthetic
- Teal (#20C997) for primary icons, Lavender (#805AD5) for secondary/badge icons

### Animations
- Subtle fade-in on scroll (opacity + translateY, short duration ~300ms)
- No bouncy or playful animations
- Button hover: smooth color transition (150ms ease)
- No aggressive page transitions

### Border Radius
- Cards: 12px
- Buttons: 8px
- Badges/Tags: 999px (fully rounded pill)
- Inputs: 8px

### Shadows
- Subtle: `0 2px 8px rgba(26,34,56,0.06)`
- Default card: `0 2px 16px rgba(26,34,56,0.08)`
- Elevated: `0 8px 32px rgba(26,34,56,0.14)`
- No colored shadows

### Logo
The InnoSoul logo features "Inno" on one line, "Soul" below, with a distinctive circular mark — the left half in Deep Midnight Navy, the right half in Bioluminescent Teal. Tagline: "Erfolgreiche Innovationen". The mark can be used standalone as a favicon/icon.

---

## ICONOGRAPHY

- **Icon system:** Lucide Icons (CDN-available: `https://unpkg.com/lucide@latest`)
- **Style:** Thin stroke (1.5–2px), no fill, clean and minimal
- **Primary color:** Bioluminescent Teal (#20C997)
- **Secondary color:** Electric Lavender (#805AD5) for tags/badges
- **No icon font built-in** to the brand; Lucide used as standard
- **No emoji** in professional/UI contexts
- **Scientific motifs** used decoratively: DNA helices, molecular structures, circuit lines — as SVG background textures, not standalone icons

### Logo Asset
- `assets/logo.webp` — Full InnoSoul logo (Inno+Soul wordmark + circular mark)

---

## File Index

```
README.md                         ← This file
SKILL.md                          ← Agent skill definition
colors_and_type.css               ← CSS variables: colors, type scale, spacing
assets/
  logo.webp                       ← InnoSoul full logo
  color_preview.jpg               ← Brand color palette reference image
preview/
  colors-primary.html             ← Primary color swatches
  colors-semantic.html            ← Semantic / utility color roles
  type-display.html               ← Display / serif type specimens
  type-body.html                  ← Body / grotesk type scale
  spacing-tokens.html             ← Spacing, radius, shadow tokens
  components-buttons.html         ← Button variants
  components-cards.html           ← Card components
  components-badges.html          ← Badges / tags / chips
  brand-logo.html                 ← Logo display
ui_kits/
  website/
    README.md                     ← Website UI kit notes
    index.html                    ← Interactive website prototype
    Header.jsx                    ← Navigation header
    Hero.jsx                      ← Hero section
    Services.jsx                  ← Services/Leistungen section
    Team.jsx                      ← Team/Über uns section
    Contact.jsx                   ← Contact/Kontakt section
    Footer.jsx                    ← Footer
```
#   i n n o s o u l  
 #   i n n o s o u l  
 