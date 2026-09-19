'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingBag, Check } from 'lucide-react'
import { SeedProduct } from '@/lib/seed-data'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

interface ProductCardProps {
  product: SeedProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Free Size')
  const [showSizeSelector, setShowSizeSelector] = useState(false)
  const [addedAnimation, setAddedAnimation] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    // If multiple sizes exist and selector isn't shown yet, prompt size selection
    if (product.sizes.length > 1 && !showSizeSelector) {
      setShowSizeSelector(true)
      return
    }

    addItem({
      id: product.id,
      slug: product.slug,
      title: product.bengaliTitle || product.title,
      price: product.price,
      size: selectedSize,
      image: product.image,
      quantity: 1,
    })

    setAddedAnimation(true)
    setTimeout(() => {
      setAddedAnimation(false)
      setShowSizeSelector(false)
    }, 1200)
  }

  return (
    <div
      className="group flex flex-col bg-surface-canvas rounded-lg overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 border border-border-hairline/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowSizeSelector(false)
      }}
    >
      {/* Photo Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-warm">
        {/* Clickable Image linking to Single Product Page */}
        <Link
          href={`/products/${product.slug}`}
          className="absolute inset-0 z-0 block cursor-pointer group/img"
          aria-label={product.bengaliTitle || product.title}
        >
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.bengaliTitle || product.title}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
              isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Secondary Hover Image Swap */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.bengaliTitle || product.title} alternative view`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </Link>

        {/* Craft Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span
              className={`font-sans text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm ${
                product.badge.includes('নতুন')
                  ? 'bg-secondary-container text-white'
                  : product.badge.includes('এক্সক্লুসিভ')
                  ? 'bg-surface-canvas text-primary font-semibold'
                  : 'bg-tertiary-fixed text-text-primary'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setIsWishlisted(!isWishlisted)
          }}
          aria-label="পছন্দে যোগ করুন"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface-canvas/80 backdrop-blur-sm text-text-body hover:text-primary flex items-center justify-center transition-colors shadow-sm"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'fill-primary text-primary' : 'text-text-primary'}
          />
        </button>

        {/* Quick Add Bar / Size Selector Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-text-primary/80 via-text-primary/40 to-transparent transition-transform duration-300 flex flex-col gap-2 z-20 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Size Pills (if size selector triggered or multiple sizes exist) */}
          {showSizeSelector && product.sizes.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 bg-surface-canvas/95 backdrop-blur-md p-2 rounded shadow-md animate-in fade-in slide-in-from-bottom-2">
              <span className="text-[11px] font-medium text-text-muted mr-1">সাইজ:</span>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    setSelectedSize(s)
                  }}
                  className={`px-2 py-0.5 text-xs rounded font-medium transition-colors ${
                    selectedSize === s
                      ? 'bg-primary text-white'
                      : 'bg-surface-warm text-text-body hover:bg-surface-variant'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 rounded text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-1.5 transition-all duration-200 ${
              addedAnimation
                ? 'bg-green-700 text-white'
                : 'bg-primary-container hover:bg-primary text-white'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check size={16} />
                <span>ব্যাগ-এ যোগ হয়েছে</span>
              </>
            ) : (
              <>
                <ShoppingBag size={15} />
                <span>
                  {showSizeSelector && product.sizes.length > 1
                    ? `যোগ করুন (${selectedSize})`
                    : 'ব্যাগ-এ যোগ করুন'}
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information Details (Suta-inspired editorial feel) */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-text-muted block mb-1">
            {product.details.fabric || 'খাঁটি তাঁতের বুনন'}
          </span>
          <Link href={`/products/${product.slug}`} className="block group/title">
            <h3 className="font-serif text-base text-text-primary font-medium group-hover/title:text-primary transition-colors line-clamp-1">
              {product.bengaliTitle || product.title}
            </h3>
          </Link>

          {/* Pricing */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-base font-bold text-text-primary">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-text-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Artisanal details divider */}
        <div className="mt-3 pt-3 border-t border-border-hairline flex items-center justify-between text-text-muted text-[11px]">
          {product.craftHighlight && (
            <span className="flex items-center gap-1 text-text-body font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-dim inline-block" />
              {product.craftHighlight}
            </span>
          )}
          {product.stockNote && (
            <span
              className={
                product.stockNote.includes('অবশিষ্ট')
                  ? 'text-primary font-semibold'
                  : 'text-text-muted'
              }
            >
              {product.stockNote}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
