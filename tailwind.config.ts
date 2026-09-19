import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        'surface-canvas': '#FFFFFF',
        'surface-warm': '#FAFAF9',
        surface: '#FBF8FC',
        'surface-container': '#F0EDF1',
        'surface-variant': '#E4E1E6',
        'border-hairline': '#EEEEEE',
        'border-warm': '#E5E5E5',
        'text-primary': '#18181B',
        'text-charcoal': '#1A1A1A',
        'text-body': '#4A4A4F',
        'text-muted': '#71717A',
        primary: {
          DEFAULT: '#9F000B',
          container: '#C61C1C',
          light: '#FFDAD5',
          hover: '#820008',
        },
        secondary: {
          DEFAULT: '#A63A1F',
          container: '#FD7958',
          light: '#FFDAD2',
        },
        tertiary: {
          DEFAULT: '#634800',
          amber: '#DAA520',
          fixed: '#FFDEA0',
          dim: '#F6BE3B',
        },
        coral: '#EF6F4F',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Noto Serif Bengali', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Hind Siliguri', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        bengali: ['Noto Serif Bengali', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        drawer: '-4px 0 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
