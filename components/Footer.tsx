'use client'

import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'All Templates', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Free Prompts', href: '#free-prompts' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="about" className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
                PerfectPrompts.ai
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Premium AI prompt templates that help you get 10x better results from any AI tool.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 transition-colors hover:text-white"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            &copy; {currentYear} PerfectPrompts.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
