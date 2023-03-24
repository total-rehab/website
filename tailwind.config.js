/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#8BCF2D',
        'primary-regular': '#83C32B',
        'primary-dark': '#6EA423',
        'secondary-light': '#3EA5C2',
        'secondary-regular': '#3A9AB5',
        'secondary-dark': '#32859C',
        'on-surface-base': '#1D252B',
        'on-surface-light': '#2E3A45',
        'on-surface-regular': '#263039',
        'surface-base': '#FFFFFF',
        'surface-regular': '#E3E3E3',
        'surface-dark': '#D1D1D1',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Open Sans', 'ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Open Sans'],
        body: ['Open Sans'],
      },
      fontSize: {
        xl: [
          '1.25rem',
          {
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
