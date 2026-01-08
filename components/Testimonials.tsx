'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah C.',
    role: 'Marketing Professional',
    company: null,
    image: null,
    content:
      "These prompts completely transformed how I use ChatGPT for marketing. What used to take me hours of trial and error now takes minutes. The quality of output is consistently better than what I was getting before.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus R.',
    role: 'Software Developer',
    company: null,
    image: null,
    content:
      "The coding prompts are incredibly well-structured. They've helped me debug faster, write cleaner documentation, and even architect better solutions. Worth it for any developer using AI tools.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily T.',
    role: 'Freelance Writer',
    company: null,
    image: null,
    content:
      "I was skeptical at first, but these prompts have genuinely improved my content quality. The templates are versatile and save me so much time on every project.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="bg-slate-800/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Join thousands of professionals getting better AI results with our prompts.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mt-16">
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute left-8 top-8 opacity-20 md:left-12 md:top-12">
              <Quote className="h-16 w-16 text-purple-400" />
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <div
                className="transition-all duration-500 ease-in-out"
                key={currentIndex}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 text-lg text-slate-300 md:text-xl lg:text-2xl">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-slate-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-2 md:right-8">
              <button
                onClick={goToPrevious}
                className="rounded-full bg-slate-700 p-2 text-slate-300 transition-colors hover:bg-slate-600 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="rounded-full bg-slate-700 p-2 text-slate-300 transition-colors hover:bg-slate-600 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
