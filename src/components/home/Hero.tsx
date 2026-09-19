'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-surface-warm min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top z-0 filter brightness-[0.85]"
      >
        <source
          src="/media/hero-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Scrim Overlay for editorial warmth and readable typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-text-primary/85 via-text-primary/50 to-transparent z-10 pointer-events-none" />

      {/* Floating Artisan Video Pill */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs tracking-wider uppercase font-medium">
          তাঁতের দৃশ্যচিত্র · নারায়ণগঞ্জ ও টাঙ্গাইল পিট-লুম
        </span>
        <button
          onClick={toggleVideo}
          aria-label="ভিডিও নিয়ন্ত্রণ করুন"
          className="w-5 h-5 rounded-full flex items-center justify-center text-white hover:text-tertiary-fixed transition-colors ml-1"
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-20 pb-20 z-20">
        <div className="max-w-2xl text-white">
          {/* Motif Accent from Stitch */}
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-7 h-7 text-tertiary-amber"
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 11.03 24.97 6.77 20.66 4.98M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 12.69 21.98 9.85 19.11 8.65M16 12C13.79 12 12 13.79 12 16C12 18.21 13.79 20 16 20C18.21 20 20 18.21 20 16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xs tracking-[0.2em] text-tertiary-fixed font-semibold uppercase">
              উৎসবের তাঁত সম্ভার • ২০২৫
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight font-medium mb-5 drop-shadow-sm">
            সুতোয় গাঁথা সময় ও <br />
            <span className="italic font-normal">আত্মার আখ্যান</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/90 mb-10 max-w-xl leading-relaxed font-light">
            বাংলার প্রবীণ ও দক্ষ তাঁতিদের হাতে বোনা ঐতিহ্যবাহী জামদানি, সিল্ক ও খাদি শাড়ি। শীতলক্ষ্যা ও যমুনার পাড়ের তাঁতশিল্প, প্রাকৃতিক ভেষজ রং এবং অবিনশ্বর স্নিগ্ধতার উদযাপন।
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#shop-stories"
              className="relative overflow-hidden bg-primary-container hover:bg-primary text-white px-8 py-3.5 rounded text-sm tracking-wide font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>তাঁত সম্ভার দেখুন</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="#category-grid"
              className="bg-white/15 hover:bg-white hover:text-text-primary text-white border border-white/40 hover:border-white backdrop-blur-sm px-8 py-3.5 rounded text-sm tracking-wide font-semibold transition-all duration-300"
            >
              জামদানি এক্সপ্লোর করুন
            </Link>
          </div>
        </div>

        {/* Carousel Indicators & Meta Bar */}
        <div className="mt-16 pt-8 flex items-center justify-between text-white border-t border-white/20 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="text-sm tracking-widest font-bold text-tertiary-fixed">
              ০১
            </span>
            <div className="w-16 h-[2px] bg-tertiary-fixed relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-2/3 animate-pulse" />
            </div>
            <span className="text-sm tracking-widest text-white/60">০৪</span>
          </div>

          <p className="text-xs text-white/80 italic hidden sm:block">
            &quot;আলতা রাঙা তসর সিল্কের আঁচল&quot;
          </p>

          <div className="flex items-center gap-2">
            <button
              aria-label="পূর্ববর্তী"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="পরবর্তী"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
