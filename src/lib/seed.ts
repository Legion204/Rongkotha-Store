import { getPayload } from './payload'
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from './seed-data'

export async function seedDatabase() {
  console.log('--- Starting Rongkotha Database Seeding ---')
  const payload = await getPayload()

  // 1. Seed Admin User
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs === 0) {
    console.log('Creating default Admin user: admin@rongkotha.com / admin123456')
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@rongkotha.com',
        password: 'admin123456',
        name: 'Rongkotha Artisan Curator',
      },
    })
  }

  // 2. Seed Categories
  const categoryMap: Record<string, string | number> = {}
  for (const cat of INITIAL_CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: {
        slug: { equals: cat.slug },
      },
      limit: 1,
    })

    if (existing.totalDocs === 0) {
      console.log(`Creating Category: ${cat.title}`)
      const created = await payload.create({
        collection: 'categories',
        data: {
          title: cat.title,
          slug: cat.slug,
          bengaliTitle: cat.bengaliTitle,
          subtitle: cat.subtitle,
          badge: cat.badge,
        },
      })
      categoryMap[cat.slug] = created.id
    } else {
      categoryMap[cat.slug] = existing.docs[0].id
    }
  }

  // 3. Seed Products
  for (const prod of INITIAL_PRODUCTS) {
    const existing = await payload.find({
      collection: 'products',
      where: {
        slug: { equals: prod.slug },
      },
      limit: 1,
    })

    if (existing.totalDocs === 0) {
      console.log(`Creating Product: ${prod.bengaliTitle}`)
      const catId = categoryMap[prod.category] || categoryMap['sarees']

      await payload.create({
        collection: 'products',
        data: {
          title: prod.bengaliTitle,
          slug: prod.slug,
          category: catId as any,
          price: prod.price,
          compareAtPrice: prod.compareAtPrice,
          badge: prod.badge as any,
          sizes: prod.sizes as any,
          stock: 10,
          details: {
            fabric: prod.details.fabric,
            weave: prod.details.weave,
            washCare: prod.details.washCare,
            artisanNote: prod.details.artisanNote,
          },
          imageUrl: prod.image,
          hoverImageUrl: prod.hoverImage,
          images: [],
        },
      })
    }
  }

  console.log('--- Seeding completed successfully! ---')
}
