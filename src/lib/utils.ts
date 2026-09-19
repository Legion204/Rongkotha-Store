import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  // Convert number to Bengali numerals format (e.g. ৳ ৪,৮৫০)
  const formatted = new Intl.NumberFormat('en-IN').format(price)
  const bengaliDigits: { [key: string]: string } = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
  }
  const bengaliNum = formatted.replace(/\d/g, (d) => bengaliDigits[d] || d)
  return `৳ ${bengaliNum}`
}
