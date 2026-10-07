/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#cc785c',
          active: '#a9583e',
          disabled: '#e6dfd8',
        },
        ink: '#141413',
        body: {
          DEFAULT: '#3d3d3a',
          strong: '#252523',
        },
        muted: {
          DEFAULT: '#6c6a64',
          soft: '#8e8b82',
        },
        hairline: {
          DEFAULT: '#e6dfd8',
          soft: '#ebe6df',
        },
        canvas: '#faf9f5',
        surface: {
          soft: '#f5f0e8',
          card: '#efe9de',
          cream: '#e8e0d2',
          dark: '#181715',
          elevated: '#252320',
          code: '#1f1e1b',
        },
        accent: {
          teal: '#5db8a6',
          amber: '#e8a55a',
          success: '#5db872',
          warning: '#d4a017',
          error: '#c64545',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Tiempos Headline', 'Garamond', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}
