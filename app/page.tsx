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
    title: 'Marketing & Advertising',
    description: 'Turn product features into scroll-stopping ad copy that converts.',
    price: 7,
    features: [
      'Vague idea → Facebook ad that sells',
      'Features list → Compelling headlines',
      'Blank page → Email sequences that convert',
      'Generic pitch → Targeted customer personas',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/marketing',
    icon: '📈',
  },
  {
    id: 'content',
    title: 'Content Writing',
    description: 'Transform rough drafts into polished, SEO-optimized content.',
    price: 7,
    features: [
      'Rough notes → Published blog post',
      'Topic idea → SEO-optimized article',
      'One piece → 10 repurposed formats',
      'Blank page → Engaging newsletter',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/content',
    icon: '✍️',
  },
  {
    id: 'coding',
    title: 'Coding & Development',
    description: 'Debug faster, document cleaner, ship code with confidence.',
    price: 7,
    features: [
      'Messy code → Production-ready',
      'Cryptic bug → Root cause + fix',
      'Spaghetti → Clean architecture',
      'Undocumented → Fully documented',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/coding',
    icon: '💻',
    popular: true,
  },
  {
    id: 'business',
    title: 'Business & Strategy',
    description: 'Go from vague idea to investor-ready business plan.',
    price: 7,
    features: [
      'Napkin sketch → Business plan',
      'Gut feeling → Data-driven decision',
      'Scattered goals → Clear OKRs',
      'Unknown market → Competitive analysis',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/business',
    icon: '💼',
  },
  {
    id: 'creative',
    title: 'Creative & Art Direction',
    description: 'Generate stunning visuals and breakthrough creative ideas.',
    price: 7,
    features: [
      'Vague vision → Perfect AI image',
      'Creative block → 20 fresh concepts',
      'No name → Brand name shortlist',
      'Design draft → Expert critique',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/creative',
    icon: '🎨',
  },
  {
    id: 'productivity',
    title: 'Productivity & Growth',
    description: 'Get unstuck, learn faster, and make better decisions.',
    price: 7,
    features: [
      'Overwhelmed → Prioritized action plan',
      'New topic → Accelerated mastery',
      'Stuck problem → Clear solution path',
      'Busy week → Meaningful progress',
    ],
    gumroadUrl: 'https://perfectprompts.gumroad.com/l/productivity',
    icon: '🚀',
  },
]

const bundle = {
  id: 'bundle',
  title: 'Complete Prompt Bundle',
  description: 'All 6 packs. 120+ prompts. Every problem solved.',
  price: 29,
  originalPrice: 42,
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

const examples = [
  {
    category: 'Marketing',
    problem: 'You need Facebook ad copy but stare at a blank page',
    genericPrompt: 'Write a Facebook ad for my product',
    ourPrompt: `You are a direct response copywriter who has generated over $100M in Facebook ad revenue. Create 3 ad variations using the Hook-Story-Offer framework for [PRODUCT]. Target: [AUDIENCE]. Pain point: [PROBLEM]. Include pattern interrupt hooks, relatable stories, and clear CTAs with urgency.`,
    result: 'Three complete ad variations with different emotional angles (FOMO, transformation, social proof) - ready to test.',
  },
  {
    category: 'Coding',
    problem: 'Your code works but you\'re not sure if it\'s production-ready',
    genericPrompt: 'Review my code',
    ourPrompt: `You are a senior engineer with 15+ years experience. Review this code for: CRITICAL ISSUES (security, crashes), CODE QUALITY (SOLID principles, DRY), PERFORMANCE (time/space complexity), and provide a REFACTORED VERSION with comments.`,
    result: 'Comprehensive review with specific line-by-line fixes, security audit, performance analysis, and improved code.',
  },
  {
    category: 'Business',
    problem: 'You have an idea but need to validate it quickly',
    genericPrompt: 'Help me with my business idea',
    ourPrompt: `Act as a startup advisor who has evaluated 500+ pitches. For [IDEA], provide: Market size estimate with sources, Top 5 competitors + gaps, Customer segments ranked by accessibility, 3 critical assumptions to test first, and a 2-week validation plan.`,
    result: 'Structured validation framework with specific next steps, not generic advice.',
  },
]

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
              Solve Real Problems, Not Just &quot;Get Prompts&quot;
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Each pack tackles 20 specific challenges. Copy, paste, customize, and get results.
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
                      BEST VALUE - SAVE 30%
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

      {/* Examples Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              See the Difference
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Generic prompts get generic results. Here&apos;s what our prompts actually do.
            </p>
          </motion.div>

          <div className="space-y-12">
            {examples.map((example, index) => (
              <motion.div
                key={example.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                    {example.category}
                  </span>
                  <span className="text-slate-400 text-sm">{example.problem}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Generic Prompt */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span className="text-slate-400 font-medium">Generic prompt</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <code className="text-slate-300 text-sm">{example.genericPrompt}</code>
                    </div>
                    <p className="text-slate-500 text-sm">Gets you generic, surface-level responses</p>
                  </div>

                  {/* Our Prompt */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-green-400 font-medium">PerfectPrompts version</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 border border-green-500/30">
                      <code className="text-slate-300 text-sm">{example.ourPrompt.slice(0, 150)}...</code>
                    </div>
                    <p className="text-green-400 text-sm">{example.result}</p>
                  </div>
                </div>
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
              Get the Complete Bundle - $29 →
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
