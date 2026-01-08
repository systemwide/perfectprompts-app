'use client'

import { Check, Star, ExternalLink } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  price: number
  originalPrice?: number
  features: string[]
  gumroadUrl: string
  popular?: boolean
  icon?: React.ReactNode
}

export default function ProductCard({
  title,
  description,
  price,
  originalPrice,
  features,
  gumroadUrl,
  popular = false,
  icon,
}: ProductCardProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        popular
          ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-slate-800/50 shadow-xl shadow-purple-500/10'
          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1">
          <Star className="h-3 w-3 fill-white text-white" />
          <span className="text-xs font-semibold text-white">Popular</span>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Icon */}
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-2xl">
            {icon}
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{description}</p>

        {/* Features */}
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                <Check className="h-3 w-3 text-green-400" />
              </div>
              <span className="text-sm text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">${price}</span>
          {originalPrice && (
            <span className="text-lg text-slate-500 line-through">${originalPrice}</span>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
            popular
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/25'
              : 'bg-slate-700 text-white hover:bg-slate-600'
          }`}
        >
          Buy Now
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
