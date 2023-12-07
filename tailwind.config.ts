import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
