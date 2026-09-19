import React from 'react'
import { Award, Leaf, Users, ShieldCheck } from 'lucide-react'

export const PhilosophyStrip = () => {
  const features = [
    {
      icon: Award,
      title: '১০০% খাঁটি তাঁতশিল্প',
      subtitle: 'প্রত্যয়িত কারিগর পিট-লুম',
      color: 'bg-tertiary-fixed/40 text-tertiary',
    },
    {
      icon: Leaf,
      title: 'প্রাকৃতিক তন্তু ও ভেষজ রং',
      subtitle: 'অ্যাজো-মুক্ত, অর্গানিক সুতো',
      color: 'bg-primary-light text-primary',
    },
    {
      icon: Users,
      title: 'ন্যায্য মজুরি ও তাঁতি সম্মাননা',
      subtitle: '২,৫০০+ তাঁতি পরিবার',
      color: 'bg-tertiary-fixed/40 text-tertiary',
    },
    {
      icon: ShieldCheck,
      title: 'সরাসরি তাঁত থেকে সংগৃহীত',
      subtitle: 'কোনো মধ্যস্বত্বভোগী নেই',
      color: 'bg-secondary-light text-secondary',
    },
  ]

  return (
    <section className="w-full bg-surface-warm py-8 border-b border-border-hairline shadow-subtle">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className={`flex items-center gap-4 px-2 ${
                  idx !== 0 ? 'lg:border-l lg:border-border-hairline lg:pl-6' : ''
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${feature.color}`}
                >
                  <IconComponent size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
