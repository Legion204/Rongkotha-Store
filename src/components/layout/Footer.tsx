'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Leaf,
  CreditCard,
  Truck,
  Wallet,
} from 'lucide-react'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="w-full bg-surface-warm border-t border-border-hairline pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border-hairline">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-4">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="রংকথা - Rongkotha"
                width={170}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-text-body mb-6 leading-relaxed">
              হাতে বোনা সুতোয় রচিত গল্প ও ঐতিহ্যের মেলবন্ধন। খাঁটি তাঁতশিল্পকে বাঁচিয়ে রেখে সচেতন, নান্দনিক ও টেকসই ফ্যাশন সৃষ্টি করাই আমাদের অঙ্গীকার।
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-text-primary">
              <a
                href="https://instagram.com"
                aria-label="ইনস্টাগ্রাম"
                className="w-8 h-8 rounded-lg border border-border-warm flex items-center justify-center hover:bg-text-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="ফেসবুক"
                className="w-8 h-8 rounded-lg border border-border-warm flex items-center justify-center hover:bg-text-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                aria-label="ইউটিউব"
                className="w-8 h-8 rounded-lg border border-border-warm flex items-center justify-center hover:bg-text-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136c-1.871-.505-9.376-.505-9.376-.505s-7.504 0-9.377.505a3.016 3.016 0 0 0-2.122 2.136c-.504 1.878-.504 5.81-.504 5.81s0 3.932.504 5.81a3.017 3.017 0 0 0 2.122 2.136c1.873.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.504-1.878.504-5.81.504-5.81s0-3.932-.504-5.81zm-13.498 9.324v-7.028l6.25 3.514-6.25 3.514z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shop Collections */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-5">
              শপ কালেকশন
            </h3>
            <ul className="space-y-3 text-xs text-text-body">
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  খাঁটি তাঁতের শাড়ি
                </Link>
              </li>
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  রাজশাহী তসর ও সিল্ক
                </Link>
              </li>
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  ঢাকাই জামদানি সম্ভার
                </Link>
              </li>
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  টাঙ্গাইল ক্লাসিক কটন
                </Link>
              </li>
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  হ্যান্ডব্লক কুর্তি ও কামিজ
                </Link>
              </li>
              <li>
                <Link href="#category-grid" className="hover:text-primary transition-colors">
                  নকশিকাঁথা ব্লাউজ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: About Stories */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-5">
              আমাদের কথা
            </h3>
            <ul className="space-y-3 text-xs text-text-body">
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  রংকথার ইতিহাস
                </Link>
              </li>
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  বাংলার তাঁতশিল্প ও তাঁতিরা
                </Link>
              </li>
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  টেকসই কারুশিল্প
                </Link>
              </li>
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  তাঁতি সমবায় উদ্যোগ
                </Link>
              </li>
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  তাঁত ডায়েরি ও গল্প
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Help & Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-5">
              সাহায্য ও সেবা
            </h3>
            <ul className="space-y-3 text-xs text-text-body">
              <li>
                <Link href="#shop-stories" className="hover:text-primary transition-colors">
                  অর্ডার ট্র্যাক করুন
                </Link>
              </li>
              <li>
                <Link href="#shop-stories" className="hover:text-primary transition-colors">
                  শিপিং ও ডেলিভারি
                </Link>
              </li>
              <li>
                <Link href="#shop-stories" className="hover:text-primary transition-colors">
                  রিটার্ন ও এক্সচেঞ্জ
                </Link>
              </li>
              <li>
                <Link href="#artisan-story" className="hover:text-primary transition-colors">
                  তাঁতের যত্ন নির্দেশিকা
                </Link>
              </li>
              <li>
                <Link href="#footer" className="hover:text-primary transition-colors">
                  যোগাযোগ করুন
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
              রংকথা পরিবারের সদস্য হোন
            </h3>
            <p className="text-xs text-text-body mb-4 leading-relaxed">
              উৎসবের বিশেষ কালেকশন, নতুন জামদানি ও তাঁত ডায়েরির আপডেট সবার আগে পেতে ইমেইল লিখুন।
            </p>
            {subscribed ? (
              <div className="p-3 bg-tertiary-fixed/50 border border-tertiary/20 text-xs text-text-primary rounded font-medium animate-in fade-in">
                ধন্যবাদ! রংকথা পরিবারে আপনাকে সাদর আমন্ত্রণ।
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) setSubscribed(true)
                }}
                className="flex flex-col gap-2.5"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="আপনার ইমেইল ঠিকানা দিন"
                    className="w-full px-3.5 py-2.5 bg-surface-canvas border border-border-warm rounded text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-container text-white text-xs tracking-wide py-2.5 px-4 rounded hover:bg-primary transition-colors font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>যুক্ত হোন</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
            <p className="text-[11px] text-text-muted mt-2.5 flex items-center gap-1.5">
              <Leaf size={14} className="text-primary shrink-0" />
              <span>১০০% প্রাকৃতিক উপাদান ও পরিবেশবান্ধব প্যাকেজিং।</span>
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="text-xs text-text-muted">
              © ২০২৫ রংকথা আর্টিসানাল টেক্সটাইলস লিমিটেড। পরম শ্রদ্ধায় প্রস্তুত।
            </p>
            <span className="hidden md:inline text-border-warm">|</span>
            <span className="hidden md:inline text-xs text-text-muted">
              বাংলাদেশ হ্যান্ডলুম গিল্ড প্রত্যয়িত
            </span>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-4 text-text-muted text-xs tracking-wider">
            <span className="flex items-center gap-1 text-primary font-medium">
              <Wallet size={14} />
              বিকাশ (bKash)
            </span>
            <span className="flex items-center gap-1 text-secondary font-medium">
              <Wallet size={14} />
              নগদ (Nagad)
            </span>
            <span className="flex items-center gap-1">
              <CreditCard size={14} />
              ভিসা / মাস্টারকার্ড
            </span>
            <span className="flex items-center gap-1">
              <Truck size={14} />
              ক্যাশ অন ডেলিভারি
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
