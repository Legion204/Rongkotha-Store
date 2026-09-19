import React from 'react'

export const AnnouncementBar = () => {
  return (
    <div className="bg-surface-warm border-b border-border-hairline py-1.5 px-4 text-center">
      <p className="text-[12px] tracking-wider text-text-muted flex items-center justify-center gap-2 font-medium">
        <span>বাংলার খাঁটি তাঁতশিল্প ও ঐতিহ্যের মেলবন্ধন</span>
        <span className="text-primary font-bold">•</span>
        <span className="hidden sm:inline">
          সারা বাংলাদেশে ক্যাশ অন ডেলিভারি ও ৫,০০০ টাকার অর্ডারে ফ্রি শিপিং
        </span>
        <span className="text-primary font-bold hidden sm:inline">•</span>
        <span>হাতে বোনা পরম মমতায়</span>
      </p>
    </div>
  )
}
