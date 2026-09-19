'use client'

import React, { useState, useEffect } from 'react'
import { X, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { CartItemRow } from './CartItemRow'

export const CartDrawer = () => {
  const { items, isOpen, closeCart, totalCount, subtotal, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  const handleCheckout = async () => {
    try {
      setLoading(true)
      setCheckoutMessage(null)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customerName: 'সম্মানিত অতিথি ক্রেতা',
          customerEmail: 'guest@rongkotha.com',
          customerPhone: '01700000000',
          shippingAddress: 'ঢাকা, বাংলাদেশ',
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else if (data.demoMode) {
        setCheckoutMessage(
          'অর্ডারটি ডেমো মোডে সফলভাবে গ্রহণ করা হয়েছে! এডমিন প্যানেলে এটি দেখতে পাবেন।'
        )
        setTimeout(() => {
          clearCart()
          closeCart()
        }, 3000)
      } else {
        setCheckoutMessage(data.error || 'চেকআউট প্রক্রিয়ায় সমস্যা হয়েছে')
      }
    } catch (err: any) {
      setCheckoutMessage('নেটওয়ার্ক বা সার্ভার ত্রুটি হয়েছে')
    } finally {
      setLoading(false)
    }
  }

  const freeShippingThreshold = 5000
  const currentSubtotal = subtotal()
  const progressPercent = Math.min(
    100,
    Math.round((currentSubtotal / freeShippingThreshold) * 100)
  )

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface-canvas shadow-drawer flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-border-hairline flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h3 className="font-serif text-xl font-medium text-text-primary">
              শপিং ব্যাগ ({totalCount()})
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-warm transition-colors"
            aria-label="Close cart drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-surface-warm px-5 py-3 border-b border-border-hairline">
          <div className="flex items-center gap-1.5 text-xs text-text-body mb-1.5 font-medium">
            <Truck size={14} className="text-primary" />
            {currentSubtotal >= freeShippingThreshold ? (
              <span className="text-primary font-semibold">
                অভিনন্দন! আপনি ফ্রি শিপিং উপভোগ করছেন।
              </span>
            ) : (
              <span>
                আর{' '}
                <strong className="text-text-primary font-semibold">
                  {formatPrice(freeShippingThreshold - currentSubtotal)}
                </strong>{' '}
                টাকার শপিং করলেই পাচ্ছেন ফ্রি শিপিং!
              </span>
            )}
          </div>
          <div className="w-full h-1.5 bg-border-hairline rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-5 divide-y divide-border-hairline">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-surface-warm flex items-center justify-center text-text-muted mb-4">
                <ShoppingBag size={28} />
              </div>
              <p className="font-serif text-lg text-text-primary mb-1">
                আপনার ব্যাগটি এখনও খালি
              </p>
              <p className="text-xs text-text-muted max-w-xs mb-6">
                বাংলার খাঁটি তাঁতশিল্পের মনোমুগ্ধকর শাড়ি ও পোশাক দেখে পছন্দের তালিকায় যোগ করুন।
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-text-primary hover:bg-primary text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors"
              >
                শপিং শুরু করুন
              </button>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow key={`${item.id}-${item.size}`} item={item} />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border-hairline bg-surface-canvas space-y-4">
            {checkoutMessage && (
              <div className="p-3 bg-tertiary-fixed/40 border border-tertiary/20 text-xs text-tertiary rounded">
                {checkoutMessage}
              </div>
            )}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-text-muted">
                <span>মোট মূল্য (সাবটোটাল)</span>
                <span className="text-text-primary font-semibold">
                  {formatPrice(currentSubtotal)}
                </span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>ডেলিভারি চার্জ</span>
                <span>
                  {currentSubtotal >= freeShippingThreshold ? (
                    <span className="text-primary font-semibold">ফ্রি (Free)</span>
                  ) : (
                    '৳ ৬০ (চেকআউটে নির্ধারিত)'
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-border-hairline flex justify-between text-base font-bold text-text-primary">
                <span>সর্বমোট</span>
                <span className="text-primary font-serif text-xl">
                  {formatPrice(currentSubtotal)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-primary-container hover:bg-primary disabled:bg-text-muted text-white py-3.5 px-4 rounded font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <span>প্রক্রিয়াধীন...</span>
              ) : (
                <>
                  <span>চেকআউট করুন (নিরাপদ পেমেন্ট)</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted pt-1">
              <ShieldCheck size={14} className="text-primary" />
              <span>১০০% নিরাপদ লেনদেন • বিকাশ / কার্ড / ক্যাশ অন ডেলিভারি</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
