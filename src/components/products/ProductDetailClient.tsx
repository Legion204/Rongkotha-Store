'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCw,
  Check,
  Star,
  Ruler,
  Share2,
  ChevronDown,
  Sparkles,
  PhoneCall,
  ArrowRight,
  X,
  Maximize2,
} from 'lucide-react'
import { SeedProduct } from '@/lib/seed-data'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { ProductCard } from '@/components/ui/ProductCard'

interface ProductDetailClientProps {
  product: SeedProduct
  relatedProducts: SeedProduct[]
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
  relatedProducts,
}) => {
  // Gallery states
  const galleryImages = [
    product.image,
    ...(product.hoverImage ? [product.hoverImage] : []),
  ]

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Free Size')
  const [quantity, setQuantity] = useState(1)
  const [addedAnimation, setAddedAnimation] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [showSizeGuide, setShowSizeGuide] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Accordion open states
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    story: true,
    specs: false,
    care: false,
    shipping: false,
  })

  const { addItem, openCart } = useCartStore()

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.bengaliTitle || product.title,
      price: product.price,
      size: selectedSize,
      image: galleryImages[activeImageIndex] || product.image,
      quantity: quantity,
    })

    setAddedAnimation(true)
    setTimeout(() => {
      setAddedAnimation(false)
    }, 1500)
  }

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.bengaliTitle || product.title,
      price: product.price,
      size: selectedSize,
      image: galleryImages[activeImageIndex] || product.image,
      quantity: quantity,
    })
    openCart()
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator
          .share({
            title: product.bengaliTitle || product.title,
            text: `${product.bengaliTitle || product.title} - রংকথা তাঁতশিল্প`,
            url: window.location.href,
          })
          .catch(() => {})
      } else {
        navigator.clipboard.writeText(window.location.href)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    }
  }

  // Category mapping
  const categoryLabels: Record<string, string> = {
    sarees: 'শাড়ি',
    'kurtas-and-tunics': 'কুর্তি ও কামিজ',
    'dupattas-and-stoles': 'ওড়না ও চাদর',
    'artisanal-blouses': 'কারুশিল্প ব্লাউজ',
  }

  const categoryName = categoryLabels[product.category] || 'তাঁত সম্ভার'

  return (
    <div className="w-full bg-surface-canvas text-text-primary">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 text-xs text-text-muted flex items-center justify-between border-b border-border-hairline/60">
        <nav className="flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">
            হোম
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">
            সকল সম্ভার
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-primary transition-colors"
          >
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-xs">
            {product.bengaliTitle || product.title}
          </span>
        </nav>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors px-2.5 py-1 rounded-full border border-border-hairline hover:border-primary/40 bg-surface-warm"
        >
          <Share2 size={13} />
          <span>{isCopied ? 'লিংক কপি হয়েছে!' : 'শেয়ার'}</span>
        </button>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT: Image Gallery (7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sticky top-28">
            {/* Primary Showcase Image */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface-warm border border-border-hairline/80 shadow-card group">
              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.bengaliTitle || product.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Badges on Gallery */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none z-10">
                {product.badge && (
                  <span
                    className={`font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md ${
                      product.badge.includes('নতুন')
                        ? 'bg-secondary-container text-white'
                        : product.badge.includes('এক্সক্লুসিভ')
                        ? 'bg-surface-canvas text-primary font-semibold'
                        : 'bg-tertiary-fixed text-text-primary'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <span className="font-sans text-[11px] font-medium px-2.5 py-0.5 rounded bg-surface-canvas/90 backdrop-blur-sm text-text-primary shadow-sm border border-border-hairline">
                  {product.details?.weave || 'হাতে বোনা পিট-লুম'}
                </span>
              </div>

              {/* Wishlist Button on Image */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="পছন্দে যোগ করুন"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-body hover:text-primary flex items-center justify-center transition-all shadow-md hover:scale-105"
              >
                <Heart
                  size={20}
                  className={isWishlisted ? 'fill-primary text-primary' : 'text-text-primary'}
                />
              </button>

              {/* Enlarge Hint */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 z-10 p-2 rounded-lg bg-surface-canvas/80 backdrop-blur-sm text-text-primary hover:text-primary hover:bg-surface-canvas shadow transition-all flex items-center gap-1.5 text-xs font-medium"
              >
                <Maximize2 size={14} />
                <span className="hidden sm:inline">বড় করে দেখুন</span>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-surface-warm ${
                      activeImageIndex === idx
                        ? 'border-primary ring-2 ring-primary/20 scale-95 shadow-md'
                        : 'border-border-hairline opacity-75 hover:opacity-100 hover:border-border-warm'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Artisanal Heritage Mini-Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface-warm border border-border-hairline text-center">
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">🌿</span>
                <span className="text-xs font-bold text-text-primary">১০০% খাঁটি সুতো</span>
                <span className="text-[11px] text-text-muted mt-0.5">প্রাকৃতিক ও আরামদায়ক</span>
              </div>
              <div className="flex flex-col items-center border-x border-border-hairline">
                <span className="text-xl mb-1">🖐️</span>
                <span className="text-xs font-bold text-text-primary">হাতে বোনা তাঁত</span>
                <span className="text-[11px] text-text-muted mt-0.5">টাঙ্গাইল ও সোনারগাঁও</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl mb-1">🕊️</span>
                <span className="text-xs font-bold text-text-primary">সিল্ক মার্ক কোয়ালিটি</span>
                <span className="text-[11px] text-text-muted mt-0.5">আসল ঐতিহ্যের নিশ্চয়তা</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details & Buying Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Category / Origin Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-primary/10 text-primary">
                  {product.details?.fabric || 'হস্তশিল্প তাঁত'}
                </span>
                <span className="text-xs text-text-muted">•</span>
                <span className="text-xs text-text-muted">{categoryName}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-primary font-medium leading-tight">
                {product.bengaliTitle || product.title}
              </h1>

              {/* Romanized / English Subtitle */}
              <p className="text-sm text-text-muted italic mt-1 font-sans">{product.title}</p>

              {/* Ratings */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-text-primary ml-1">৪.৯</span>
                </div>
                <span className="text-xs text-text-muted">•</span>
                <span className="text-xs text-text-muted hover:text-primary transition-colors cursor-pointer">
                  ৪২টি রেটিং ও রিভিউ
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-4 rounded-xl bg-surface-warm/70 border border-border-hairline">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm sm:text-base text-text-muted line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                    ৳{product.compareAtPrice - product.price} সাশ্রয়
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted mt-2 flex items-center gap-1.5">
                <Check size={13} className="text-primary" />
                <span>মূল্য করসহ • সারা বাংলাদেশে ফ্রি হোম ডেলিভারি</span>
              </p>
            </div>

            {/* Stock Urgency Indicator */}
            {product.stockNote && (
              <div className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping inline-block" />
                <span className="font-semibold">{product.stockNote}</span>
                <span>— কারিগরের হাতে প্রস্তুত এই অনন্য সৃষ্টিটি দ্রুত সংগ্রহ করুন</span>
              </div>
            )}

            {/* Artisanal Narrative Snippet */}
            <div className="p-4 rounded-xl bg-surface-warm border-l-4 border-primary italic text-xs sm:text-sm text-text-body leading-relaxed">
              &quot;{product.details?.artisanNote ||
                'টাঙ্গাইলের প্রবীণ তাঁতি পরিবারের নিপুণ হাতে ২২ দিনে বোনা অনন্য সৃষ্টি।'}&quot;
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                  সাইজ নির্বাচন করুন:
                </span>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                >
                  <Ruler size={13} />
                  <span>সাইজ গাইড</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                      selectedSize === s
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-surface-canvas text-text-body border-border-warm hover:border-text-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-border-warm rounded-lg bg-surface-canvas">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-10 h-11 flex items-center justify-center text-text-body hover:text-primary transition-colors disabled:opacity-40"
                    aria-label="পরিমাণ কমান"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-text-primary">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-11 flex items-center justify-center text-text-body hover:text-primary transition-colors"
                    aria-label="পরিমাণ বাড়ান"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 h-11 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2 transition-all duration-300 ${
                    addedAnimation
                      ? 'bg-green-700 text-white'
                      : 'bg-primary-container hover:bg-primary text-white hover:shadow-lg'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check size={18} />
                      <span>ব্যাগ-এ যোগ হয়েছে</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      <span>ব্যাগ-এ যোগ করুন</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full h-11 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider font-bold bg-secondary-container hover:bg-secondary text-white transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Sparkles size={16} />
                <span>এখনই কিনুন (ক্যাশ অন ডেলিভারি)</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 border-t border-border-hairline space-y-2.5 text-xs text-text-body">
              <div className="flex items-center gap-2.5">
                <Truck size={16} className="text-primary flex-shrink-0" />
                <span>
                  <strong>দ্রুত ডেলিভারি:</strong> ঢাকায় ৪৮ ঘণ্টার মধ্যে, ঢাকার বাইরে ৩-৫ দিন।
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                <span>
                  <strong>১০০% ক্যাশ অন ডেলিভারি:</strong> পণ্য হাতে পেয়ে চেক করে টাকা দিন।
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <RefreshCw size={16} className="text-primary flex-shrink-0" />
                <span>
                  <strong>৭ দিনের সহজ এক্সচেঞ্জ:</strong> কোনো ত্রুটি বা সাইজ সমস্যা হলে তাৎক্ষণিক পরিবর্তন।
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall size={16} className="text-primary flex-shrink-0" />
                <span>
                  <strong>সাহায্য দরকার?</strong> কল করুন বা হোয়াটসঅ্যাপ করুন{' '}
                  <a
                    href="https://wa.me/8801700000000"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-primary hover:underline"
                  >
                    +৮৮০ ১৭০০-০০০০০০
                  </a>
                </span>
              </div>
            </div>

            {/* Detailed Artisanal Accordions */}
            <div className="border-t border-border-hairline divide-y divide-border-hairline">
              {/* Accordion 1: The Heritage & Weaving Story */}
              <div>
                <button
                  onClick={() => toggleAccordion('story')}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>🧵</span>
                    <span>বুনন ও কারিগর কথা</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted transition-transform duration-300 ${
                      openAccordions.story ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordions.story && (
                  <div className="pb-4 text-xs sm:text-sm text-text-body leading-relaxed space-y-2 animate-in fade-in">
                    <p>
                      {product.details?.artisanNote ||
                        'টাঙ্গাইলের ঐতিহ্যবাহী তাঁতপল্লীতে এই শাড়িটি তৈরি হয়েছে। কারিগরদের বংশপরম্পরায় বয়ে চলা দক্ষতার নিদর্শন এই সৃষ্টি।'}
                    </p>
                    <p className="text-text-muted">
                      প্রতিটি সুতো হাতে বসিয়ে পিট-লুমে বোনা হয়েছে। এতে কোনো কৃত্রিম কেমিক্যাল বা সিনথেটিক মিশ্রণ নেই, ফলে এটি সারাদিন পরিধানে অত্যন্ত আরামদায়ক।
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Fabric & Specifications */}
              <div>
                <button
                  onClick={() => toggleAccordion('specs')}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>📐</span>
                    <span>কাপড়ের বিবরণ ও মাপ</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted transition-transform duration-300 ${
                      openAccordions.specs ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordions.specs && (
                  <div className="pb-4 text-xs sm:text-sm text-text-body leading-relaxed animate-in fade-in">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      <div>
                        <dt className="text-text-muted text-[11px] uppercase">উপাদান (Fabric):</dt>
                        <dd className="font-medium text-text-primary">
                          {product.details?.fabric || 'খাঁটি সুতি ও জরি'}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-text-muted text-[11px] uppercase">তাঁতপদ্ধতি (Weave):</dt>
                        <dd className="font-medium text-text-primary">
                          {product.details?.weave || 'হাতে বোনা পিট-লুম তাঁত'}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-text-muted text-[11px] uppercase">দৈর্ঘ্য (Dimensions):</dt>
                        <dd className="font-medium text-text-primary">
                          {product.category === 'sarees'
                            ? '৫.৫ মিটার (বহর ৪৬ ইঞ্চি)'
                            : 'স্ট্যান্ডার্ড সাইজ'}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-text-muted text-[11px] uppercase">ব্লাউজ পিস:</dt>
                        <dd className="font-medium text-text-primary">
                          {product.category === 'sarees' ? '৮০ সেমি অন্তর্ভুক্ত (ম্যাচিং)' : 'না'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>

              {/* Accordion 3: Wash & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>🧼</span>
                    <span>যত্ন ও ধোয়ার নির্দেশিকা</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted transition-transform duration-300 ${
                      openAccordions.care ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordions.care && (
                  <div className="pb-4 text-xs sm:text-sm text-text-body leading-relaxed space-y-1.5 animate-in fade-in">
                    <p>• {product.details?.washCare || 'ড্রাই ক্লিন আবশ্যক।'}</p>
                    <p>• ঘরে ধুলে মাইল্ড শ্যাম্পু অথবা ঠাণ্ডা পানি ব্যবহার করুন।</p>
                    <p>• শাড়িটি নিংড়াবেন না এবং কড়া রোদ এড়িয়ে ছায়ায় মেলে দিন।</p>
                    <p>• মাঝারি তাপে উল্টো দিক থেকে ইস্ত্রি করুন।</p>
                  </div>
                )}
              </div>

              {/* Accordion 4: Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>📦</span>
                    <span>ডেলিভারি ও রিটার্ন পলিসি</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted transition-transform duration-300 ${
                      openAccordions.shipping ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordions.shipping && (
                  <div className="pb-4 text-xs sm:text-sm text-text-body leading-relaxed space-y-2 animate-in fade-in">
                    <p>
                      <strong>ডেলিভারি চার্জ:</strong> সারা বাংলাদেশে কোনো ডেলিভারি চার্জ নেই (১০০% ফ্রি শিপিং)।
                    </p>
                    <p>
                      <strong>রিটার্ন ও এক্সচেঞ্জ:</strong> কোনো কারণে প্রোডাক্ট পছন্দ না হলে বা কোনো ডিফেক্ট থাকলে ডেলিভারির ৭ দিনের মধ্যে কোনো প্রশ্ন ছাড়াই রিটার্ন বা পরিবর্তন করতে পারবেন।
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Artisan Feature Banner */}
      <section className="w-full py-14 bg-surface-warm border-y border-border-hairline my-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-surface-canvas rounded-2xl p-8 sm:p-12 border border-border-hairline shadow-subtle">
            <div className="flex-1 space-y-4">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                বুননের গল্প ও ঐতিহ্য
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-text-primary font-medium">
                &quot;প্রতিটি সুতোয় আমাদের তিন পুরুষের ঘাম আর ভালোবাসা মাখা&quot;
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl">
                টাঙ্গাইল ও সোনারগাঁয়ের তাঁতিরা দিনের পর দিন পিট-লুমে বসে পরম যত্নে তৈরি করেন এই শাড়ি। এটি আধুনিক ফ্যাশনের সাথে আমাদের শিকড়ের এক অপূর্ব মেলবন্ধন।
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-serif text-primary font-bold text-lg">
                  র
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-text-primary">
                    রফিক মিয়া ও পরিবার
                  </h4>
                  <p className="text-xs text-text-muted">প্রধান কারিগর, তাঁতপল্লী, টাঙ্গাইল</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-72 aspect-[4/3] rounded-xl overflow-hidden bg-surface-warm border border-border-hairline flex-shrink-0">
              <img
                src={product.image}
                alt="Artisan loom work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-border-hairline gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              ক্রেতাদের অনুভূতি
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-text-primary font-medium mt-1">
              রংকথার প্রিয় নারীদের ভালোবাসা
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-text-primary">৪.৯ / ৫.০</span>
            <span className="text-xs text-text-muted">(৪২ জন যাচাইকৃত ক্রেতা)</span>
          </div>
        </div>

        {/* 3 Verified Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-surface-warm/50 border border-border-hairline space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-500" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-text-body italic leading-relaxed">
              &quot;শাড়ির নরম টেক্সচার আর সুতোর নিখুঁত বুনন দেখে সত্যিই মন ভরে গেছে। ছবিতে যেমন সুন্দর ছিল, বাস্তবে তার থেকেও অপূর্ব।&quot;
            </p>
            <div className="pt-2 border-t border-border-hairline/60">
              <span className="text-xs font-bold text-text-primary block">সামিয়া আহমেদ</span>
              <span className="text-[11px] text-text-muted">ধানমন্ডি, ঢাকা • যাচাইকৃত ক্রেতা</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-warm/50 border border-border-hairline space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-500" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-text-body italic leading-relaxed">
              &quot;পহেলা বৈশাখের জন্য নিয়েছিলাম। পরিধানে এত হালকা অথচ এত রাজকীয় লুক দেয়! দ্রুত ডেলিভারির জন্যও ধন্যবাদ।&quot;
            </p>
            <div className="pt-2 border-t border-border-hairline/60">
              <span className="text-xs font-bold text-text-primary block">নুসরাত জাহান</span>
              <span className="text-[11px] text-text-muted">উত্তরা, ঢাকা • যাচাইকৃত ক্রেতা</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-warm/50 border border-border-hairline space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-500" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-text-body italic leading-relaxed">
              &quot;আমাদের দেশের ঐতিহ্যকে এত চমৎকারভাবে উপস্থাপন করার জন্য রংকথাকে সাধুবাদ। খাঁটি হস্তশিল্পের এমন সংগ্রহ সত্যিই বিরল।&quot;
            </p>
            <div className="pt-2 border-t border-border-hairline/60">
              <span className="text-xs font-bold text-text-primary block">মেহজাবীন চৌধুরী</span>
              <span className="text-[11px] text-text-muted">পাঁচলাইশ, চট্টগ্রাম • যাচাইকৃত ক্রেতা</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-border-hairline mt-12">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              ঐতিহ্যের মেলবন্ধন
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-text-primary font-medium">
              সম্পর্কিত অন্যান্য তাঁতের সৃষ্টি
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 italic">
              কারিগরদের নিপুণ হাতে বোনা আরও কিছু বিশেষ নিদর্শন
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`/products?category=${product.category}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-surface-warm hover:bg-text-primary text-text-primary hover:text-white border border-border-warm transition-all duration-300"
            >
              <span>{categoryName}-এর সব সৃষ্টি দেখুন</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-surface-canvas max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-border-hairline relative">
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary p-1 rounded-full hover:bg-surface-warm"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Ruler className="text-primary" size={20} />
              <h3 className="font-serif text-xl font-semibold text-text-primary">
                রংকথা পরিমাপ ও সাইজ নির্দেশিকা
              </h3>
            </div>

            <p className="text-xs text-text-muted mb-4">
              আমাদের সকল শাড়ি ও পোশাক প্রথাগত পিট-লুম তাঁতে হাতে বোনা বিধায় মাপে সামান্য বৈচিত্র্য থাকতে পারে যা প্রতিটি হস্তশিল্পের অনন্য স্বাক্ষর।
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-border-hairline rounded-lg">
                <thead className="bg-surface-warm text-text-primary uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-3 border-b border-border-hairline">বিবরণ</th>
                    <th className="p-3 border-b border-border-hairline">পরিমাপ (মিটার)</th>
                    <th className="p-3 border-b border-border-hairline">পরিমাপ (ইঞ্চি)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-hairline text-text-body">
                  <tr>
                    <td className="p-3 font-medium">শাড়ির দৈর্ঘ্য</td>
                    <td className="p-3">৫.৫ মিটার</td>
                    <td className="p-3">২১৬ ইঞ্চি</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">শাড়ির বহর (প্রস্থ)</td>
                    <td className="p-3">১.১৭ মিটার</td>
                    <td className="p-3">৪৬ ইঞ্চি</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">ব্লাউজ পিস</td>
                    <td className="p-3">০.৮০ মিটার</td>
                    <td className="p-3">৩২ ইঞ্চি</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-border-hairline flex justify-end">
              <button
                onClick={() => setShowSizeGuide(false)}
                className="px-5 py-2 rounded-lg bg-text-primary text-white text-xs font-semibold hover:bg-primary transition-colors"
              >
                বুঝেছি, ধন্যবাদ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-amber-400 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeImageIndex] || product.image}
              alt={product.bengaliTitle || product.title}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}
