'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  SlidersHorizontal,
  X,
  Search,
  ChevronDown,
  RotateCcw,
  Sparkles,
  ShoppingBag,
} from 'lucide-react'
import { SeedProduct, INITIAL_CATEGORIES } from '@/lib/seed-data'
import { ProductCard } from '@/components/ui/ProductCard'
import { formatPrice } from '@/lib/utils'

interface ProductArchiveClientProps {
  initialProducts: SeedProduct[]
}

export const ProductArchiveClient: React.FC<ProductArchiveClientProps> = ({
  initialProducts,
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || 'all'
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFabric, setSelectedFabric] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [selectedBadge, setSelectedBadge] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('popular')
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  // Sync category state with searchParams
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategory(cat)
    }
  }, [searchParams])

  // Extract unique fabrics from products
  const fabricList = useMemo(() => {
    const fabrics = new Set<string>()
    initialProducts.forEach((p) => {
      if (p.details?.fabric) fabrics.add(p.details.fabric)
    })
    return Array.from(fabrics)
  }, [initialProducts])

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        // Category Filter
        if (selectedCategory !== 'all') {
          if (product.category !== selectedCategory) return false
        }

        // Search Query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase()
          const matchesTitle =
            product.title.toLowerCase().includes(query) ||
            product.bengaliTitle?.toLowerCase().includes(query)
          const matchesFabric = product.details.fabric
            .toLowerCase()
            .includes(query)
          const matchesCraft = product.craftHighlight
            ?.toLowerCase()
            .includes(query)
          if (!matchesTitle && !matchesFabric && !matchesCraft) return false
        }

        // Fabric Filter
        if (selectedFabric !== 'all') {
          if (product.details.fabric !== selectedFabric) return false
        }

        // Price Filter
        if (priceRange === 'under-3000' && product.price >= 3000) return false
        if (
          priceRange === '3000-5000' &&
          (product.price < 3000 || product.price > 5000)
        )
          return false
        if (priceRange === 'above-5000' && product.price <= 5000) return false

        // Badge Filter
        if (selectedBadge !== 'all') {
          if (product.badge !== selectedBadge) return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'newest') return (b.badge?.includes('নতুন') ? 1 : 0) - (a.badge?.includes('নতুন') ? 1 : 0)
        // Default: Popularity
        return (b.badge?.includes('হাতে') ? 1 : 0) - (a.badge?.includes('হাতে') ? 1 : 0)
      })
  }, [
    initialProducts,
    selectedCategory,
    searchQuery,
    selectedFabric,
    priceRange,
    selectedBadge,
    sortBy,
  ])

  const resetFilters = () => {
    setSelectedCategory('all')
    setSearchQuery('')
    setSelectedFabric('all')
    setPriceRange('all')
    setSelectedBadge('all')
    setSortBy('popular')
    router.push('/products')
  }

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery !== '' ||
    selectedFabric !== 'all' ||
    priceRange !== 'all' ||
    selectedBadge !== 'all'

  // Category Pills
  const categories = [
    { slug: 'all', label: 'সব সৃষ্টি' },
    ...INITIAL_CATEGORIES.map((c) => ({
      slug: c.slug,
      label: c.bengaliTitle,
    })),
  ]

  return (
    <div className="w-full bg-surface-canvas min-h-screen pb-24">
      {/* Archive Header Banner */}
      <section className="bg-surface-warm border-b border-border-hairline py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              হোম
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">সকল তাঁত সম্ভার</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-primary font-semibold">
                  {categories.find((c) => c.slug === selectedCategory)?.label}
                </span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-1.5">
                <Sparkles size={14} />
                <span>কারিগর পিট-লুম কালেকশন</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-medium">
                {selectedCategory === 'all'
                  ? 'সকল তাঁত সম্ভার'
                  : categories.find((c) => c.slug === selectedCategory)?.label}
              </h1>
              <p className="text-sm text-text-body mt-2.5 max-w-xl font-light leading-relaxed">
                ঐতিহ্যবাহী জামদানি, সূক্ষ্ম জরি চান্দেরি, তসর সিল্ক এবং আরামদায়ক সুতি খাদি শাড়ির সুনিপুণ গল্পগাথা।
              </p>
            </div>

            {/* Total Results Counter */}
            <div className="flex items-center gap-2 text-xs text-text-muted bg-surface-canvas px-4 py-2 rounded-full border border-border-warm shadow-subtle shrink-0 self-start md:self-auto">
              <ShoppingBag size={14} className="text-primary" />
              <span>
                <strong className="text-text-primary font-semibold">
                  {filteredProducts.length}
                </strong>টি সৃষ্টি উপলব্ধ
              </span>
            </div>
          </div>

          {/* Quick Category Navigation Strip */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pt-8 pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat.slug)
                  if (cat.slug === 'all') {
                    router.push('/products')
                  } else {
                    router.push(`/products?category=${cat.slug}`)
                  }
                }}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? 'bg-text-primary text-white shadow-sm'
                    : 'bg-surface-canvas text-text-body hover:text-text-primary hover:bg-surface-variant border border-border-hairline'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8">
        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-hairline">
          {/* Left: Search Box & Mobile Filter Button */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="পোশাকের নাম, তন্তু বা কারুকাজ খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-surface-warm border border-border-warm rounded focus:outline-none focus:border-text-primary transition-colors text-text-primary placeholder:text-text-muted"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 rounded border border-border-warm bg-surface-canvas text-xs font-medium text-text-primary hover:bg-surface-warm transition-colors"
            >
              <SlidersHorizontal size={14} />
              <span>ফিল্টার</span>
            </button>
          </div>

          {/* Right: Quick Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted hidden sm:inline">বাছাই:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-surface-warm border border-border-warm rounded text-xs text-text-primary px-3.5 py-2 pr-8 focus:outline-none focus:border-text-primary transition-colors font-medium cursor-pointer"
              >
                <option value="popular">সর্বাধিক জনপ্রিয়</option>
                <option value="newest">নতুন আগমন</option>
                <option value="price-asc">মূল্য: কম থেকে বেশি</option>
                <option value="price-desc">মূল্য: বেশি থেকে কম</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs text-text-muted font-medium mr-1">
              সক্রিয় ফিল্টার:
            </span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {categories.find((c) => c.slug === selectedCategory)?.label}
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    router.push('/products')
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedFabric !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-warm text-text-primary border border-border-warm text-xs font-medium">
                {selectedFabric}
                <button onClick={() => setSelectedFabric('all')}>
                  <X size={12} />
                </button>
              </span>
            )}

            {priceRange !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-warm text-text-primary border border-border-warm text-xs font-medium">
                {priceRange === 'under-3000'
                  ? '৳ ৩,০০০ এর নিচে'
                  : priceRange === '3000-5000'
                  ? '৳ ৩,০০০ - ৳ ৫,০০০'
                  : '৳ ৫,০০০ এর বেশি'}
                <button onClick={() => setPriceRange('all')}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedBadge !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed/60 text-text-primary text-xs font-medium">
                {selectedBadge}
                <button onClick={() => setSelectedBadge('all')}>
                  <X size={12} />
                </button>
              </span>
            )}

            <button
              onClick={resetFilters}
              className="text-xs text-primary hover:underline font-semibold flex items-center gap-1 ml-2"
            >
              <RotateCcw size={12} />
              <span>সব মুছুন</span>
            </button>
          </div>
        )}

        {/* Layout Grid: Desktop Filter Sidebar + Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 pr-4">
            {/* Price Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
                মূল্য পরিসীমা
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'সকল মূল্য' },
                  { id: 'under-3000', label: '৳ ৩,০০০ এর নিচে' },
                  { id: '3000-5000', label: '৳ ৩,০০০ থেকে ৳ ৫,০০০' },
                  { id: 'above-5000', label: '৳ ৫,০০০ এর বেশি' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2.5 text-xs text-text-body hover:text-text-primary cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={priceRange === item.id}
                      onChange={() => setPriceRange(item.id)}
                      className="accent-primary"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fabric Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
                তন্তু ও উপাদান
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-none">
                <label className="flex items-center gap-2.5 text-xs text-text-body hover:text-text-primary cursor-pointer">
                  <input
                    type="radio"
                    name="fabric"
                    checked={selectedFabric === 'all'}
                    onChange={() => setSelectedFabric('all')}
                    className="accent-primary"
                  />
                  <span>সব উপাদান</span>
                </label>
                {fabricList.map((fabric) => (
                  <label
                    key={fabric}
                    className="flex items-center gap-2.5 text-xs text-text-body hover:text-text-primary cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="fabric"
                      checked={selectedFabric === fabric}
                      onChange={() => setSelectedFabric(fabric)}
                      className="accent-primary"
                    />
                    <span>{fabric}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Badge Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
                কারিগর সম্ভার
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'সব সৃষ্টি' },
                  { id: 'হাতে বোনা', label: 'হাতে বোনা (Handmade)' },
                  { id: 'নতুন আগমন', label: 'নতুন আগমন (New Arrival)' },
                  { id: 'এক্সক্লুসিভ', label: 'এক্সক্লুসিভ (Exclusive)' },
                  { id: 'ঐতিহ্যবাহী কারুকাজ', label: 'ঐতিহ্যবাহী কারুকাজ' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2.5 text-xs text-text-body hover:text-text-primary cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="badge"
                      checked={selectedBadge === item.id}
                      onChange={() => setSelectedBadge(item.id)}
                      className="accent-primary"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Philosophy Card */}
            <div className="bg-surface-warm p-5 rounded-lg border border-border-hairline text-xs space-y-2">
              <span className="font-semibold text-text-primary block">
                রংকথা অঙ্গীকার
              </span>
              <p className="text-text-muted leading-relaxed">
                প্রতিটি পোশাক সরাসরি কারিগরদের হাতে বোনা। কোনো মধ্যস্বত্বভোগী নেই, ১০০% খাঁটি পিট-লুম তাঁত।
              </p>
            </div>
          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center bg-surface-warm rounded-lg border border-border-hairline p-8">
                <div className="w-16 h-16 rounded-full bg-surface-canvas flex items-center justify-center text-text-muted mb-4 shadow-subtle">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="font-serif text-2xl text-text-primary font-medium mb-2">
                  কোনো সৃষ্টি খুঁজে পাওয়া যায়নি
                </h3>
                <p className="text-xs text-text-muted max-w-sm mb-6">
                  আপনার নির্বাচিত ফিল্টারের সাথে মিলে এমন কোনো পণ্য মেলেনি। অন্য ক্যাটাগরি বা মূল্য নির্বাচন করুন।
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-primary-container hover:bg-primary text-white text-xs uppercase tracking-wider font-semibold rounded shadow-sm transition-colors"
                >
                  সব ফিল্টার সাফ করুন
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Slide-out Drawer */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            onClick={() => setIsFilterDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
          <div className="relative ml-auto w-full max-w-xs bg-surface-canvas h-full p-6 overflow-y-auto shadow-drawer flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
                <h3 className="font-serif text-lg font-medium text-text-primary">
                  ফিল্টার করুন
                </h3>
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-warm"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
                  মূল্য পরিসীমা
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'সকল মূল্য' },
                    { id: 'under-3000', label: '৳ ৩,০০০ এর নিচে' },
                    { id: '3000-5000', label: '৳ ৩,০০০ থেকে ৳ ৫,০০০' },
                    { id: 'above-5000', label: '৳ ৫,০০০ এর বেশি' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs text-text-body cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="mobilePrice"
                        checked={priceRange === item.id}
                        onChange={() => setPriceRange(item.id)}
                        className="accent-primary"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Badge Filter */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
                  কারিগর সম্ভার
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'সব সৃষ্টি' },
                    { id: 'হাতে বোনা', label: 'হাতে বোনা' },
                    { id: 'নতুন আগমন', label: 'নতুন আগমন' },
                    { id: 'এক্সক্লুসিভ', label: 'এক্সক্লুসিভ' },
                    { id: 'ঐতিহ্যবাহী কারুকাজ', label: 'ঐতিহ্যবাহী কারুকাজ' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs text-text-body cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="mobileBadge"
                        checked={selectedBadge === item.id}
                        onChange={() => setSelectedBadge(item.id)}
                        className="accent-primary"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-hairline space-y-2">
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="w-full bg-primary-container text-white py-3 rounded text-xs uppercase tracking-wider font-semibold"
              >
                ফলাফল দেখুন ({filteredProducts.length})
              </button>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full py-2 text-xs text-text-muted hover:text-text-primary"
                >
                  ফিল্টার রিসেট করুন
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
