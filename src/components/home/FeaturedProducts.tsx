'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INITIAL_PRODUCTS, SeedProduct } from '@/lib/seed-data'
import { ProductCard } from '@/components/ui/ProductCard'

interface FeaturedProductsProps {
  products?: SeedProduct[]
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products = INITIAL_PRODUCTS,
}) => {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'সব সৃষ্টি' },
    { id: 'popular', label: 'সর্বাধিক জনপ্রিয়' },
    { id: 'new', label: 'নতুন কালেকশন' },
    { id: 'jamdani', label: 'জামদানি ও সিল্ক' },
    { id: 'everyday', label: 'নিত্যদিনের তাঁত' },
  ]

  const filteredProducts = products.filter((product) => {
    if (activeTab === 'new') return product.badge?.includes('নতুন')
    if (activeTab === 'popular') return product.badge?.includes('হাতে বোনা')
    if (activeTab === 'jamdani')
      return product.title.includes('Jamdani') || product.title.includes('Chanderi')
    return true
  })

  return (
    <section
      className="w-full py-20 bg-surface-warm border-t border-border-hairline"
      id="shop-stories"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Heading with Motif */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[1px] w-12 bg-border-warm" />
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 3 3 0 0 1 3-3 3 3 0 0 1 3 3 1 1 0 0 1-1 1"
                strokeLinecap="round"
              />
            </svg>
            <span className="h-[1px] w-12 bg-border-warm" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2 font-medium">
            আমাদের বোনা গল্প
          </h2>
          <p className="text-sm sm:text-base text-text-muted italic max-w-lg">
            &quot;প্রতিটি শাড়ির পরতে জড়িয়ে থাকে কারিগরের অন্তরের নীরব কথামালা&quot;
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-text-primary text-white shadow-sm'
                    : 'bg-surface-canvas text-text-body hover:text-text-primary hover:bg-surface-variant'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-3 bg-surface-canvas hover:bg-text-primary text-text-primary hover:text-white border border-border-warm rounded text-sm tracking-wide font-semibold transition-all duration-300 shadow-sm group"
          >
            <span>সব তাঁতের গল্প দেখুন (১৪৮টি ডিজাইন)</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform text-primary group-hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
