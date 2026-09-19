import React from 'react'
import Link from 'next/link'
import { INITIAL_CATEGORIES } from '@/lib/seed-data'

export const CategoryGrid = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-canvas" id="category-grid">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-warm text-secondary mb-3">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-3 font-medium">
            কারুশিল্পের নান্দনিক রূপ
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            হাতে কাটা সুতোর মিহি বুনন, স্পর্শের স্নিগ্ধতা এবং নকশিকাঁথার ঐতিহ্যবাহী নিপুণ কারুকাজ।
          </p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INITIAL_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="group relative flex flex-col overflow-hidden bg-surface-warm rounded-lg shadow-subtle hover:shadow-card transition-all duration-500"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.bengaliTitle}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Badge if available */}
                {cat.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface-canvas/90 backdrop-blur-sm text-[11px] tracking-wider text-text-primary px-2.5 py-1 rounded font-semibold shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                )}

                {/* Card Title & Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium mb-1 group-hover:text-tertiary-fixed transition-colors">
                    {cat.bengaliTitle}
                  </h3>
                  <p className="text-xs text-white/80 mb-3 font-light">
                    {cat.subtitle}
                  </p>
                  <div className="w-8 h-[2px] bg-tertiary-amber group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
