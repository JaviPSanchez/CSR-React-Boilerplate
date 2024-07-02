/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        /* Indigo */
        'color-brand-50': '#eef2ff',
        // --color-brand-100: #e0e7ff;
        // --color-brand-200: #c7d2fe;
        // --color-brand-500: #6366f1;
        'color-brand-600': '#4f46e5',
        // --color-brand-700: #4338ca;
        // --color-brand-800: #3730a3;
        // --color-brand-900: #312e81;

        /* Grey */
        'color-grey-0': '#ffffff',
        'color-grey-50': '#f9fafb',
        'color-grey-100': '#f3f4f6',
        'color-grey-200': '#e5e7eb',
        'color-grey-300': '#d1d5db',
        'color-grey-400': '#9ca3af',
        'color-grey-500': '#6b7280',
        'color-grey-600': '#4b5563',
        'color-grey-700': '#374151',
        'color-grey-800': '#1f2937',
        'color-grey-900': '#111827',

        'backdrop-color': 'rgba(255, 255, 255, 0.1)',

        // --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        // --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        // --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        // --border-radius-tiny: 3px;
        // --border-radius-sm: 5px;
        'border-radius-md': '7px',
        // --border-radius-lg: 9px;

        border: '(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#eff6fb',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      gridTemplateColumns: {
        'dashboard-layout': '12rem 1fr',
      },
      gridTemplateRows: {
        'dashboard-layout': 'auto 1fr',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
