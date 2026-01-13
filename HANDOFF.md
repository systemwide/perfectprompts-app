# PerfectPrompts.ai - Project Handoff

## NEXT SESSION: START HERE

### Immediate Task
Convert the 6 prompt pack markdown files to deliverable formats:
- **PDF** - Nicely formatted with branding
- **Plain text (.txt)** - For easy copy-paste

Files to convert (in `/prompts/`):
1. `marketing-prompts.md` (35KB)
2. `content-writing-prompts.md` (42KB)
3. `coding-prompts.md` (48KB)
4. `business-prompts.md` (18KB)
5. `creative-prompts.md` (15KB)
6. `productivity-prompts.md` (14KB)

Also create: **"5 Free Prompts" PDF** for email signup lead magnet

### Then Complete These Steps

1. **Kit Automation:** Set up automation to send free prompts PDF when someone subscribes to form ID `8968372`
2. **Kit Commerce:** Create 7 products ($7 each × 6 packs + $29 bundle)
3. **Code Update:** Update product URLs in `/app/page.tsx` once Kit products are created
4. **Hostinger Deployment:**
   - Delete WordPress site on perfectprompts.ai
   - Add Node.js Web App from GitHub (`systemwide/perfectprompts-app`, branch: `main`)
   - Set environment variables:
     ```
     CONVERTKIT_API_KEY=kit_342c1e17353a083ce1a0a5c2c855bce2
     CONVERTKIT_FORM_ID=8968372
     ```
   - Connect perfectprompts.ai domain

---

## Project Overview

**What:** Next.js landing page for selling AI prompt template packs
**Domain:** perfectprompts.ai
**Repo:** https://github.com/systemwide/perfectprompts-app (branch: `main`)

### Business Model
- 6 individual packs @ **$7 each**
- 1 bundle (all packs) @ **$29**
- Free lead magnet: 5 prompts for email signup

### Tech Stack
- **Frontend:** Next.js 14, Tailwind CSS, Framer Motion
- **Email:** Kit (formerly ConvertKit) - API integration complete & tested
- **Payments:** Kit Commerce (primary), Gumroad (secondary/marketplace)
- **Hosting:** Hostinger Node.js Web App (NOT Vercel)

---

## Current Status

### Completed ✓
- [x] Next.js application with all components
- [x] Landing page with dark theme, animations
- [x] Problem-focused marketing copy
- [x] "See the Difference" examples section
- [x] Pricing at $7/$29
- [x] Kit API v4 integration (email capture working)
- [x] All 6 prompt pack content files (markdown)
- [x] GitHub repo created and up to date
- [x] Build passes

### Pending
- [ ] Convert .md files to PDF + .txt formats
- [ ] Create "5 Free Prompts" lead magnet PDF
- [ ] Set up Kit automation for lead magnet delivery
- [ ] Create 7 products on Kit Commerce
- [ ] Update product URLs in code
- [ ] Deploy to Hostinger
- [ ] Test end-to-end flow

---

## File Structure

```
perfectprompts-app/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts     # Kit API v4 integration (working)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx             # Main page - product URLs defined here
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── Testimonials.tsx
│   ├── EmailCapture.tsx     # Uses /api/subscribe
│   └── Footer.tsx
├── prompts/                  # SOURCE FILES - need PDF conversion
│   ├── marketing-prompts.md
│   ├── content-writing-prompts.md
│   ├── coding-prompts.md
│   ├── business-prompts.md
│   ├── creative-prompts.md
│   └── productivity-prompts.md
├── .env.local               # Kit credentials (gitignored)
├── .env.example             # Template for env vars
└── HANDOFF.md               # This file
```

---

## Key Configuration

### Kit API (working)
- **API Key:** `kit_342c1e17353a083ce1a0a5c2c855bce2`
- **Form ID:** `8968372`
- **Auth Header:** `X-Kit-Api-Key` (NOT Bearer token)
- **Endpoints:**
  - Create subscriber: `POST https://api.kit.com/v4/subscribers`
  - Add to form: `POST https://api.kit.com/v4/forms/{id}/subscribers`

### Product URLs (need updating)
In `/app/page.tsx`, the `products` array has placeholder Gumroad URLs. These need to be replaced with Kit Commerce URLs once products are created.

---

## Deliverable Formats Promised

From FAQ on website:
> "You receive a PDF with all prompts, organized by category with usage tips and example outputs. You also get a plain text version for easy copy-paste."

So each product needs:
1. **PDF** - Formatted nicely
2. **TXT** - Plain text for copy-paste

---

## Notes & Decisions

- Using Kit Commerce (3.5% fee) as primary, Gumroad (10% fee) as secondary marketplace
- Kit handles both email list AND product sales in one platform
- Testimonials use anonymous format (first name + initial only)
- No "lifetime updates" claims - removed from site
- Hosting on Hostinger Node.js (user already paying for it) instead of Vercel

---

## Change Log

**Jan 13, 2025**
- Fixed Kit API v4 integration (X-Kit-Api-Key header, two-step subscriber flow)
- Email capture tested and working
- Created comprehensive handoff for next session

**Jan 12, 2025**
- Added Kit API integration for email capture
- Removed "lifetime updates" claims
- Updated pricing: $9/$49 → $7/$29
- Reframed product descriptions to problem-focused copy
- Added "See the Difference" examples section
- Fixed "See Examples" button link

**Jan 8, 2025**
- Initial build: Next.js app, all components, prompt content
- Created GitHub repo
- Fixed nav links and testimonials

---

## Last Updated
January 13, 2025
