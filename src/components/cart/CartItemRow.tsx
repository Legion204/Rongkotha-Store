'use client'

import React from 'react'
import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { CartItem, useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

interface CartItemRowProps {
  item: CartItem
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex gap-4 py-4 border-b border-border-hairline">
      {/* Thumbnail */}
      <div className="relative w-20 h-24 rounded overflow-hidden bg-surface-warm shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h4 className="text-sm font-medium text-text-primary line-clamp-1">
              {item.title}
            </h4>
            <button
              onClick={() => removeItem(item.id, item.size)}
              className="text-text-muted hover:text-primary transition-colors p-1"
              aria-label="Remove item"
            >
              <Trash2 size={15} />
            </button>
          </div>
          <p className="text-xs text-text-muted mt-0.5">সাইজ: {item.size}</p>
          <p className="text-sm font-semibold text-text-primary mt-1">
            {formatPrice(item.price)}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border-warm rounded bg-surface-canvas">
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-text-body hover:bg-surface-warm transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={13} />
            </button>
            <span className="w-8 text-center text-xs font-semibold text-text-primary">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-text-body hover:bg-surface-warm transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>
          <span className="text-xs font-medium text-text-muted">
            মোট: {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}
