import React from 'react'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/seed-data'

export const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-surface-warm border-t border-border-hairline">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs tracking-widest text-primary font-semibold block mb-2 uppercase">
            গ্রাহকদের ভালোবাসার সুর
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-medium">
            রংকথার সমঝদার নারী
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.name}
              className="bg-surface-canvas p-8 rounded-lg shadow-subtle border border-border-hairline flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-tertiary-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-tertiary-amber" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-text-body italic mb-6 leading-relaxed font-light">
                  &quot;{review.quote}&quot;
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-hairline">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                    idx === 0
                      ? 'bg-primary-light text-primary'
                      : idx === 1
                      ? 'bg-tertiary-fixed/60 text-tertiary'
                      : 'bg-secondary-light text-secondary'
                  }`}
                >
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-text-muted">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
