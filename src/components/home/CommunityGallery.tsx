import React from 'react'
import Link from 'next/link'
import { ExternalLink, Heart } from 'lucide-react'
import { COMMUNITY_IMAGES } from '@/lib/seed-data'

export const CommunityGallery = () => {
  return (
    <section className="w-full py-20 bg-surface-canvas">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
              আমাদের তাঁতি ও গ্রাহক পরিবার
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-medium">
              #রংকথাগল্প
            </h2>
          </div>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-xs tracking-wider text-text-primary hover:text-primary flex items-center gap-2 font-semibold transition-colors"
          >
            <span>ইনস্টাগ্রামে ফলো করুন @rongkothastories</span>
            <ExternalLink size={15} />
          </Link>
        </div>

        {/* Grid of Real Drapes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {COMMUNITY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative group aspect-square rounded overflow-hidden bg-surface-warm"
            >
              <img
                src={src}
                alt={`Rongkotha community moment ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Heart size={22} className="fill-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
