import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PerfectPrompts.ai - Premium AI Prompt Templates',
  description: 'Stop writing mediocre AI prompts. Get premium prompt templates that deliver 10x better results from ChatGPT, Claude, and any AI.',
  keywords: ['AI prompts', 'ChatGPT prompts', 'Claude prompts', 'prompt engineering', 'AI templates'],
  authors: [{ name: 'PerfectPrompts.ai' }],
  openGraph: {
    title: 'PerfectPrompts.ai - Premium AI Prompt Templates',
    description: 'Stop writing mediocre AI prompts. Get premium prompt templates that deliver 10x better results.',
    url: 'https://perfectprompts.ai',
    siteName: 'PerfectPrompts.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerfectPrompts.ai - Premium AI Prompt Templates',
    description: 'Stop writing mediocre AI prompts. Get premium prompt templates that deliver 10x better results.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
