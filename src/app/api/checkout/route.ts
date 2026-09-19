import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getPayload } from '@/lib/payload'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { items, customerEmail, customerName, customerPhone, shippingAddress } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'কার্ট খালি আছে' }, { status: 400 })
    }

    const payload = await getPayload()
    const totalAmount = items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    )

    // Check if live/valid stripe key is provided
    const isStripeConfigured =
      process.env.STRIPE_SECRET_KEY &&
      process.env.STRIPE_SECRET_KEY !== 'sk_test_placeholder' &&
      !process.env.STRIPE_SECRET_KEY.includes('placeholder')

    if (!isStripeConfigured) {
      // In local dev mode without real Stripe keys: Create pending order in Payload and return simulated success
      try {
        const order = await payload.create({
          collection: 'orders',
          data: {
            customerName: customerName || 'সম্মানিত গ্রাহক',
            email: customerEmail || 'guest@rongkotha.com',
            phone: customerPhone || '01700000000',
            shippingAddress: shippingAddress || 'ঢাকা, বাংলাদেশ',
            items: items.map((i: any) => ({
              product: i.id,
              title: i.title,
              size: i.size,
              quantity: i.quantity,
              unitPrice: i.price,
            })),
            totalAmount,
            status: 'pending',
            stripeSessionId: `demo_session_${Date.now()}`,
          },
        })

        return NextResponse.json({
          url: null,
          demoMode: true,
          orderId: order.id,
          message: 'অর্ডারটি পরীক্ষামূলকভাবে প্রস্তুত করা হয়েছে (ডেমো মোড)',
        })
      } catch (err: any) {
        return NextResponse.json({
          demoMode: true,
          message: 'ডেমো অর্ডার সফল (ডাটাবেস সংরক্ষণ ছাড়াই)',
        })
      }
    }

    // Live Stripe Checkout Session
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'bdt',
        product_data: {
          name: item.title,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects cents/poisha
      },
      quantity: item.quantity,
    }))

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      customer_email: customerEmail,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'চেকআউট সম্পন্ন করা যায়নি' },
      { status: 500 }
    )
  }
}
