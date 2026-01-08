'use client'

import { Megaphone, PenTool, Code, Briefcase, Palette, Package } from 'lucide-react'
import ProductCard from './ProductCard'

const products = [
  {
    title: 'Marketing Prompts',
    description: 'High-converting prompts for ads, emails, landing pages, and social media campaigns.',
    price: 9,
    features: [
      '50+ marketing prompts',
      'Ad copy templates',
      'Email sequences',
      'Social media hooks',
      'Landing page copy',
    ],
    gumroadUrl: '#',
    icon: <Megaphone className="h-6 w-6 text-purple-400" />,
  },
  {
    title: 'Content Writing',
    description: 'Create engaging blog posts, articles, scripts, and long-form content effortlessly.',
    price: 9,
    features: [
      '50+ content prompts',
      'Blog post frameworks',
      'Video script templates',
      'Newsletter formats',
      'SEO optimization',
    ],
    gumroadUrl: '#',
    icon: <PenTool className="h-6 w-6 text-blue-400" />,
  },
  {
    title: 'Coding & Development',
    description: 'Debug faster, write cleaner code, and build better software with AI assistance.',
    price: 9,
    features: [
      '50+ coding prompts',
      'Code review templates',
      'Debug assistance',
      'Documentation helpers',
      'Architecture planning',
    ],
    gumroadUrl: '#',
    icon: <Code className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Business & Strategy',
    description: 'Strategic prompts for planning, analysis, presentations, and decision-making.',
    price: 9,
    features: [
      '50+ business prompts',
      'SWOT analysis templates',
      'Business plan frameworks',
      'Market research',
      'Financial modeling',
    ],
    gumroadUrl: '#',
    icon: <Briefcase className="h-6 w-6 text-amber-400" />,
  },
  {
    title: 'Creative & Art',
    description: 'Unlock your creativity with prompts for design, art direction, and visual concepts.',
    price: 9,
    features: [
      '50+ creative prompts',
      'Image generation',
      'Brand identity',
      'Color palettes',
      'Design critique',
    ],
    gumroadUrl: '#',
    icon: <Palette className="h-6 w-6 text-pink-400" />,
  },
  {
    title: 'Complete Bundle',
    description: 'Get all prompt packs at a massive discount. Best value for power users.',
    price: 49,
    originalPrice: 90,
    features: [
      'All 5 prompt packs',
      '250+ total prompts',
      'Lifetime updates',
      'Priority support',
      'Bonus templates',
    ],
    gumroadUrl: '#',
    popular: true,
    icon: <Package className="h-6 w-6 text-purple-400" />,
  },
]

export default function Pricing() {
  return (
    <section id="products" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Prompt Pack
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Each pack contains 50+ expertly crafted prompts designed to maximize your AI results.
            Buy individually or save 45% with the complete bundle.
          </p>
        </div>

        {/* Pricing Toggle Info */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="text-sm font-medium text-green-400">
              Save 45% with the Complete Bundle
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div id="pricing" className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              features={product.features}
              gumroadUrl={product.gumroadUrl}
              popular={product.popular}
              icon={product.icon}
            />
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
