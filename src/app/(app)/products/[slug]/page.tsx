import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from '@/lib/payload'
import { INITIAL_PRODUCTS, SeedProduct } from '@/lib/seed-data'
import { ProductDetailClient } from '@/components/products/ProductDetailClient'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

async function getProductBySlug(slug: string): Promise<SeedProduct | null> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2,
      limit: 1,
    })

    if (result.docs && result.docs.length > 0) {
      const doc: any = result.docs[0]
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
        category: typeof doc.category === 'object' ? doc.category.slug : doc.category || 'sarees',
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
    }
  } catch (error) {
    console.log('Using seed fallback lookup for slug:', slug)
  }

  const fallback = INITIAL_PRODUCTS.find((p) => p.slug === slug)
  return fallback || null
}

async function getRelatedProducts(category: string, currentSlug: string): Promise<SeedProduct[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'products',
      where: {
        slug: {
          not_equals: currentSlug,
        },
      },
      limit: 6,
      depth: 2,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs
        .map((doc: any) => {
          const primaryImage =
            doc.imageUrl ||
            (Array.isArray(doc.images) && doc.images[0]
              ? typeof doc.images[0] === 'object'
                ? doc.images[0].url || doc.images[0].thumbnailURL
                : null
              : null)

          return {
            id: String(doc.id),
            title: doc.title,
            bengaliTitle: doc.title,
            slug: doc.slug,
            category: typeof doc.category === 'object' ? doc.category.slug : doc.category || 'sarees',
            price: doc.price,
            compareAtPrice: doc.compareAtPrice,
            badge: doc.badge,
            stockNote: doc.stock > 0 ? `মাত্র ${doc.stock}টি অবশিষ্ট` : 'স্টক শেষ',
            craftHighlight: doc.details?.weave || '১০০% খাঁটি তাঁতশিল্প',
            image: primaryImage || INITIAL_PRODUCTS[0].image,
            hoverImage: doc.hoverImageUrl || undefined,
            details: {
              fabric: doc.details?.fabric || 'খাঁটি প্রাকৃতিক সুতো',
              weave: doc.details?.weave || 'হাতে বোনা পিট-লুম',
              washCare: doc.details?.washCare || 'ড্রাই ক্লিন',
              artisanNote: doc.details?.artisanNote || 'দক্ষ তাঁতি পরিবারের পরম মমতায় বোনা।',
            },
            sizes: doc.sizes || ['Free Size'],
          }
        })
        .slice(0, 4)
    }
  } catch (error) {
    // ignore
  }

  // Fallback related from INITIAL_PRODUCTS
  const sameCat = INITIAL_PRODUCTS.filter(
    (p) => p.category === category && p.slug !== currentSlug
  )
  if (sameCat.length >= 4) return sameCat.slice(0, 4)

  const others = INITIAL_PRODUCTS.filter((p) => p.slug !== currentSlug)
  return others.slice(0, 4)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'পণ্য পাওয়া যায়নি | রংকথা (Rongkotha)',
    }
  }

  return {
    title: `${product.bengaliTitle || product.title} | রংকথা তাঁত সম্ভার`,
    description: `${product.bengaliTitle} - ${product.details?.artisanNote || 'খাঁটি তাঁতের বুনন ও ঐতিহ্যবাহী কারুকাজ।'} মূল্য: ৳${product.price}`,
    openGraph: {
      title: `${product.bengaliTitle || product.title} | রংকথা`,
      description: product.details?.artisanNote,
      images: [
        {
          url: product.image,
          alt: product.bengaliTitle || product.title,
        },
      ],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category, product.slug)

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />
}
