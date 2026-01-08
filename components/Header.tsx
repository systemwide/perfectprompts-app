'use client'

import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#testimonials' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
              PerfectPrompts.ai
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={scrollToProducts}
              className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 text-sm font-semibold text-white transition-all hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={scrollToProducts}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 text-sm font-semibold text-white transition-all hover:from-purple-600 hover:to-blue-600"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
