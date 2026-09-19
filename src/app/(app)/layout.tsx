import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'

export const metadata: Metadata = {
  title: 'রংকথা | Rongkotha - Artisanal Bengali Fashion & Handloom Stories',
  description:
    'বাংলার খাঁটি তাঁতশিল্প ও ঐতিহ্যের মেলবন্ধন। শীতলক্ষ্যা ও যমুনার পাড়ের তাঁতশিল্প, ঐতিহ্যবাহী ঢাকাই জামদানি, তসর সিল্ক ও হস্তশিল্পের স্নিগ্ধ রূপ।',
  keywords: [
    'Rongkotha',
    'রংকথা',
    'Handloom Sarees',
    'Dhakai Jamdani',
    'Tussar Silk',
    'Artisanal Fashion Bangladesh',
    'Suta inspired fashion',
  ],
  openGraph: {
    title: 'রংকথা | Rongkotha Artisanal Fashion',
    description: 'সুতোয় গাঁথা সময় ও আত্মার আখ্যান — বাংলার খাঁটি তাঁত সম্ভার।',
    locale: 'bn_BD',
    type: 'website',
  },
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="bg-surface-canvas min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 w-full pt-28">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
