'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  slug: string
  title: string
  price: number
  size: string
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalCount: () => number
  subtotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const { items } = get()
        const qtyToAdd = item.quantity ?? 1
        const existingIndex = items.findIndex(
          (i) => i.id === item.id && i.size === item.size
        )

        if (existingIndex > -1) {
          const newItems = [...items]
          newItems[existingIndex].quantity += qtyToAdd
          set({ items: newItems, isOpen: true })
        } else {
          set({
            items: [...items, { ...item, quantity: qtyToAdd }],
            isOpen: true,
          })
        }
      },

      removeItem: (id, size) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === id && item.size === size)
          ),
        })
      },

      updateQuantity: (id, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id, size)
          return
        }
        set({
          items: get().items.map((item) =>
            item.id === id && item.size === size
              ? { ...item, quantity }
              : item
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      totalCount: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),

      subtotal: () =>
        get().items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
    }),
    {
      name: 'rongkotha-cart-storage',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
