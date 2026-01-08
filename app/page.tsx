'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Testimonials from '@/components/Testimonials'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const products = [
  {
    id: 'marketing',
    title: 'Marketing & Advertising Prompts',
    description: '20 battle-tested prompts for ad copy, email sequences, brand voice, and customer personas.',
    price: 9,
    features: [
      'Facebook & Google ad copy generators',
      'Email marketing sequence builders',
      'Customer persona creators',
      'Landing page copy frameworks',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/marketing',
    icon: '📈',
  },
  {
    id: 'content',
    title: 'Content Writing Prompts',
    description: '20 prompts for SEO blogs, engaging headlines, content repurposing, and newsletter writing.',
    price: 9,
    features: [
      'SEO-optimized blog post writers',
      'Headline & hook generators',
      'Content repurposing frameworks',
      'Newsletter writing templates',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/content',
    icon: '✍️',
  },
  {
    id: 'coding',
    title: 'Coding & Development Prompts',
    description: '20 prompts for code review, debugging, architecture decisions, and documentation.',
    price: 9,
    features: [
      'Code review & improvement prompts',
      'Debugging assistance frameworks',
      'Architecture decision helpers',
      'Documentation generators',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/coding',
    icon: '💻',
    popular: true,
  },
  {
    id: 'business',
    title: 'Business & Strategy Prompts',
    description: '20 prompts for business planning, SWOT analysis, OKRs, and strategic decision-making.',
    price: 9,
    features: [
      'Business plan generators',
      'SWOT & competitive analysis',
      'OKR and goal-setting frameworks',
      'Decision-making templates',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/business',
    icon: '💼',
  },
  {
    id: 'creative',
    title: 'Creative & Art Direction Prompts',
    description: '20 prompts for image generation, creative brainstorming, naming, and design feedback.',
    price: 9,
    features: [
      'Midjourney/DALL-E prompt builders',
      'Creative brainstorming frameworks',
      'Brand naming generators',
      'Design critique templates',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/creative',
    icon: '🎨',
  },
  {
    id: 'productivity',
    title: 'Productivity & Personal Prompts',
    description: '20 prompts for task prioritization, learning, problem-solving, and personal growth.',
    price: 9,
    features: [
      'Task prioritization frameworks',
      'Learning accelerator prompts',
      'Problem-solving templates',
      'Weekly review generators',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/productivity',
    icon: '🚀',
  },
]

const bundle = {
  id: 'bundle',
  title: 'Complete Prompt Bundle',
  description: 'All 6 prompt packs (120+ prompts) at 45% off. Everything you need to master AI.',
  price: 49,
  originalPrice: 90,
  features: [
    'All 6 prompt packs included',
    '120+ premium prompts',
    'Free lifetime updates',
    'Bonus: Prompt engineering guide',
  ],
  gumroadUrl: 'https://perfectprompts.gumroad.com/l/bundle',
  icon: '🎁',
  popular: true,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium Prompt Templates
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Each pack contains 20 meticulously crafted prompts with usage tips and examples.
              Works with ChatGPT, Claude, Gemini, and any LLM.
            </p>
          </motion.div>

          {/* Bundle - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-1">
              <div className="bg-slate-800 rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                      BEST VALUE - SAVE 45%
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{bundle.title}</h3>
                    <p className="text-slate-400 mb-4">{bundle.description}</p>
                    <ul className="space-y-2 mb-6">
                      {bundle.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-slate-500 line-through text-2xl">${bundle.originalPrice}</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-4">${bundle.price}</div>
                    <a
                      href={bundle.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Get All Prompts →
                    </a>
                    <p className="text-sm text-slate-500 mt-2">Instant download • Lifetime access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Individual Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why These Prompts Work Better
            </h2>
            <p className="text-xl text-slate-400">
              Each prompt uses proven techniques that most people don&apos;t know about.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Role Assignment',
                description: 'Each prompt assigns the AI a specific expert role, dramatically improving response quality.',
                icon: '🎭',
              },
              {
                title: 'Structured Output',
                description: 'Prompts request specific formats and structures so you get organized, actionable results.',
                icon: '📋',
              },
              {
                title: 'Chain of Thought',
                description: 'Built-in reasoning steps help the AI think through complex problems systematically.',
                icon: '🔗',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What AI tools do these prompts work with?',
                a: 'These prompts work with any large language model including ChatGPT (GPT-4, GPT-3.5), Claude, Gemini, Llama, and others. The prompt engineering techniques are universal.',
              },
              {
                q: 'Do I get updates when you add new prompts?',
                a: 'Yes! Bundle purchasers get free lifetime updates. Individual pack purchasers get updates for their specific packs.',
              },
              {
                q: 'What format are the prompts delivered in?',
                a: 'You receive a PDF with all prompts, organized by category with usage tips and example outputs. You also get a plain text version for easy copy-paste.',
              },
              {
                q: 'Is there a refund policy?',
                a: 'Yes, we offer a 30-day money-back guarantee. If the prompts don\'t improve your AI results, we\'ll refund you in full.',
              },
              {
                q: 'Can I use these for commercial purposes?',
                a: 'Absolutely. Use these prompts for client work, your business, content creation, or any commercial purpose.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-slate-700 pb-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EmailCapture />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get 10x Better AI Results?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join 2,000+ professionals who&apos;ve upgraded their AI game.
            </p>
            <a
              href={bundle.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get the Complete Bundle - $49 →
            </a>
            <p className="text-purple-200 mt-4 text-sm">
              30-day money-back guarantee • Instant download
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
