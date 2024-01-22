/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    backgroundImage: {
      'img-starfield': 'var(--fmpf-bg-img-starfield)',
    },
    borderWidth: {
      DEFAULT: 'calc(1rem / 16)',
      '0': '0',
      '2': 'calc(2rem / 16)',
      '3': 'calc(3rem / 16)',
      '4': 'calc(4rem / 16)',
    },
    colors: {
      'primary': 'hsl(var(--fmpf-color-graydark) / <alpha-value>)',
      'primary-contrast': 'hsl(var(--fmpf-color-white) / <alpha-value>)',
      'gray-md': 'hsl(var(--fmpf-color-graymedium) / <alpha-value>)',
      'mercury': 'hsl(var(--fmpf-color-teal) / <alpha-value>)',
      'venus': 'hsl(var(--fmpf-color-yellow) / <alpha-value>)',
      'earth': 'hsl(var(--fmpf-color-purple) / <alpha-value>)',
      'mars': 'hsl(var(--fmpf-color-redorange) / <alpha-value>)',
      'jupiter': 'hsl(var(--fmpf-color-red) / <alpha-value>)',
      'saturn': 'hsl(var(--fmpf-color-orange) / <alpha-value>)',
      'uranus': 'hsl(var(--fmpf-color-green) / <alpha-value>)',
      'neptune': 'hsl(var(--fmpf-color-blue) / <alpha-value>)',
      'transparent': 'transparent',
    },
    fontFamily: {
      'Antonio': 'var(--fmpf-font-stack-antonio)',
      'Spartan': 'var(--fmpf-font-stack-spartan)',
      'h1': 'var(--fmpf-font-stack-antonio)',
      'h2': 'var(--fmpf-font-stack-antonio)',
      'h2-alt': 'var(--fmpf-font-stack-antonio)',
      'h3': 'var(--fmpf-font-stack-spartan)',
      'h4': 'var(--fmpf-font-stack-spartan)',
      'h4-alt': 'var(--fmpf-font-stack-spartan)',
      'body': 'var(--fmpf-font-stack-spartan)'
    },
    fontSize: {
      'h1': [
        'var(--fmpf-h1-font-size)',
        {
          lineHeight: 'var(--fmpf-h1-line-height)',
          letterSpacing: 'var(--fmpf-h1-letter-spacing)',
          fontWeight: 'var(--fmpf-h1-font-weight)',
        }
      ],
      'h2': [
        'var(--fmpf-h2-font-size)',
        {
          lineHeight: 'var(--fmpf-h2-line-height)',
          letterSpacing: 'var(--fmpf-h2-letter-spacing)',
          fontWeight: 'var(--fmpf-h2-font-weight)',
        }
      ],
      'h2-alt': [
        'var(--fmpf-h2-alt-font-size)',
        {
          lineHeight: 'var(--fmpf-h2-alt-line-height)',
          letterSpacing: 'var(--fmpf-h2-alt-letter-spacing)',
          fontWeight: 'var(--fmpf-h2-alt-font-weight)',
        }
      ],
      'h3': [
        'var(--fmpf-h3-font-size)',
        {
          lineHeight: 'var(--fmpf-h3-line-height)',
          letterSpacing: 'var(--fmpf-h3-letter-spacing)',
          fontWeight: 'var(--fmpf-h3-font-weight)',
        }
      ],
      'h4': [
        'var(--fmpf-h4-font-size)',
        {
          lineHeight: 'var(--fmpf-h4-line-height)',
          letterSpacing: 'var(--fmpf-h4-letter-spacing)',
          fontWeight: 'var(--fmpf-h4-font-weight)',
        }
      ],
      'h4-alt': [
        'var(--fmpf-h4-alt-font-size)',
        {
          lineHeight: 'var(--fmpf-h4-alt-line-height)',
          letterSpacing: 'var(--fmpf-h4-alt-letter-spacing)',
          fontWeight: 'var(--fmpf-h4-alt-font-weight)',
        }
      ],
      'body': [
        'var(--fmpf-body-font-size)',
        {
          lineHeight: 'var(--fmpf-body-line-height)',
          letterSpacing: 'var(--fmpf-body-letter-spacing)',
          fontWeight: 'var(--fmpf-body-font-weight)',
        }
      ],
      'body-home': [
        'var(--fmpf-body-home-font-size)',
        {
          lineHeight: 'var(--fmpf-body-home-line-height)',
          letterSpacing: 'var(--fmpf-body-home-letter-spacing)',
          fontWeight: 'var(--fmpf-body-home-font-weight)',
        }
      ]

    },
    fontWeight: {
      'regular': 'var(--fmpf-font-weight-regular)',
      'bold': 'var(--fmpf-font-weight-bold)'
    },
    screens: {
      'sm': 'calc(375rem / 16)',
      'md': 'calc(768rem / 16)',
      'lg': 'calc(1440rem / 16)',
    },
    spacing: {
      '0': '0',
      '0.0625': 'var(--fmpf-length-0_0625)',
      '0.125': 'var(--fmpf-length-0_125)',
      '0.1875': 'var(--fmpf-length-0_1875)',
      '0.25': 'var(--fmpf-length-0_25)',
      '0.375': 'var(--fmpf-length-0_375)',
      '0.5': 'var(--fmpf-length-0_5)',
      '0.75': 'var(--fmpf-length-0_75)',
      '0.9375': 'var(--fmpf-length-0_9375)',
      '1': 'var(--fmpf-length-1)',
      '1.125': 'var(--fmpf-length-1_125)',
      '1.1875': 'var(--fmpf-length-1_1875)',
      '1.25': 'var(--fmpf-length-1_25)',
      '1.5': 'var(--fmpf-length-1_5)',
      '1.75': 'var(--fmpf-length-1_75)',
      '2': 'var(--fmpf-length-2)',
      '2.25': 'var(--fmpf-length-2_25)',
      '2.5': 'var(--fmpf-length-2_5)',
      '3': 'var(--fmpf-length-3)',
      '3.125': 'var(--fmpf-length-3_125)',
      '3.5': 'var(--fmpf-length-3_5)',
      '4': 'var(--fmpf-length-4)',
      '4.3125': 'var(--fmpf-length-4_3125)',
      '5': 'var(--fmpf-length-5)',
      '5.25': 'var(--fmpf-length-5_25)',
      '5.375': 'var(--fmpf-length-5_375)',
      '8.75': 'var(--fmpf-length-8_75)',
      '10': 'var(--fmpf-length-10)',
      '10.25': 'var(--fmpf-length-10_25)',
      '11.25': 'var(--fmpf-length-11_25)',
      '17.5': 'var(--fmpf-length-17_5)',
      '19': 'var(--fmpf-length-19)',
      '21.875': 'var(--fmpf-length-21_875)',
      '21.1875': 'var(--fmpf-length-21_1875)',
      '28.25': 'var(--fmpf-length-28_25)',
      '28.75': 'var(--fmpf-length-28_75)',
      '29': 'var(--fmpf-length-29)',
      '35.25': 'var(--fmpf-length-35_25)',
      '47.125': 'var(--fmpf-length-47_125)',
      '47.5': 'var(--fmpf-length-47_5)',
      '69.375':'var(--fmpf-length-69_375)',
      'full': '100%'
    },

    extend: {},
	},
	plugins: [],
}
