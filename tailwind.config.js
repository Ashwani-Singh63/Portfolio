/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      },
      fontSize: {
        // Semantic typography scale - easy to modify globally
        'caption': ['0.625rem', { lineHeight: '1', letterSpacing: '0.1em' }], // 10px
        'caption-sm': ['0.5625rem', { lineHeight: '1', letterSpacing: '0.1em' }], // 9px

        'body-xs': ['0.75rem', { lineHeight: '1.5' }], // 12px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body-xl': ['1.25rem', { lineHeight: '1.6' }], // 20px

        'heading-6': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 24px
        'heading-5': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }], // 32px
        'heading-4': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // 40px
        'heading-3': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }], // 48px
        'heading-2': ['4rem', { lineHeight: '1', letterSpacing: '-0.04em' }], // 64px
        'heading-1': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.045em' }], // 80px

        // Hero specific sizes
        'hero-sm': ['3rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }], // 48px
        'hero-md': ['5rem', { lineHeight: '0.85', letterSpacing: '-0.045em' }], // 80px
        'hero-lg': ['6rem', { lineHeight: '0.8', letterSpacing: '-0.05em' }], // 96px

        // Display sizes for impact
        'display-sm': ['4rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }], // 64px
        'display-md': ['6rem', { lineHeight: '0.85', letterSpacing: '-0.045em' }], // 96px
        'display-lg': ['8rem', { lineHeight: '0.8', letterSpacing: '-0.05em' }], // 128px
      },
      fontWeight: {
        // Consistent font weights
        'display': '900', // For hero titles
        'heading': '800', // For section headings
        'subheading': '700', // For subtitles
        'body-bold': '600', // For emphasized body text
        'body': '500', // For regular body text
        'caption': '800', // For small caps
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
}