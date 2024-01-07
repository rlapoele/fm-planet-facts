/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    backgroundImage: {
      'img-starfield': 'var(--fmpf-bg-img-starfield)',
    },
    colors: {
      'primary': 'hsl(var(--fmpf-color-graydark) / 1)',
      'primary-contrast': 'hsl(var(--fmpf-color-white) / 1)'
    },
    fontFamily: {
      'Antonio': ["'Antonio'", 'sans-serif'],
      'Spartan': ["'Spartan'", 'sans-serif'],
      'h2-alt': ["'Antonio'", 'sans-serif'],
    },
    fontSize: {
      'h2-alt': [
        'var(--fmpf-h2-alt-font-size)',
        {
          lineHeight: 'var(--fmpf-h2-alt-line-height)',
          letterSpacing: 'var(--fmpf-h2-alt-letter-spacing)',
          fontWeight: 'var(--fmpf-h2-alt-font-weight)',
        }
      ],
    },
		extend: {},
	},
	plugins: [],
}
