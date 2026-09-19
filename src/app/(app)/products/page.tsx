import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { getPayload } from '@/lib/payload'
import { INITIAL_PRODUCTS, SeedProduct } from '@/lib/seed-data'
import { ProductArchiveClient } from '@/components/products/ProductArchiveClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'সকল তাঁত সম্ভার | রংকথা (Rongkotha Artisanal Collection)',
  description:
    'বাংলার ঐতিহ্যবাহী পিট-লুম তাঁতের ঢাকাই জামদানি, তসর সিল্ক, চান্দেরি জরি শাড়ি এবং আরামদায়ক সুতি কুর্তির সংগ্রহ।',
}

async function getProducts(): Promise<SeedProduct[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'products',
      limit: 100,
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
    console.log('Using seed fallback products for archive')
  }

  return INITIAL_PRODUCTS
}

export default async function ProductsArchivePage() {
  const products = await getProducts()

  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[60vh] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-text-muted">তাঁত সম্ভার লোড হচ্ছে...</p>
          </div>
        </div>
      }
    >
      <ProductArchiveClient initialProducts={products} />
    </Suspense>
  )
}
