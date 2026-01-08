# PerfectPrompts.ai

Premium AI Prompt Templates - A Next.js application for selling prompt template packs.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## How It Works

```
User visits perfectprompts.ai (your Next.js site)
           ↓
Sees products, reads benefits, builds trust
           ↓
Clicks "Buy Now" button
           ↓
Redirected to Gumroad checkout page
           ↓
Pays via Gumroad (handles payment, taxes, refunds)
           ↓
User gets instant download of the PDF
           ↓
Money goes to your bank account (minus Gumroad's 10% fee)
```

### Why This Setup?

| Your Site (perfectprompts.ai) | Gumroad |
|-------------------------------|---------|
| Marketing & branding | Payment processing |
| SEO & traffic | File hosting & delivery |
| Email capture | Tax handling (VAT, sales tax) |
| Custom design | Refunds & disputes |
| | Affiliate system |

**You avoid:** Building a checkout system, handling credit cards, dealing with chargebacks, calculating international taxes, setting up file delivery.

### What You Upload to Gumroad

The 6 prompt pack `.md` files in `/prompts/` get converted to nicely formatted PDFs, then uploaded to Gumroad as products. When someone buys, Gumroad automatically sends them the PDF.

---

## Setup Guide

### Prerequisites
- Node.js 18+ installed
- A Gumroad account (for selling products)
- A Vercel account (for hosting - free tier works)

### Step 1: Local Setup

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 to see your site

### Step 2: Gumroad Setup (Payments)

1. Go to [gumroad.com](https://gumroad.com) and create an account
2. Verify your identity and connect your bank account/PayPal
3. Create your products:

   **Individual Packs ($9 each):**
   - Marketing & Advertising Prompts
   - Content Writing Prompts
   - Coding & Development Prompts
   - Business & Strategy Prompts
   - Creative & Art Direction Prompts
   - Productivity & Personal Prompts

   **Bundle ($49):**
   - Complete Prompt Bundle (all packs)

4. For each product:
   - Upload the corresponding PDF from the `/prompts` folder
   - Set the price
   - Write a compelling description
   - Enable "Pay what you want" if desired
   - Copy the product URL

5. Update the Gumroad URLs in `/app/page.tsx`:
   ```typescript
   const products = [
     {
       // ...
       gumroadUrl: 'https://YOUR_GUMROAD.gumroad.com/l/YOUR_PRODUCT',
     },
     // ...
   ]
   ```

### Step 3: Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

**Option B: Using GitHub**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create perfectprompts --public --source=. --push
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Step 4: Connect Your Domain

1. In Vercel, go to your project settings
2. Click "Domains"
3. Add `perfectprompts.ai`
4. Vercel will give you DNS records to add
5. In Hostinger:
   - Go to DNS settings
   - Remove existing A/CNAME records for the root domain
   - Add the records Vercel provides:
     - Type: A, Name: @, Value: 76.76.21.21
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com
6. Wait for DNS propagation (up to 48 hours, usually faster)

## Project Structure

```
perfectprompts-app/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ProductCard.tsx  # Product display card
│   ├── Testimonials.tsx # Testimonial carousel
│   ├── EmailCapture.tsx # Email signup form
│   └── Footer.tsx       # Site footer
├── prompts/             # Prompt pack content (for Gumroad upload)
│   ├── marketing-prompts.md
│   ├── content-writing-prompts.md
│   ├── coding-prompts.md
│   ├── business-prompts.md
│   ├── creative-prompts.md
│   └── productivity-prompts.md
└── public/              # Static assets
```

## Customization

### Update Branding
Edit `/app/layout.tsx` to change:
- Site title
- Meta description
- Open Graph tags

### Update Products
Edit `/app/page.tsx` to modify:
- Product names
- Prices
- Features
- Gumroad URLs

### Update Testimonials
Edit `/components/Testimonials.tsx` to add real customer testimonials.

### Update Colors
Edit `/tailwind.config.ts` to change the color scheme.

## Adding Email Capture

The email capture form currently logs to console. To make it functional:

**Option 1: Gumroad Email**
- Use Gumroad's built-in email collection

**Option 2: ConvertKit/Mailchimp**
- Create an API route in `/app/api/subscribe/route.ts`
- Connect to your email service

**Option 3: Supabase**
- Set up a Supabase project
- Create an emails table
- Add the API route to store emails

## Marketing Tips

### Launch Checklist
- [ ] Products set up on Gumroad
- [ ] Site deployed to Vercel
- [ ] Domain connected
- [ ] Test purchases work
- [ ] Share on Twitter/LinkedIn
- [ ] Post in relevant subreddits
- [ ] Submit to Product Hunt
- [ ] Reach out to newsletter curators

### SEO Tips
- Write a blog post about prompt engineering
- Get backlinks from AI tool directories
- Target keywords like "ChatGPT prompts for [use case]"

### Growth Ideas
- Offer affiliate program through Gumroad
- Create free samples to build email list
- Partner with AI-focused newsletters
- Create YouTube tutorials using your prompts

## Troubleshooting

**Build fails:**
```bash
npm run build
```
Check the error output. Usually it's a TypeScript error.

**Styles not loading:**
Make sure Tailwind is properly configured in `tailwind.config.ts`

**Images not loading:**
Place images in `/public` and reference them with `/image-name.png`

**Gumroad links not working:**
Make sure you're using the full product URL from Gumroad.

## Support

For issues with this template, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Gumroad Help Center](https://help.gumroad.com)

## License

This project is for your personal/commercial use. Feel free to modify and rebrand as needed.
