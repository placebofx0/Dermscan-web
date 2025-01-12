/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './composables/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#0AB4BA',
        secondary: '#3BB9C2',
        tertiary: '#AADDE1',
        quaternary: '#EEE4B1',
        'dark-primary': '#310845',
        'darker-primary': '#230530',
        grey: '#CCC',
        red: '#A10019',
        gold: '#EBC07C',
        'dark-red': '#690010',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2.25rem'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in',
        fadeOut: 'fadeOut 1.5s ease-out',
        fadeUp: '1s ease-in-out forwards',
      },
      dropShadow: {
        'white': '0 10px 12px rgba(255, 255, 255, 1)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        '3xl': '0 30px 60px -20px rgba(0, 0, 0, 0.3)',
      }
  },
  plugins: [
    
  ],
  }
}