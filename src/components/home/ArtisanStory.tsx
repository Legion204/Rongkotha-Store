import React from 'react'
import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'

export const ArtisanStory = () => {
  return (
    <section className="w-full py-24 bg-surface-canvas overflow-hidden" id="artisan-story">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Artisan Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/5] bg-surface-warm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8IkdGbHfnvwfbkm4XqKXzylQv4NW6kzCdOkvsA-AobAWTjx9GO8TB2WJ5HJw9YsbaNgAHYr2KaiUYXqPRKlKQ-iktQ2EQ09VZ9GCfu5bvofcCoJfOatWYz2A6czGy0IFGzDOu_Pir0LoCXMDHwpJQyLSSzOgLFg4KGSYWujoJlVesrjDoOiG44erRIVvhKq0WAXXB66Jntsx-b2WJF20hsxgd4zmsbFPeBhF79m-_ySczeQAKyfjqTg"
                alt="তাঁতে মনোনিবেশ করা বাংলার প্রবীণ গুণী তাঁতি কারিগর"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/40 to-transparent" />
            </div>

            {/* Overlapping Small Floating Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-surface-canvas p-6 rounded-lg shadow-xl border border-border-hairline max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <Handshake size={28} className="text-primary" />
                <span className="font-serif text-2xl text-text-primary font-semibold">
                  ২,৫০০+
                </span>
              </div>
              <p className="text-xs text-text-body leading-relaxed">
                টাঙ্গাইল, সোনারগাঁ ও রাজশাহীর দক্ষ তাঁতি পরিবারের জীবিকা সুরক্ষায় নিবেদিত উদ্যোগ।
              </p>
            </div>
          </div>

          {/* Right Column: Heartfelt Story Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            {/* Spiral Motif Flourish */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 5C11.72 5 5 11.72 5 20C5 28.28 11.72 35 20 35C28.28 35 35 28.28 35 20C35 13.78 31.21 8.46 25.82 6.22M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 15.86 27.47 12.31 23.88 10.81M20 15C17.24 15 15 17.24 15 20C15 22.76 17.24 25 20 25C22.76 25 25 22.76 25 20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                রংকথার অন্তর্নিহিত ভাবনা
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-6 leading-snug font-medium">
              প্রতিটি সুতোয় প্রজন্মের গল্প, <br />
              <span className="italic font-normal">অক্ষয় ঐতিহ্যের উত্তরাধিকার</span>
            </h2>

            <div className="space-y-4 text-base text-text-body mb-8 leading-relaxed font-light">
              <p>
                বাংলায় &lsquo;রংকথা&rsquo; মানে রঙের ভাষা ও অনুভূতির গল্প। শীতলক্ষ্যার মিষ্টি বাতাস ছুঁয়ে যাওয়া রূপসী জামদানি আর যমুনাতীরের টাঙ্গাইল তাঁতের খাঁটি ঐতিহ্য নিয়ে আমাদের পথচলা। আমরা চেয়েছি নিঃশব্দ কারিগরদের মর্যাদা ফিরিয়ে দিতে, যাদের শ্রম ও সৃজনশীলতায় বেঁচে আছে এই শিল্পের গৌরব।
              </p>
              <p>
                আমাদের বিশ্বাস, প্রতিটি শাড়ি কেবল একটি পোশাক নয়—বরং একটি চিরন্তন শিল্পকর্ম। তাঁতি যখন কাঠের খটখট মাকুতে সুতো বুনেন, তখন তিনি ১২ হাতের প্রতিটি ইঞ্চিতে মিশিয়ে দেন এক একটি জীবনগাথা আর নিখাদ আত্মসম্মান।
              </p>
            </div>

            {/* Region & Weaving Time Meta */}
            <div className="grid grid-cols-2 gap-6 w-full pt-4 pb-8 border-t border-b border-border-hairline mb-8">
              <div>
                <span className="text-xs text-text-muted tracking-wider block mb-1">
                  তাঁত অঞ্চল
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  সোনারগাঁ, টাঙ্গাইল ও রাজশাহী
                </span>
              </div>
              <div>
                <span className="text-xs text-text-muted tracking-wider block mb-1">
                  বুননের সময়কাল
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  ১২ থেকে ২৮ কর্মদিবস
                </span>
              </div>
            </div>

            <Link
              href="#category-grid"
              className="inline-flex items-center gap-3 text-text-primary text-sm tracking-wide font-semibold border-b-2 border-tertiary-amber hover:border-primary pb-1 transition-all group"
            >
              <span>তাঁত ডায়েরি পড়ুন</span>
              <ArrowRight
                size={16}
                className="text-primary group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
