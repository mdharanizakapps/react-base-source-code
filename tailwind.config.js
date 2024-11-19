/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'body-12': [
          '0.75rem',
          {
            lineHeight: 'normal',
            fontWeight: '500',
          },
        ],
        'body-13': [
          '0.8125rem',
          {
            lineHeight: '1.5',
            fontWeight: '500',
          },
        ],
        'body-14': [
          '0.875rem',
          {
            lineHeight: '1.5',
            fontWeight: '500',
          },
        ],
        'body-16': [
          '1rem',
          {
            lineHeight: '100%',
            fontWeight: '400',
          },
        ],
        'body-18': [
          '1.125',
          {
            lineHeight: '100%',
            fontWeight: '600',
          },
        ],
        'body-30': [
          '1.875rem',
          {
            lineHeight: '100%',
            fontWeight: '400',
          },
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: 'hsl(var(--sidebar-accent))',
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: 'hsl(var(--sidebar-border))',
        ring: 'hsl(var(--sidebar-ring))'
      },
      colors: {
        primary: {
          white: '#fff',
          blue: '#2165F5',
          'blue-1': '#2878E8',
          'blue-2': '#65A3FF',
          'blue-3': '#333DD2',
          black: '#000',
        },
        grey: {
          100: '#F8F9FA',
          200: '#DDDDDD',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: {
          default: {
            gray: '#909090',
            black: '#000',
            textGray: '#3C4043',
          },
        },
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
