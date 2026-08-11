/** @type {import('tailwindcss').Config} */
export default {
  // 'class' strategy: dark mode activates when a `dark` class is present
  // on <html>, which we control ourselves via ThemeContext (see src/context).
  // This gives us full control instead of only following OS preference.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens carried over from the original static portfolio.
        // Naming them semantically (bg, ink, accent) instead of raw hex
        // lets every component reference the same palette consistently,
        // and makes a future re-theme a one-file change.
        light: {
          bg: '#FAFAF8',
          surface: '#FFFFFF',
          ink: '#1C1C1A',
          inkSoft: '#5B5A54',
          line: '#E4E2DC',
        },
        dark: {
          bg: '#14151A',
          surface: '#1B1D24',
          ink: '#F1F0EC',
          inkSoft: '#9C9A93',
          line: '#2B2D36',
        },
        accent: {
          DEFAULT: '#4A5D7E',
          soft: '#EEF1F5',
          softDark: '#232C3B',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
