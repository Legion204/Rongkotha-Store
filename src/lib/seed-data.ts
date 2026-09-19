export interface SeedProduct {
  id: string
  title: string
  bengaliTitle: string
  slug: string
  category: string
  price: number
  compareAtPrice?: number
  badge?: string
  stockNote?: string
  craftHighlight?: string
  image: string
  hoverImage?: string
  details: {
    fabric: string
    weave: string
    washCare: string
    artisanNote: string
  }
  sizes: string[]
}

export const INITIAL_CATEGORIES = [
  {
    id: 'sarees',
    title: 'Sarees',
    bengaliTitle: 'শাড়ি',
    slug: 'sarees',
    subtitle: 'খাঁটি তসর, জামদানি ও সুতি খাদি',
    badge: 'বেস্টসেলার সম্ভার',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPv8cV-HKF3-sy29CD4LJIemlSeXZrZxTkm4M7xEn1pF95K4A2fLx-B7HF3nLGHKoSRBcBEIShNuMQmPY7DQav20v9Xz1ccyFrHuEyh8Db9_DJ-56uZKhCM0w8T3ur6v_sL5R7rS0Z5Ex5SyjcKbCEr70ZsEcP-_24G4no_-tPuq7fLCWRMjcnmR7OmWbZgfgoy2DbEBctrrmxuWI2jVBRIeRkGpRPtQT7UR5Ty8TQxhOGRn8pDu6v9Q',
  },
  {
    id: 'kurtas-and-tunics',
    title: 'Kurtas & Tunics',
    bengaliTitle: 'কুর্তি ও কামিজ',
    slug: 'kurtas-and-tunics',
    subtitle: 'হ্যান্ডব্লক প্রিন্ট ও স্বাচ্ছন্দ্যময় কাটিং',
    badge: 'নতুন আগমন',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGxQRS-SKS2c3GZANYGYeN0bNIZQ1xZwU7oc1EG3pLO15vNTrJ7FMozJj480Zx5RD-dYTt15PRzx22sLFy8j23J1ewSSG52V5IwPPywiDOFF2H_OJ2SP5kfG8DHYopfggibGZxC692zR8L5EfA-90uVcZh-x5M0ojZcPSjabVlGhAxv9Tk1EqiO9D-N9GlMwi8Elzf1AxyQiBDMb14NeEuWh9T09Qu_2486NlQLUsJS_9OhO7ibembdA',
  },
  {
    id: 'dupattas-and-stoles',
    title: 'Dupattas & Stoles',
    bengaliTitle: 'ওড়না ও চাদর',
    slug: 'dupattas-and-stoles',
    subtitle: 'জরি পাড় ও চান্দেরি কারুকাজ',
    badge: 'ঐতিহ্যবাহী নকশা',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYR2plG8DRnxpcFuzgrHeDiJSXRdMWfbA9bkfOa0Rc2Q2_aLs90twqArX1zpFTE5pXHHhLtUFmpWMJrwYNiSQP4RE_OcVlOidczEShwRx-5nJDZ1AYHKODJUhGUBMkR24xO1pTzN9xNtt3s-sMaOjr8j9IuO6XH-Sjotaqgw20KMZqUdAgbT8T88LQXMPvPd8-ij8nuVTLCsmisJEFbIiiEpHudiKeV4TtM95sqbI4OkETdunp-eRcw',
  },
  {
    id: 'artisanal-blouses',
    title: 'Artisanal Blouses',
    bengaliTitle: 'কারুশিল্প ব্লাউজ',
    slug: 'artisanal-blouses',
    subtitle: 'হস্তশিল্পের নকশিকাঁথা ও কলমকারি',
    badge: 'হাতে বোনা নকশিকাঁথা',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGfjcRoTngC421EshJc1kP6Oqj5dsyRxgyS41uxjLE9lEo4_55WZaB6Azxx4ycGsfWMBDVZtSKkowW-gzwNKP5MnH4x_fpkO9UVeWA2IPOpLQNIhfWPRJMnPtbArxrIIMGpZKRo_k351APet2gyuN8-Q8d8INMj-cKVwwgaPjU4r7TQ89Enkao4e5_NBzpN32Q1SUOmwqym8jxD-JhmvSTPS-lik7nYQD64UV8jGAvJWB03OsQ77KWA',
  },
]

export const INITIAL_PRODUCTS: SeedProduct[] = [
  {
    id: 'prod-1',
    title: 'Sonar Bangla Chanderi Saree',
    bengaliTitle: 'সোনার বাংলা চান্দেরি শাড়ি',
    slug: 'sonar-bangla-chanderi-saree',
    category: 'sarees',
    price: 4850,
    compareAtPrice: 5400,
    badge: 'হাতে বোনা',
    craftHighlight: '১০০% খাঁটি জরি কাজ',
    stockNote: 'মাত্র ৩টি অবশিষ্ট',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXDkRa6GbvSEUFc29tvU2x6Iq5ixWRZWNf5J7LDR6zunKaGPUbMNx0rar57SFO9xkhckiuPJAGlnDyJo-WlzlJ4EtEeQ7XLhruwQq_6114DtSRHHTj_nYKdhOtRD096IiBdl3gDfxx6kYOlQP1ow88v7fPtloz-UplS1tPrguADDwnbogKIVa7tAZYXnaCMw4eqO3vBV7LugsmQNhoctIPf_0DU1dTyjBOI8PLdryQB4gUWsny4Eo0vg',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCM9BVv-D7oEDRmQk6OA62757r72M-2F4WTRDtYaU_qmqDQBcV042OseTI8md5yl45WgsP-keg4Tj1cB5NBdO9iOqvg25Nv-yKR3EcT1G1tJKUwaA-95mpB4S4l1AfNxQBlhuo1vHoYfpy0WYUzQJqOD90ImiF4tEwuXlZk2alYLrCGzmTkygR-hKqOGkD9tKgIlRut-j1mDfRXR4yGO9mWFf1qMXPuZJ80NntSYppZyZs4HFBC6R3w',
    details: {
      fabric: 'চান্দেরি সিল্ক ও নরম সুতো',
      weave: 'টাঙ্গাইল পিট-লুম তাঁত',
      washCare: 'ড্রাই ক্লিন বাধ্যতামূলক',
      artisanNote: 'টাঙ্গাইলের প্রবীণ তাঁতি পরিবারের নিপুণ হাতে ২২ দিনে বোনা।',
    },
    sizes: ['Free Size'],
  },
  {
    id: 'prod-2',
    title: 'Neelkanthi Dhakai Jamdani',
    bengaliTitle: 'নীলকণ্ঠী জামদানি শাড়ি',
    slug: 'neelkanthi-dhakai-jamdani',
    category: 'sarees',
    price: 6200,
    badge: 'নতুন আগমন',
    craftHighlight: 'প্রাকৃতিক নীল ডাই',
    stockNote: 'রেডি টু শিপ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCM9BVv-D7oEDRmQk6OA62757r72M-2F4WTRDtYaU_qmqDQBcV042OseTI8md5yl45WgsP-keg4Tj1cB5NBdO9iOqvg25Nv-yKR3EcT1G1tJKUwaA-95mpB4S4l1AfNxQBlhuo1vHoYfpy0WYUzQJqOD90ImiF4tEwuXlZk2alYLrCGzmTkygR-hKqOGkD9tKgIlRut-j1mDfRXR4yGO9mWFf1qMXPuZJ80NntSYppZyZs4HFBC6R3w',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXDkRa6GbvSEUFc29tvU2x6Iq5ixWRZWNf5J7LDR6zunKaGPUbMNx0rar57SFO9xkhckiuPJAGlnDyJo-WlzlJ4EtEeQ7XLhruwQq_6114DtSRHHTj_nYKdhOtRD096IiBdl3gDfxx6kYOlQP1ow88v7fPtloz-UplS1tPrguADDwnbogKIVa7tAZYXnaCMw4eqO3vBV7LugsmQNhoctIPf_0DU1dTyjBOI8PLdryQB4gUWsny4Eo0vg',
    details: {
      fabric: '১০০ কাউন্ট মিহি সুতি',
      weave: 'রূপসী শীতলক্ষ্যা পারের জামদানি পিট-লুম',
      washCare: 'কোমল শ্যাম্পু ওয়াশ বা ড্রাই ক্লিন',
      artisanNote: 'সোনারগাঁয়ের ঐতিহ্যবাহী জামদানি কারিগরের হাতের জ্যামিতিক বুটি কারুকাজ।',
    },
    sizes: ['Free Size'],
  },
  {
    id: 'prod-3',
    title: 'Alta Lal Tussar Saree',
    bengaliTitle: 'আলতা লাল তসর শাড়ি',
    slug: 'alta-lal-tussar-saree',
    category: 'sarees',
    price: 5900,
    compareAtPrice: 6800,
    badge: 'এক্সক্লুসিভ',
    craftHighlight: '১০০% খাঁটি তাঁত সিল্ক',
    stockNote: 'উৎসব স্পেশাল',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8K1eCBe2p6gNrsgZ3l2o_R3B5rhaocrgtm8zwtMbvyBtazy5CfaAP_VwS6uDaw7DP6i9SuDlotwGcldVcsNMbMcWrIPEsS6-zEuB0TyDLpZ7Xoe-FKi35OO6HgRXkp4mLXjNwM4NREmT9L0O8hBsUS7582FjBq6PNO-NOBWNoEKrLzfN9xQycyS_l8MG345qT2WWMSZis3VDb-7cOGs4iPgGyxh2HUMoJXHKveFf3sFXyr4ZjUYeQLA',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXDkRa6GbvSEUFc29tvU2x6Iq5ixWRZWNf5J7LDR6zunKaGPUbMNx0rar57SFO9xkhckiuPJAGlnDyJo-WlzlJ4EtEeQ7XLhruwQq_6114DtSRHHTj_nYKdhOtRD096IiBdl3gDfxx6kYOlQP1ow88v7fPtloz-UplS1tPrguADDwnbogKIVa7tAZYXnaCMw4eqO3vBV7LugsmQNhoctIPf_0DU1dTyjBOI8PLdryQB4gUWsny4Eo0vg',
    details: {
      fabric: 'রাজশাহী মালবেরি ও তসর সিল্ক',
      weave: 'হাতে বোনা খাঁটি সিল্ক তাঁত',
      washCare: 'ড্রাই ক্লিন আবশ্যক',
      artisanNote: 'রেশম চাষি ও তাঁতিদের যৌথ উদ্যোগে উৎপন্ন ভেষজ লাল রঙের বুনন।',
    },
    sizes: ['Free Size'],
  },
  {
    id: 'prod-4',
    title: 'Sandhyatara Handblock Kurta Set',
    bengaliTitle: 'সন্ধ্যাতারা হ্যান্ডব্লক কুর্তা সেট',
    slug: 'sandhyatara-handblock-kurta-set',
    category: 'kurtas-and-tunics',
    price: 3650,
    badge: 'ঐতিহ্যবাহী কারুকাজ',
    craftHighlight: 'আরামদায়ক খাঁটি কটন',
    stockNote: 'সাইজ: XS থেকে XXL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHehr31BNJ3iIcHAo79mFhNrh7_XSYjUFmygCPLL1KQCUFgeuJgY6NP1Hev4XiKlnBO8Suew_vZwWbkVy1VDB0rqiMIDSTWCyahLRKQVuowHi3ER5LXqWBAwyDny_SmRgqyqzmdN27yFEQJClL2KFL6Q_c4k5A1x_2Z3fCNtTGA_t_munZCLxRR0S4PejvUHzaLhlBA-RgeYh1T-2Uiyfikrg9gwuhP-n9XpAh3OhMdYZuYc9_agLrlg',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCM9BVv-D7oEDRmQk6OA62757r72M-2F4WTRDtYaU_qmqDQBcV042OseTI8md5yl45WgsP-keg4Tj1cB5NBdO9iOqvg25Nv-yKR3EcT1G1tJKUwaA-95mpB4S4l1AfNxQBlhuo1vHoYfpy0WYUzQJqOD90ImiF4tEwuXlZk2alYLrCGzmTkygR-hKqOGkD9tKgIlRut-j1mDfRXR4yGO9mWFf1qMXPuZJ80NntSYppZyZs4HFBC6R3w',
    details: {
      fabric: '১০০% শ্বাসযোগ্য খাঁটি সুতি',
      weave: 'কাঠের তৈরি খোদাই করা ব্লক ছাপ',
      washCare: 'স্বাভাবিক পানিতে নরম ডিটারজেন্ট দিয়ে ধোয়া',
      artisanNote: 'প্রাকৃতিক উদ্ভিজ্জ রং ব্যবহার করে নিপুণ হাতে কাঠের ব্লকে নকশা করা।',
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'prod-5',
    title: 'Mayurkanthi Jamdani Dupatta',
    bengaliTitle: 'ময়ূরকণ্ঠী জামদানি ওড়না',
    slug: 'mayurkanthi-jamdani-dupatta',
    category: 'dupattas-and-stoles',
    price: 2850,
    compareAtPrice: 3200,
    badge: 'হাতে বোনা',
    craftHighlight: 'সূক্ষ্ম জরি বুটি কাজ',
    stockNote: 'রেডি টু শিপ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYR2plG8DRnxpcFuzgrHeDiJSXRdMWfbA9bkfOa0Rc2Q2_aLs90twqArX1zpFTE5pXHHhLtUFmpWMJrwYNiSQP4RE_OcVlOidczEShwRx-5nJDZ1AYHKODJUhGUBMkR24xO1pTzN9xNtt3s-sMaOjr8j9IuO6XH-Sjotaqgw20KMZqUdAgbT8T88LQXMPvPd8-ij8nuVTLCsmisJEFbIiiEpHudiKeV4TtM95sqbI4OkETdunp-eRcw',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCM9BVv-D7oEDRmQk6OA62757r72M-2F4WTRDtYaU_qmqDQBcV042OseTI8md5yl45WgsP-keg4Tj1cB5NBdO9iOqvg25Nv-yKR3EcT1G1tJKUwaA-95mpB4S4l1AfNxQBlhuo1vHoYfpy0WYUzQJqOD90ImiF4tEwuXlZk2alYLrCGzmTkygR-hKqOGkD9tKgIlRut-j1mDfRXR4yGO9mWFf1qMXPuZJ80NntSYppZyZs4HFBC6R3w',
    details: {
      fabric: 'চান্দেরি সিল্ক ও মিহি সুতো',
      weave: 'হাতে বোনা জামদানি নকশা',
      washCare: 'কোমল ড্রাই ক্লিন',
      artisanNote: 'ঐতিহ্যবাহী ময়ূরপঙ্খী মোটিফ দিয়ে সজ্জিত বিলাসবহুল ওড়না।',
    },
    sizes: ['Free Size'],
  },
  {
    id: 'prod-6',
    title: 'Nokshikatha Artisanal Blouse',
    bengaliTitle: 'নকশিকাঁথা কারুশিল্প ব্লাউজ',
    slug: 'nokshikatha-artisanal-blouse',
    category: 'artisanal-blouses',
    price: 2450,
    badge: 'ঐতিহ্যবাহী কারুকাজ',
    craftHighlight: 'হাতে সূঁচিশিল্প কাঁথাস্টিচ',
    stockNote: 'মাত্র ২টি অবশিষ্ট',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGfjcRoTngC421EshJc1kP6Oqj5dsyRxgyS41uxjLE9lEo4_55WZaB6Azxx4ycGsfWMBDVZtSKkowW-gzwNKP5MnH4x_fpkO9UVeWA2IPOpLQNIhfWPRJMnPtbArxrIIMGpZKRo_k351APet2gyuN8-Q8d8INMj-cKVwwgaPjU4r7TQ89Enkao4e5_NBzpN32Q1SUOmwqym8jxD-JhmvSTPS-lik7nYQD64UV8jGAvJWB03OsQ77KWA',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXDkRa6GbvSEUFc29tvU2x6Iq5ixWRZWNf5J7LDR6zunKaGPUbMNx0rar57SFO9xkhckiuPJAGlnDyJo-WlzlJ4EtEeQ7XLhruwQq_6114DtSRHHTj_nYKdhOtRD096IiBdl3gDfxx6kYOlQP1ow88v7fPtloz-UplS1tPrguADDwnbogKIVa7tAZYXnaCMw4eqO3vBV7LugsmQNhoctIPf_0DU1dTyjBOI8PLdryQB4gUWsny4Eo0vg',
    details: {
      fabric: 'খাঁটি লাল র সিল্ক',
      weave: 'হস্তচালিত নকশিকাঁথা ফোঁড়',
      washCare: 'ড্রাই ক্লিন বাধ্যতামূলক',
      artisanNote: 'যশোরের গ্রামীণ নিপুণ কারিগর নারীদের পরম মমতায় সূঁচের কাজে ফোটানো।',
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'prod-7',
    title: 'Padmabati Tangail Cotton Saree',
    bengaliTitle: 'পদ্মাবতী টাঙ্গাইল তাঁতের শাড়ি',
    slug: 'padmabati-tangail-cotton-saree',
    category: 'sarees',
    price: 3450,
    compareAtPrice: 3900,
    badge: 'নতুন আগমন',
    craftHighlight: '১০০% টাঙ্গাইল সুতি তাঁত',
    stockNote: 'রেডি টু শিপ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPv8cV-HKF3-sy29CD4LJIemlSeXZrZxTkm4M7xEn1pF95K4A2fLx-B7HF3nLGHKoSRBcBEIShNuMQmPY7DQav20v9Xz1ccyFrHuEyh8Db9_DJ-56uZKhCM0w8T3ur6v_sL5R7rS0Z5Ex5SyjcKbCEr70ZsEcP-_24G4no_-tPuq7fLCWRMjcnmR7OmWbZgfgoy2DbEBctrrmxuWI2jVBRIeRkGpRPtQT7UR5Ty8TQxhOGRn8Du6v9Q',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8K1eCBe2p6gNrsgZ3l2o_R3B5rhaocrgtm8zwtMbvyBtazy5CfaAP_VwS6uDaw7DP6i9SuDlotwGcldVcsNMbMcWrIPEsS6-zEuB0TyDLpZ7Xoe-FKi35OO6HgRXkp4mLXjNwM4NREmT9L0O8hBsUS7582FjBq6PNO-NOBWNoEKrLzfN9xQycyS_l8MG345qT2WWMSZis3VDb-7cOGs4iPgGyxh2HUMoJXHKveFf3sFXyr4ZjUYeQLA',
    details: {
      fabric: 'নরম জৈব তুলা ও পাড়',
      weave: 'টাঙ্গাইলের ঐতিহ্যবাহী প্যাঁচানো পিট-লুম',
      washCare: 'হালকা শ্যাম্পু ওয়াশ',
      artisanNote: 'প্রতিদিনের আরাম ও আভিজাত্যের নিখুঁত মেলবন্ধন।',
    },
    sizes: ['Free Size'],
  },
  {
    id: 'prod-8',
    title: 'Meghmallar Indigo Kurti',
    bengaliTitle: 'মেঘমল্লার প্রাকৃতিক নীল কুর্তি',
    slug: 'meghmallar-indigo-kurti',
    category: 'kurtas-and-tunics',
    price: 2950,
    badge: 'এক্সক্লুসিভ',
    craftHighlight: 'প্রাকৃতিক নীল ও ভেজিটেবল ডাই',
    stockNote: 'উৎসব কালেকশন',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGxQRS-SKS2c3GZANYGYeN0bNIZQ1xZwU7oc1EG3pLO15vNTrJ7FMozJj480Zx5RD-dYTt15PRzx22sLFy8j23J1ewSSG52V5IwPPywiDOFF2H_OJ2SP5kfG8DHYopfggibGZxC692zR8L5EfA-90uVcZh-x5M0ojZcPSjabVlGhAxv9Tk1EqiO9D-N9GlMwi8Elzf1AxyQiBDMb14NeEuWh9T09Qu_2486NlQLUsJS_9OhO7ibembdA',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHehr31BNJ3iIcHAo79mFhNrh7_XSYjUFmygCPLL1KQCUFgeuJgY6NP1Hev4XiKlnBO8Suew_vZwWbkVy1VDB0rqiMIDSTWCyahLRKQVuowHi3ER5LXqWBAwyDny_SmRgqyqzmdN27yFEQJClL2KFL6Q_c4k5A1x_2Z3fCNtTGA_t_munZCLxRR0S4PejvUHzaLhlBA-RgeYh1T-2Uiyfikrg9gwuhP-n9XpAh3OhMdYZuYc9_agLrlg',
    details: {
      fabric: '১০০% খাঁটি দেশীয় সুতি',
      weave: 'দাবু ও বাটিক মিশ্রিত ব্লক প্রিন্ট',
      washCare: 'ঠাণ্ডা পানিতে ধুয়ে ছায়ায় শুকান',
      artisanNote: 'প্রাকৃতিক উদ্ভিজ্জ নীলগাছের পাতা থেকে প্রস্তুত রঞ্জকে তৈরি।',
    },
    sizes: ['S', 'M', 'L', 'XL'],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'সোনার বাংলা শাড়িটি গায়ে জড়ানোর সাথে সাথেই এক অন্যরকম অনুভূতি হলো। আসল তাঁতের কাপড়ের যে নিজস্ব কোমলতা ও আভিজাত্য, তা কারখানার পোশাকে কখনও পাওয়া যায় না। পরিবারের ঘরোয়া উৎসবে সবার প্রশংসা পেয়েছি।',
    name: 'আফসানা নাজনীন',
    initials: 'আন',
    title: 'ধানমন্ডি, ঢাকা • বিশ্বস্ত ক্রেতা',
  },
  {
    quote:
      'প্রকৃত তাঁতিদের সরাসরি সহায়তা করতে পেরে সবচেয়ে ভালো লাগছে। অতিরিক্ত কোনো অপ্রয়োজনীয় দাম ছাড়াই এমন চমৎকার কোয়ালিটি রংকথা ছাড়া আর কোথাও পাওয়া সত্যিই বিরল।',
    name: 'ড. রাবেয়া সুলতানা',
    initials: 'রা',
    title: 'চট্টগ্রাম • অধ্যাপক ও বস্ত্র গবেষক',
  },
  {
    quote:
      'ওদের জামদানি শাড়ির আঁচল আর কাজের সূক্ষ্মতা যেন জীবন্ত কবিতা! এত নরম ও আরামদায়ক শাড়ি আমি খুব কমই পরেছি। রংকথা আমাদের মাটির ঐতিহ্যকে অনন্য উচ্চতায় নিয়ে যাচ্ছে।',
    name: 'সামিয়া চৌধুরী',
    initials: 'সাম',
    title: 'সিলেট • স্থপতি ও শিল্পরসিক',
  },
]

export const COMMUNITY_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCt7490NH6kdqrogv67UUDa8zlVTeedV1-IviEgw_IRir97NqsAQSRXKMwI_Fgkzuv4RYK1zgv__cLJ4AXbd4IkdC3qp3v7yEcwFIzp71b62Z5rULiJSaRuUpTmf8OSlvRSOAKaoVu19qUkJC7vpj0at0XHWolXKDYyB-1jIFSRdv-EsDfK-JOI1QNSMbskr82SawjK7bi8b2c6wA2KZslSN5Vo3to6o-pJYwbdLWO-5ZbJIHIUe5-QhA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuVKgGmIsSN5rkrye4X-jFZTF1J5bGOZ6kJc2un5Bo42O3SdgeAiDya_gB_MJNbsEL5v9KXcmRrvdalwnM8umnaG2_CNZ_XdLmdGypXQxEmjprJn7oCip6m7b3_v9GrpIAIE_A2Sep1IC78fcXJ3NvaBiOe4n6zuIi95O1mJnLbmzuiWxUgZAlTZHj26-q590ZUb89WTSdWDUw7IQ07wFxNTP2XnlWhOjN0i4toisU64Fkv6Q6PScNQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKzWyplCVs8Btqogh6wEgduoO-EcJ8KoFS2j_YKe0JkvHySNjoBkRic9Ce_Z4zOt1SBL3xx_ywMSkouc1_0zxrVTqxqq3OdEBI42T9dvC3ApdKEYYUdRKQISd8m_zshkxd8J_Y8jrwlF0mg1w-2k3hEplKQcBMQzv0QifvPFErwtpexoxBPmD_vMR37_NKnYqb_fo5Xo-OD0S87FCOgumlzpozUH70-YIZQqAVCX5fXgzUYiDRQGYF3w',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC239Plj8Cgf2LdUiMY0HO8EGu4RqRRHDBtjtA30Ai2C-u4K_0P94om8gsv7EaC74RwEYdJ_GLpNwIEXxsvFdE6QmPi2dappoFoS7RpWcWRyLXNy2qYFrmkVBIGaroGYbB5pDHTV8ROHqzxbd4A0-r_6sXRa4MxA_xJ9weSAYyMkt_ZTcQC6Cw6tP1EXu1rRv-p0sEjYsmyv8BVC-1ZtULqXd02PbvONat7gPWci-EEgnDsqv9IxhBTxA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDW4vk8QkboDYdh06hlREU6FhqHSJLf1Yx2su7ek9nEleX1sqt0EXKhvufYT1gpGUanEv1qaNbJhbWLt-T3xjeinTc7SA8uKub1g-l2aFceE1OOtJqY7HzYKeGHzdgFT8ZPefrE-JN6luYAG3QSW5mBLQPeOoE3EKO8hqaDTKMQSFoIDVVsnIrNtUCwTFlFC4ZyMfoMUMQ4EqD1_rAKiX79AczcRqQeIALconP91X1FOY0K0NfpAvUdXw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBk8Mi_9S8vYuCUUpzKExJr5lbwz_wCeAKccCvqPnZ33IX6j3ujkoc964uZbmSeZORXsLF_vbrt87MOBtAUFB4bLKxJgnA2M43x48mgLaJ_bvFkoEGYMbXsQ2-15lRhJLcEbB8KEydYpoARqOHRxrjwH8H9ipLSJ8BK2s1SmivyXBBculYJt8h4bYxtxNE6VjvuCDOp4r-ogbgWyOeSblWxDHIAUWky13IZrh_b7lStVa6Gxgmn1kvOVw',
]
