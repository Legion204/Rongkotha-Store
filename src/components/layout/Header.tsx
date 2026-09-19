'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { AnnouncementBar } from './AnnouncementBar'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalCount, openCart } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartCount = mounted ? totalCount() : 0

  const navLinks = [
    { label: 'শাড়ি', href: '/products?category=sarees' },
    { label: 'কুর্তি ও কামিজ', href: '/products?category=kurtas-and-tunics' },
    { label: 'ওড়না ও চাদর', href: '/products?category=dupattas-and-stoles' },
    { label: 'ব্লাউজ', href: '/products?category=artisanal-blouses' },
    { label: 'সকল সৃষ্টি', href: '/products' },
    { label: 'তাঁতের গল্প', href: '/#artisan-story' },
    { label: 'সেল', href: '/products', isAccent: true },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface-canvas/95 backdrop-blur-md border-b border-border-hairline transition-all duration-300">
      <AnnouncementBar />

      <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:bg-surface-warm transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/images/logo.png"
              alt="রংকথা - Rongkotha"
              width={190}
              height={62}
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[14px] tracking-wide transition-colors py-2 relative group ${
                link.isAccent
                  ? 'text-primary font-semibold hover:text-primary-hover'
                  : 'text-text-body hover:text-primary font-medium'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-text-primary">
          <Link
            href="/admin"
            className="hidden sm:flex text-xs px-2.5 py-1 rounded border border-border-hairline text-text-muted hover:text-text-primary hover:border-border-warm transition-colors font-medium"
            title="Payload CMS Admin"
          >
            এডমিন
          </Link>

          <button
            aria-label="অনুসন্ধান করুন"
            className="w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:bg-surface-warm transition-colors"
          >
            <Search size={20} />
          </button>

          <button
            aria-label="পছন্দের তালিকা"
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:bg-surface-warm transition-colors"
          >
            <Heart size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              ৩
            </span>
          </button>

          <Link
            href="/admin"
            aria-label="অ্যাকাউন্ট"
            className="w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:bg-surface-warm transition-colors"
          >
            <User size={20} />
          </Link>

          {/* Cart Drawer Trigger */}
          <button
            onClick={openCart}
            aria-label="শপিং ব্যাগ"
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:bg-surface-warm transition-colors"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-75">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-canvas border-b border-border-hairline px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-[15px] border-b border-border-hairline/50 ${
                link.isAccent ? 'text-primary font-semibold' : 'text-text-body'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[15px] text-text-muted font-medium"
          >
            Payload CMS এডমিন প্যানেল
          </Link>
        </div>
      )}
    </header>
  )
}
