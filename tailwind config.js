module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'accent': '#6466E9',
      },
      fontFamily: {
        sans: ['Open Sans, sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }