# PerfectPrompts.ai - Project Handoff

## NEXT SESSION: START HERE

### Immediate Tasks (in order)

#### 1. Fix Email Deliverability (IMPORTANT)
Emails are going to spam because you're sending from `perfectprompts.ai@gmail.com`. Fix:
1. **Create domain email in Hostinger:** `hello@perfectprompts.ai`
2. **In Kit:** Settings → Email → Add new sender email
3. **Verify:** Add SPF/DKIM DNS records (Kit will guide you)

#### 2. Finish Lead Magnet Setup in Kit
The incentive email is set up but needs the PDF attached:
1. Go to: https://app.kit.com/forms/designers/8968372/edit
2. Edit the **Incentive Email** settings
3. Click the **"Download"** button at bottom of editor
4. Upload: `deliverables/pdf/free-prompts.pdf`
5. Save - subscribers will get the PDF after clicking "Confirm subscription"

#### 3. Create Kit Commerce Products
Create 7 products in Kit:
- 6 individual packs @ $7 each
- 1 bundle (all 6) @ $29

For each product, upload both PDF and TXT files from `deliverables/` folder.

#### 4. Update Product URLs in Code
After creating Kit products, update URLs in `/app/page.tsx`

#### 5. Deploy to Hostinger
- Delete WordPress site on perfectprompts.ai
- Add Node.js Web App from GitHub (`systemwide/perfectprompts-app`, branch: `main`)
- Set environment variables
- Connect domain

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
- [x] **PDF + TXT conversion** - All 6 packs converted
- [x] **Free lead magnet PDF** - Created with 5 sample prompts
- [x] **Kit form incentive email** - Copy added, needs PDF upload

### In Progress
- [ ] Lead magnet PDF upload to Kit form (just needs the file uploaded)
- [ ] Email deliverability fix (need domain email setup)

### Pending
- [ ] Create 7 products on Kit Commerce
- [ ] Update product URLs in code
- [ ] Deploy to Hostinger
- [ ] Test end-to-end flow

---

## File Structure

```
perfectprompts-app/
├── app/
│   ├── api/subscribe/route.ts  # Kit API v4 integration (working)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Main page - product URLs defined here
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── Testimonials.tsx
│   ├── EmailCapture.tsx        # Uses /api/subscribe
│   └── Footer.tsx
├── prompts/                    # Source markdown files
│   ├── marketing-prompts.md
│   ├── content-writing-prompts.md
│   ├── coding-prompts.md
│   ├── business-prompts.md
│   ├── creative-prompts.md
│   ├── productivity-prompts.md
│   └── free-prompts.md         # Lead magnet source
├── deliverables/               # READY TO USE - upload these to Kit
│   ├── pdf/
│   │   ├── marketing-prompts.pdf
│   │   ├── content-writing-prompts.pdf
│   │   ├── coding-prompts.pdf
│   │   ├── business-prompts.pdf
│   │   ├── creative-prompts.pdf
│   │   ├── productivity-prompts.pdf
│   │   └── free-prompts.pdf    # Lead magnet
│   └── txt/
│       ├── marketing-prompts.txt
│       ├── content-writing-prompts.txt
│       ├── coding-prompts.txt
│       ├── business-prompts.txt
│       ├── creative-prompts.txt
│       ├── productivity-prompts.txt
│       └── free-prompts.txt
├── scripts/
│   ├── convert-prompts.js      # Converts all 6 packs
│   ├── convert-lead-magnet.js  # Converts free prompts
│   └── pdf-styles.css          # PDF styling with brand colors
├── .env.local                  # Kit credentials (gitignored)
├── .env.example                # Template for env vars
└── HANDOFF.md                  # This file
```

---

## Key Configuration

### Kit API (working)
- **API Key:** `kit_342c1e17353a083ce1a0a5c2c855bce2`
- **Form ID:** `8968372`
- **Auth Header:** `X-Kit-Api-Key` (NOT Bearer token)

### Kit Form URL
- Edit form: https://app.kit.com/forms/designers/8968372/edit

### Environment Variables (for Hostinger)
```
CONVERTKIT_API_KEY=kit_342c1e17353a083ce1a0a5c2c855bce2
CONVERTKIT_FORM_ID=8968372
```

---

## Known Issues

### Email Going to Spam
- **Cause:** Sending from `perfectprompts.ai@gmail.com` via Kit
- **Fix:** Set up `hello@perfectprompts.ai` in Hostinger, add as sender in Kit with SPF/DKIM

---

## Deliverables Ready

All product files are in `deliverables/` folder:

| Product | PDF | TXT |
|---------|-----|-----|
| Marketing & Advertising | 887KB | 30KB |
| Content Writing | 983KB | 35KB |
| Coding & Development | 1.2MB | 40KB |
| Business & Strategy | 510KB | 18KB |
| Creative Writing | 516KB | 15KB |
| Productivity | 452KB | 15KB |
| **Free Lead Magnet** | 255KB | - |

---

## Change Log

**Jan 14, 2025**
- Converted all 6 prompt packs to PDF + TXT formats
- Created free lead magnet (5 prompts sampled from packs)
- Set up Kit incentive email copy
- Identified email deliverability issue (gmail sender → spam)
- Added conversion scripts for future updates

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

**Jan 8, 2025**
- Initial build: Next.js app, all components, prompt content
- Created GitHub repo

---

## Last Updated
January 14, 2025
