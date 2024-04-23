/** @type {import('tailwindcss').Config} */
import { colors, nextui } from '@nextui-org/react'
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          //... 50 to 900
          foreground: '#000',
          DEFAULT: '#FFF'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
