import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'stock', 'badge'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'মূল্য (টাকা / BDT)',
      },
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      admin: {
        description: 'মূল দাম (ডিসকাউন্টের জন্য স্ট্রাইকথ্রু)',
      },
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: false,
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'হোস্টেড ইমেজ ইউআরএল (ঐচ্ছিক)',
      },
    },
    {
      name: 'hoverImageUrl',
      type: 'text',
      admin: {
        description: 'হোভার সেকেন্ডারি ইমেজ ইউআরএল (ঐচ্ছিক)',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'details',
      type: 'group',
      fields: [
        {
          name: 'fabric',
          type: 'text',
          admin: {
            placeholder: 'উদা: খাঁটি চান্দেরি সিল্ক / সুতি খাদি',
          },
        },
        {
          name: 'weave',
          type: 'text',
          admin: {
            placeholder: 'উদা: পিট-লুম হাতে বোনা',
          },
        },
        {
          name: 'washCare',
          type: 'text',
          admin: {
            placeholder: 'উদা: ড্রাই ক্লিন বা ঠাণ্ডা পানিতে ধোয়া',
          },
        },
        {
          name: 'artisanNote',
          type: 'text',
          admin: {
            placeholder: 'কারিগর বা তাঁতি অঞ্চলের বিবরণ',
          },
        },
      ],
    },
    {
      name: 'sizes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Free Size', value: 'Free Size' },
        { label: 'XS', value: 'XS' },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
        { label: 'XXL', value: 'XXL' },
      ],
      defaultValue: ['Free Size'],
    },
    {
      name: 'stock',
      type: 'number',
      defaultValue: 10,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'badge',
      type: 'select',
      options: [
        { label: 'হাতে বোনা', value: 'হাতে বোনা' },
        { label: 'নতুন আগমন', value: 'নতুন আগমন' },
        { label: 'সীমিত সংস্করণ', value: 'সীমিত সংস্করণ' },
        { label: 'এক্সক্লুসিভ', value: 'এক্সক্লুসিভ' },
        { label: 'ঐতিহ্যবাহী কারুকাজ', value: 'ঐতিহ্যবাহী কারুকাজ' },
        { label: 'Handmade', value: 'Handmade' },
        { label: 'New Arrival', value: 'New Arrival' },
        { label: 'Limited Story', value: 'Limited Story' },
        { label: 'Exclusive', value: 'Exclusive' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
