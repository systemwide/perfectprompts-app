'use client'

import { useState } from 'react'
import { Send, Gift, CheckCircle, Loader2 } from 'lucide-react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setErrorMessage('Please enter your email address')
      setStatus('error')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address')
      setStatus('error')
      return
    }

    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For now, just log the email
    console.log('Email captured:', email)

    setStatus('success')
    setEmail('')
  }

  return (
    <section id="free-prompts" className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-slate-800 to-blue-500/10 p-8 md:p-16">
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Icon */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
              <Gift className="h-8 w-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                5 Free Prompts
              </span>
            </h2>

            {/* Subheadline */}
            <p className="mt-4 text-lg text-slate-400">
              Sign up for our newsletter and receive 5 of our best-performing prompts absolutely free.
              Plus, get early access to new releases and exclusive tips.
            </p>

            {/* Form */}
            {status === 'success' ? (
              <div className="mt-8 flex items-center justify-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="font-medium text-green-400">
                  Check your inbox! Your free prompts are on the way.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'error') setStatus('idle')
                      }}
                      placeholder="Enter your email address"
                      className={`w-full rounded-full border bg-slate-800/50 px-6 py-4 text-white placeholder-slate-500 outline-none transition-all focus:ring-2 ${
                        status === 'error'
                          ? 'border-red-500 focus:ring-red-500/50'
                          : 'border-slate-700 focus:border-purple-500 focus:ring-purple-500/50'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 font-semibold text-white transition-all hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Prompts
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
                )}
              </form>
            )}

            {/* Privacy Note */}
            <p className="mt-6 text-sm text-slate-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
