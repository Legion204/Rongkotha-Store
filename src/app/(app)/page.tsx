import React from 'react'
import { Hero } from '@/components/home/Hero'
import { PhilosophyStrip } from '@/components/home/PhilosophyStrip'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ArtisanStory } from '@/components/home/ArtisanStory'
import { Testimonials } from '@/components/home/Testimonials'
import { CommunityGallery } from '@/components/home/CommunityGallery'
import { INITIAL_PRODUCTS, SeedProduct } from '@/lib/seed-data'
import { getPayload } from '@/lib/payload'

export const dynamic = 'force-dynamic'

async function getFeaturedProducts(): Promise<SeedProduct[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'products',
      limit: 12,
      depth: 2,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs.map((doc: any) => {
        const primaryImage =
          doc.imageUrl ||
          (Array.isArray(doc.images) && doc.images[0]
            ? typeof doc.images[0] === 'object'
              ? doc.images[0].url || doc.images[0].thumbnailURL
              : null
            : null)

        const secondaryImage =
          doc.hoverImageUrl ||
          (Array.isArray(doc.images) && doc.images[1]
            ? typeof doc.images[1] === 'object'
              ? doc.images[1].url || doc.images[1].thumbnailURL
              : null
            : null)

        return {
          id: String(doc.id),
          title: doc.title,
          bengaliTitle: doc.title,
          slug: doc.slug,
          category: typeof doc.category === 'object' ? doc.category.slug : 'sarees',
          price: doc.price,
          compareAtPrice: doc.compareAtPrice,
          badge: doc.badge,
          stockNote: doc.stock > 0 ? `মাত্র ${doc.stock}টি অবশিষ্ট` : 'স্টক শেষ',
          craftHighlight: doc.details?.weave || '১০০% খাঁটি তাঁতশিল্প',
          image: primaryImage || INITIAL_PRODUCTS[0].image,
          hoverImage: secondaryImage || undefined,
          details: {
            fabric: doc.details?.fabric || 'খাঁটি প্রাকৃতিক সুতো',
            weave: doc.details?.weave || 'হাতে বোনা পিট-লুম',
            washCare: doc.details?.washCare || 'ড্রাই ক্লিন',
            artisanNote: doc.details?.artisanNote || 'দক্ষ তাঁতি পরিবারের পরম মমতায় বোনা।',
          },
          sizes: doc.sizes || ['Free Size'],
        }
      })
    }
  } catch (error) {
    // If database is not populated yet or local dev cold start, use the curated Stitch seed data
    console.log('Using seed fallback data for storefront')
  }

  return INITIAL_PRODUCTS
}

export default async function HomePage() {
  const products = await getFeaturedProducts()

  return (
    <div className="flex flex-col w-full">
      {/* Hero Carousel Section */}
      <Hero />

      {/* Brand Philosophy Strip */}
      <PhilosophyStrip />

      {/* Artisanal Category Grid */}
      <CategoryGrid />

      {/* Shop Our Stories / Featured Products Grid */}
      <FeaturedProducts products={products} />

      {/* Brand Story & Artisan Showcase */}
      <ArtisanStory />

      {/* Testimonials / The Rongkotha Woman */}
      <Testimonials />

      {/* Community Gallery / Instagram Drape Edit */}
      <CommunityGallery />
    </div>
  )
}
