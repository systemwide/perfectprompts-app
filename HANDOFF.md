# PerfectPrompts.ai - Project Handoff

## Project Overview

A Next.js landing page for selling premium AI prompt template packs via Gumroad.

**Domain:** perfectprompts.ai (currently hosted on Hostinger with WordPress, will migrate to Vercel)

**Business Model:** Sell curated prompt packs as digital downloads
- 6 individual packs @ $9 each
- 1 bundle (all packs) @ $49

---

## Current Status

### Completed
- [x] Next.js 14 application scaffolded
- [x] Landing page with dark theme
- [x] All 6 components (Header, Hero, ProductCard, Testimonials, EmailCapture, Footer)
- [x] All 6 prompt pack content files created (in `/prompts/`)
- [x] Build passes successfully
- [x] README with setup instructions

### Pending
- [ ] Create Gumroad account
- [ ] Set up 7 Gumroad products (6 individual + 1 bundle)
- [ ] Convert prompt .md files to PDFs for Gumroad upload
- [ ] Update Gumroad URLs in `/app/page.tsx`
- [ ] Push to GitHub repository
- [ ] Deploy to Vercel
- [ ] Update DNS on Hostinger to point to Vercel
- [ ] Test end-to-end purchase flow

### Future Enhancements (Phase 2)
- [ ] Prompt Marketplace (user-generated content, 20-30% commission)
- [ ] Email capture integration (ConvertKit/Mailchimp)
- [ ] Blog for SEO content
- [ ] Affiliate program setup

---

## Architecture

```
User visits perfectprompts.ai (Next.js on Vercel)
           |
           v
Sees products, reads benefits, builds trust
           |
           v
Clicks "Buy Now" button
           |
           v
Redirected to Gumroad checkout page
           |
           v
Pays via Gumroad (handles payment, taxes, refunds)
           |
           v
User gets instant download of the PDF
           |
           v
Money goes to bank account (minus Gumroad's 10% fee)
```

### Why Gumroad?

| Your Site (perfectprompts.ai) | Gumroad |
|-------------------------------|---------|
| Marketing & branding | Payment processing |
| SEO & traffic | File hosting & delivery |
| Email capture | Tax handling (VAT, sales tax) |
| Custom design | Refunds & disputes |
| | Affiliate system |

---

## File Structure

```
perfectprompts-app/
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout, metadata
│   └── page.tsx             # Main landing page (products defined here)
├── components/
│   ├── Header.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Animated hero section
│   ├── ProductCard.tsx      # Reusable product display
│   ├── Testimonials.tsx     # Auto-rotating carousel
│   ├── EmailCapture.tsx     # Email signup form
│   └── Footer.tsx           # Site footer
├── prompts/                  # Content for Gumroad products
│   ├── marketing-prompts.md
│   ├── content-writing-prompts.md
│   ├── coding-prompts.md
│   ├── business-prompts.md
│   ├── creative-prompts.md
│   └── productivity-prompts.md
├── HANDOFF.md               # This file
├── README.md                # Setup instructions
└── deploy.sh                # Deployment helper script
```

---

## Key Files to Edit

### To update products/pricing
Edit `/app/page.tsx` - look for the `products` and `bundle` arrays near the top.

### To update Gumroad URLs
Edit `/app/page.tsx` - update the `gumroadUrl` field for each product after creating Gumroad listings.

### To update testimonials
Edit `/components/Testimonials.tsx` - replace placeholder testimonials with real ones.

### To update branding/SEO
Edit `/app/layout.tsx` - update title, description, and Open Graph tags.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** Vercel (planned)
- **Payments:** Gumroad
- **Domain:** Hostinger (DNS only after migration)

---

## Pricing Strategy

| Product | Price | Prompts | $/prompt |
|---------|-------|---------|----------|
| Individual packs | $9 | 20 | $0.45 |
| Complete bundle | $49 | 120 | $0.41 |

Market research shows this is competitive:
- Budget packs: $3-5
- Quality curated (us): $9-15
- Premium/specialized: $15-20+

---

## Revenue Target

Goal: $1,000/month

Realistic mix to hit target:
- 60 Pro pack sales × $9 = $540
- 10 Bundle sales × $49 = $490
- **Total: $1,030/month**

After Gumroad's 10% fee: ~$927/month net

---

## Notes & Decisions

- Chose Gumroad over Stripe for simplicity (handles taxes, delivery, refunds)
- Dark theme chosen for modern SaaS aesthetic
- Framer Motion animations for engagement
- Email capture ready but needs backend integration
- Testimonials use anonymous format (first name + initial, generic role, no company) to avoid falsifiability

---

## Change Log

**Jan 8, 2025**
- Fixed nav links: Products, How It Works, Reviews (all point to real sections)
- Made testimonials anonymous to avoid fake company names being Googled
- Created HANDOFF.md
- Added architecture section to README.md

---

## Last Updated

January 8, 2025
