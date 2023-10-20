import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#588da8',
      'secondary': '#343a40',
      'white': "#fff",
      'black': "#000",
      'red': "#ef4444",
      'text-light': '#313b44',
      'text-dark': '#f8f9fa',
      'gray-dark': '#343a40',
      'gray': '#6c757d',
      'gray-light': '#d3dce6',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
