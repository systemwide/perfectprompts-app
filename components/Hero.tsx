'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Users } from 'lucide-react'

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToExamples = () => {
    const examplesSection = document.getElementById('examples')
    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-600/20 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-600/10 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Premium AI Prompt Templates</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Stop Writing{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Mediocre
            </span>{' '}
            AI Prompts
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            Premium prompt templates that get{' '}
            <span className="font-semibold text-white">10x better results</span> from ChatGPT, Claude, and any AI
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <button
              onClick={scrollToProducts}
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/25"
            >
              Browse Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToExamples}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 text-base font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800"
            >
              See Examples
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-purple-400 to-blue-400"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">
                Used by <span className="text-white">2,000+</span> professionals
              </span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500"
          >
            <span className="text-sm">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="font-semibold text-slate-400">ChatGPT</span>
              <span className="font-semibold text-slate-400">Claude</span>
              <span className="font-semibold text-slate-400">Gemini</span>
              <span className="font-semibold text-slate-400">Copilot</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
